import { useState, useCallback, useEffect, useRef } from 'react';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import SakuraPetals from './components/SakuraPetals';
import CastleHome from './components/CastleHome';
import LoginPage from './components/LoginPage';
import LearningHall from './components/LearningHall';
import ResourcePage from './components/ResourcePage';
import QuizPage from './components/QuizPage';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';

const VIEWS = {
  HOME: 'home',
  LOGIN: 'login',
  HALL: 'hall',
  RESOURCE: 'resource',
  QUIZ: 'quiz',
};

function App() {
  const [currentView, setCurrentView] = useState(() => localStorage.getItem('currentView') || VIEWS.HOME);
  const [selectedCategory, setSelectedCategory] = useState(() => localStorage.getItem('selectedCategory') || null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userName, setUserName] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const isInitialAuthCheck = useRef(true);

  useEffect(() => {
    localStorage.setItem('currentView', currentView);
  }, [currentView]);

  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem('selectedCategory', selectedCategory);
    } else {
      localStorage.removeItem('selectedCategory');
    }
  }, [selectedCategory]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch the custom name from Firestore database
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists() && userDoc.data().displayName) {
            setUserName(userDoc.data().displayName);
          } else {
            setUserName(user.displayName || user.email.split('@')[0]);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserName(user.displayName || user.email.split('@')[0]);
        }
        
        if (isInitialAuthCheck.current) {
          const savedView = localStorage.getItem('currentView');
          if (savedView && [VIEWS.HALL, VIEWS.RESOURCE, VIEWS.QUIZ].includes(savedView)) {
            setCurrentView(savedView);
          } else {
            setCurrentView(VIEWS.HALL);
          }
        }
      } else {
        // User is signed out on refresh
        if (isInitialAuthCheck.current) {
          setCurrentView(VIEWS.HOME);
          localStorage.removeItem('currentView');
          localStorage.removeItem('selectedCategory');
        }
      }
      isInitialAuthCheck.current = false;
      setIsAuthChecking(false);
    });

    return () => unsubscribe();
  }, []);

  const handleEnterCastle = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(VIEWS.LOGIN);
      setIsTransitioning(false);
    }, 1800);
  }, [isTransitioning]);

  const handleLogin = useCallback((name, isNew = false) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setUserName(name);
    setIsNewUser(isNew);
    setTimeout(() => {
      setCurrentView(VIEWS.HALL);
      setIsTransitioning(false);
    }, 2000);
  }, [isTransitioning]);

  const handleLogout = useCallback(async () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    try {
      if (auth) {
        await signOut(auth);
      }
    } catch (error) {
      console.error("Error signing out: ", error);
    }
    
    setUserName('');
    setIsNewUser(false);
    localStorage.removeItem('currentView');
    localStorage.removeItem('selectedCategory');

    // Transition back to exterior castle page
    setTimeout(() => {
      setCurrentView(VIEWS.HOME);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  const handleSelectCategory = useCallback((categoryId) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedCategory(categoryId);
    setTimeout(() => {
      if (categoryId === 'quiz') {
        setCurrentView(VIEWS.QUIZ);
      } else {
        setCurrentView(VIEWS.RESOURCE);
      }
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  const handleBackToHall = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(VIEWS.HALL);
      setSelectedCategory(null);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  const handleBackToCastle = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(VIEWS.HOME);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  if (isAuthChecking) {
    return <div className="app loading-state"></div>; // Prevents flashing the home page while Firebase checks
  }

  return (
    <div className="app">
      <Analytics />
      <SpeedInsights />
      <SakuraPetals count={60} />

      <AnimatePresence mode="wait">
        {currentView === VIEWS.HOME && !isTransitioning && (
          <CastleHome key="home" onEnter={handleEnterCastle} />
        )}

        {currentView === VIEWS.LOGIN && !isTransitioning && (
          <LoginPage key="login" onLogin={handleLogin} />
        )}

        {currentView === VIEWS.HALL && !isTransitioning && (
          <LearningHall
            key="hall"
            userName={userName}
            isNewUser={isNewUser}
            onSelectCategory={handleSelectCategory}
            onBack={handleBackToCastle}
            onLogout={handleLogout}
          />
        )}

        {currentView === VIEWS.RESOURCE && !isTransitioning && (
          <ResourcePage
            key={`resource-${selectedCategory}`}
            categoryId={selectedCategory}
            onBack={handleBackToHall}
          />
        )}

        {currentView === VIEWS.QUIZ && !isTransitioning && (
          <QuizPage
            key="quiz"
            userName={userName}
            onBack={handleBackToHall}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
