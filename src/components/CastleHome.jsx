import { useState } from 'react';
import { motion } from 'framer-motion';
import castleImg from '../assets/castle_exterior.png';
import './CastleHome.css';

const CastleHome = ({ onEnter }) => {
    const [isExiting, setIsExiting] = useState(false);

    const handleEnter = () => {
        setIsExiting(true);
        onEnter();
    };

    return (
        <motion.div
            className="castle-home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                scale: 3.5,
                opacity: 0,
                transition: { duration: 1.8, ease: [0.25, 0.8, 0.25, 1] }
            }}
            style={{ willChange: 'transform, opacity' }}
        >
            {/* Background Image */}
            <div className="castle-bg">
                <img src={castleImg} alt="Japanese Castle" className="castle-bg-img" />
                <div className="castle-overlay" />
            </div>

            {/* White wash overlay — simulates brightness without GPU-heavy filters */}
            <motion.div
                className="castle-white-wash"
                initial={{ opacity: 0 }}
                animate={{ opacity: isExiting ? 1 : 0 }}
                transition={{ duration: 1.6, ease: 'easeIn' }}
            />

            {/* Main Content */}
            <motion.div
                className="castle-content"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <motion.h1
                    className="castle-title-jp"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    日本語の城
                </motion.h1>

                <motion.h2
                    className="castle-title-en"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    The Castle of Japanese Learning
                </motion.h2>

                <motion.p
                    className="castle-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    A serene journey through the Japanese language
                </motion.p>

                <motion.button
                    className="enter-btn"
                    onClick={handleEnter}
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(204, 0, 0, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                >
                    <span className="enter-btn-jp">入る</span>
                    <span className="enter-btn-en">ENTER</span>
                </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>Begin Your Journey</span>
                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    ↓
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CastleHome;
