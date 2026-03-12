import { motion } from 'framer-motion';
import './ResourcePage.css';

const resourceData = {
    hiragana: {
        title: 'ひらがな・カタカナ',
        titleEn: 'Hiragana & Katakana',
        icon: 'あ',
        sections: [
            {
                heading: 'Hiragana Basics (ひらがな)',
                desc: 'Hiragana is the foundational Japanese writing system with 46 basic characters. It represents every sound in Japanese and is used for native words, grammatical particles, and verb/adjective endings. Mastering hiragana is the essential first step for JLPT N5.',
                items: [
                    ['あ (a)', 'い (i)', 'う (u)', 'え (e)', 'お (o)'],
                    ['か (ka)', 'き (ki)', 'く (ku)', 'け (ke)', 'こ (ko)'],
                    ['さ (sa)', 'し (shi)', 'す (su)', 'せ (se)', 'そ (so)'],
                    ['た (ta)', 'ち (chi)', 'つ (tsu)', 'て (te)', 'と (to)'],
                    ['な (na)', 'に (ni)', 'ぬ (nu)', 'ね (ne)', 'の (no)'],
                    ['は (ha)', 'ひ (hi)', 'ふ (fu)', 'へ (he)', 'ほ (ho)'],
                    ['ま (ma)', 'み (mi)', 'む (mu)', 'め (me)', 'も (mo)'],
                    ['や (ya)', 'ゆ (yu)', 'よ (yo)'],
                    ['ら (ra)', 'り (ri)', 'る (ru)', 'れ (re)', 'ろ (ro)'],
                    ['わ (wa)', 'を (wo)', 'ん (n)'],
                ],
            },
            {
                heading: 'Dakuten & Handakuten (濁点・半濁点)',
                desc: 'Adding dakuten (゛) or handakuten (゜) to certain hiragana changes the sound. These are critical for JLPT N5 reading comprehension.',
                items: [
                    ['が (ga)', 'ぎ (gi)', 'ぐ (gu)', 'げ (ge)', 'ご (go)'],
                    ['ざ (za)', 'じ (ji)', 'ず (zu)', 'ぜ (ze)', 'ぞ (zo)'],
                    ['だ (da)', 'ぢ (di)', 'づ (du)', 'で (de)', 'ど (do)'],
                    ['ば (ba)', 'び (bi)', 'ぶ (bu)', 'べ (be)', 'ぼ (bo)'],
                    ['ぱ (pa)', 'ぴ (pi)', 'ぷ (pu)', 'ぺ (pe)', 'ぽ (po)'],
                ],
            },
            {
                heading: 'Combination Sounds (拗音 — Yōon)',
                desc: 'Combining certain hiragana with small や, ゆ, or よ creates new sounds. These appear frequently in JLPT N5 vocabulary.',
                items: [
                    ['きゃ (kya)', 'きゅ (kyu)', 'きょ (kyo)'],
                    ['しゃ (sha)', 'しゅ (shu)', 'しょ (sho)'],
                    ['ちゃ (cha)', 'ちゅ (chu)', 'ちょ (cho)'],
                    ['にゃ (nya)', 'にゅ (nyu)', 'にょ (nyo)'],
                    ['ひゃ (hya)', 'ひゅ (hyu)', 'ひょ (hyo)'],
                    ['みゃ (mya)', 'みゅ (myu)', 'みょ (myo)'],
                    ['りゃ (rya)', 'りゅ (ryu)', 'りょ (ryo)'],
                ],
            },
            {
                heading: 'Katakana Basics (カタカナ)',
                desc: 'Katakana is used for foreign loanwords, onomatopoeia, scientific terms, and emphasis. It has the same 46 basic characters as hiragana but with different shapes. JLPT N5 heavily tests katakana reading.',
                items: [
                    ['ア (a)', 'イ (i)', 'ウ (u)', 'エ (e)', 'オ (o)'],
                    ['カ (ka)', 'キ (ki)', 'ク (ku)', 'ケ (ke)', 'コ (ko)'],
                    ['サ (sa)', 'シ (shi)', 'ス (su)', 'セ (se)', 'ソ (so)'],
                    ['タ (ta)', 'チ (chi)', 'ツ (tsu)', 'テ (te)', 'ト (to)'],
                    ['ナ (na)', 'ニ (ni)', 'ヌ (nu)', 'ネ (ne)', 'ノ (no)'],
                    ['ハ (ha)', 'ヒ (hi)', 'フ (fu)', 'ヘ (he)', 'ホ (ho)'],
                    ['マ (ma)', 'ミ (mi)', 'ム (mu)', 'メ (me)', 'モ (mo)'],
                    ['ヤ (ya)', 'ユ (yu)', 'ヨ (yo)'],
                    ['ラ (ra)', 'リ (ri)', 'ル (ru)', 'レ (re)', 'ロ (ro)'],
                    ['ワ (wa)', 'ヲ (wo)', 'ン (n)'],
                ],
            },
            {
                heading: 'Common Katakana Words for JLPT N5',
                desc: 'These loanwords appear frequently on the JLPT N5 exam. Practice reading them quickly.',
                items: [
                    ['テレビ (terebi) — TV', 'コーヒー (kōhī) — Coffee'],
                    ['パン (pan) — Bread', 'ノート (nōto) — Notebook'],
                    ['テスト (tesuto) — Test', 'ペン (pen) — Pen'],
                    ['バス (basu) — Bus', 'タクシー (takushī) — Taxi'],
                    ['レストラン (resutoran) — Restaurant', 'ホテル (hoteru) — Hotel'],
                    ['カメラ (kamera) — Camera', 'コンピューター (konpyūtā) — Computer'],
                    ['スーパー (sūpā) — Supermarket', 'デパート (depāto) — Department store'],
                ],
            },
            {
                heading: 'Study Tips for JLPT N5',
                desc: 'Write each character repeatedly while saying the sound aloud. Use flashcard apps like Anki with spaced repetition. Practice reading signs, menus, and manga. Aim to read both hiragana and katakana fluently before attempting grammar and kanji.',
                items: [],
            },
        ],
    },
    kanji: {
        title: '漢字',
        titleEn: 'Kanji (JLPT N5)',
        icon: '漢',
        sections: [
            {
                heading: 'What is Kanji?',
                desc: 'Kanji (漢字) are logographic characters borrowed from Chinese. Each kanji represents a meaning and has multiple readings: On\'yomi (Chinese reading) and Kun\'yomi (Japanese reading). The JLPT N5 requires knowledge of approximately 80-100 kanji characters.',
                items: [],
            },
            {
                heading: 'Numbers & Counting (数字)',
                desc: 'Essential number kanji — these are the most fundamental kanji for JLPT N5.',
                items: [
                    ['一 (いち / ichi) — One', '二 (に / ni) — Two', '三 (さん / san) — Three'],
                    ['四 (し・よん / shi/yon) — Four', '五 (ご / go) — Five', '六 (ろく / roku) — Six'],
                    ['七 (しち・なな / shichi/nana) — Seven', '八 (はち / hachi) — Eight', '九 (きゅう・く / kyū/ku) — Nine'],
                    ['十 (じゅう / jū) — Ten', '百 (ひゃく / hyaku) — Hundred', '千 (せん / sen) — Thousand'],
                    ['万 (まん / man) — Ten Thousand', '円 (えん / en) — Yen/Circle'],
                ],
            },
            {
                heading: 'Time & Calendar (時間・カレンダー)',
                desc: 'Kanji related to time, days, and dates appear frequently on JLPT N5.',
                items: [
                    ['日 (にち・ひ) — Day/Sun', '月 (がつ・つき) — Month/Moon', '年 (ねん・とし) — Year'],
                    ['時 (じ・とき) — Time/Hour', '分 (ふん・ぶん) — Minute/Part', '半 (はん) — Half'],
                    ['今 (いま・こん) — Now', '先 (さき・せん) — Before/Previous', '来 (らい・く) — Next/Come'],
                    ['週 (しゅう) — Week', '毎 (まい) — Every', '午 (ご) — Noon'],
                    ['火 (か・ひ) — Fire/Tuesday', '水 (すい・みず) — Water/Wednesday', '木 (もく・き) — Tree/Thursday'],
                    ['金 (きん・かね) — Gold/Friday', '土 (ど・つち) — Earth/Saturday'],
                ],
            },
            {
                heading: 'People & Body (人・体)',
                desc: 'Kanji for people, body parts, and human relationships.',
                items: [
                    ['人 (ひと・じん) — Person', '男 (おとこ・だん) — Male', '女 (おんな・じょ) — Female'],
                    ['子 (こ・し) — Child', '母 (はは・ぼ) — Mother', '父 (ちち・ふ) — Father'],
                    ['友 (とも・ゆう) — Friend', '目 (め・もく) — Eye', '耳 (みみ・じ) — Ear'],
                    ['口 (くち・こう) — Mouth', '手 (て・しゅ) — Hand', '足 (あし・そく) — Foot/Leg'],
                ],
            },
            {
                heading: 'Nature & Place (自然・場所)',
                desc: 'Kanji for natural elements and locations — common in JLPT N5 reading passages.',
                items: [
                    ['山 (やま・さん) — Mountain', '川 (かわ・せん) — River', '花 (はな・か) — Flower'],
                    ['天 (てん・あま) — Heaven/Sky', '雨 (あめ・う) — Rain', '電 (でん) — Electricity'],
                    ['国 (くに・こく) — Country', '学 (がく・まな) — Study', '校 (こう) — School'],
                    ['駅 (えき) — Station', '店 (みせ・てん) — Store', '道 (みち・どう) — Road/Way'],
                ],
            },
            {
                heading: 'Actions & Directions (動作・方向)',
                desc: 'Kanji for movement, direction, and size concepts.',
                items: [
                    ['上 (うえ・じょう) — Up/Above', '下 (した・か) — Down/Below', '中 (なか・ちゅう) — Middle/Inside'],
                    ['大 (おお・だい) — Big', '小 (ちい・しょう) — Small', '長 (なが・ちょう) — Long'],
                    ['前 (まえ・ぜん) — Before/Front', '後 (うし・ご) — After/Behind', '外 (そと・がい) — Outside'],
                    ['入 (はい・にゅう) — Enter', '出 (で・しゅつ) — Exit/Leave', '行 (い・こう) — Go'],
                    ['見 (み・けん) — See', '聞 (き・ぶん) — Hear/Ask', '読 (よ・どく) — Read'],
                    ['書 (か・しょ) — Write', '食 (た・しょく) — Eat', '飲 (の・いん) — Drink'],
                ],
            },
            {
                heading: 'Other Essential N5 Kanji',
                desc: 'Additional frequently tested kanji on JLPT N5.',
                items: [
                    ['本 (ほん・もと) — Book/Origin', '何 (なに・なん) — What', '新 (あたら・しん) — New'],
                    ['古 (ふる・こ) — Old', '高 (たか・こう) — High/Expensive', '安 (やす・あん) — Cheap/Safe'],
                    ['白 (しろ・はく) — White', '話 (はなし・わ) — Speak/Story', '語 (ご) — Language'],
                    ['車 (くるま・しゃ) — Car', '会 (あ・かい) — Meet', '社 (しゃ) — Company'],
                ],
            },
        ],
    },
    grammar: {
        title: '文法',
        titleEn: 'Grammar (JLPT N5)',
        icon: '文',
        sections: [
            {
                heading: 'Basic Sentence Structure',
                desc: 'Japanese uses Subject-Object-Verb (SOV) order, unlike English (SVO). Particles mark the grammatical role of each word. JLPT N5 tests approximately 80 grammar points.',
                items: [
                    ['わたしは がくせい です。— I am a student.'],
                    ['これは ほん です。— This is a book.'],
                    ['たなかさんは にほんじん です。— Tanaka is Japanese.'],
                ],
            },
            {
                heading: 'Essential Particles (助詞)',
                desc: 'Particles are postpositional words that mark the grammatical function of the word before them. Mastering particles is critical for JLPT N5.',
                items: [
                    ['は (wa) — Topic marker: "わたしは がくせいです" (I am a student)'],
                    ['が (ga) — Subject marker: "ねこが います" (There is a cat)'],
                    ['を (wo) — Object marker: "パンを たべます" (I eat bread)'],
                    ['に (ni) — Direction/Time/Location: "がっこうに いきます" (I go to school)'],
                    ['で (de) — Location of action/Means: "でんしゃで いきます" (Go by train)'],
                    ['の (no) — Possession/Modifier: "わたしの ほん" (My book)'],
                    ['へ (e) — Direction: "にほんへ いきます" (Go to Japan)'],
                    ['と (to) — And/With: "ともだちと いきます" (Go with a friend)'],
                    ['も (mo) — Also/Too: "わたしも がくせいです" (I am also a student)'],
                    ['から (kara) — From/Because: "くじから はじまります" (Starts from 9)'],
                    ['まで (made) — Until: "ごじまで はたらきます" (Work until 5)'],
                    ['よ (yo) — Emphasis: "おいしいですよ" (It\'s delicious, you know!)'],
                    ['ね (ne) — Confirmation: "いいてんきですね" (Nice weather, isn\'t it?)'],
                    ['か (ka) — Question: "これは なんですか" (What is this?)'],
                ],
            },
            {
                heading: 'Verb Conjugation (動詞の活用)',
                desc: 'JLPT N5 requires understanding of polite (ます) form, negative, past, and て-form conjugations.',
                items: [
                    ['ます form (polite present): たべます — I eat / I will eat'],
                    ['ません (polite negative): たべません — I don\'t eat'],
                    ['ました (polite past): たべました — I ate'],
                    ['ませんでした (polite past neg): たべませんでした — I didn\'t eat'],
                    ['て form (connecting): たべて — eating / and then eat'],
                    ['ている (ongoing action): たべています — I am eating'],
                    ['たい (want to): たべたいです — I want to eat'],
                    ['ないでください (please don\'t): たべないでください — Please don\'t eat'],
                ],
            },
            {
                heading: 'Adjective Patterns (形容詞)',
                desc: 'Japanese has two types of adjectives: い-adjectives and な-adjectives. Both follow different conjugation rules.',
                items: [
                    ['い-adj present: おおきいです — It is big'],
                    ['い-adj negative: おおきくないです — It is not big'],
                    ['い-adj past: おおきかったです — It was big'],
                    ['い-adj past neg: おおきくなかったです — It was not big'],
                    ['な-adj present: しずかです — It is quiet'],
                    ['な-adj negative: しずかではありません — It is not quiet'],
                    ['な-adj past: しずかでした — It was quiet'],
                    ['な-adj + noun: しずかな まち — A quiet town'],
                ],
            },
            {
                heading: 'Key Grammar Patterns (文型)',
                desc: 'Essential sentence patterns tested on JLPT N5.',
                items: [
                    ['[Place]に [Thing]が あります/います — There is [thing] at [place]'],
                    ['[Noun]が すき/きらい です — I like/dislike [noun]'],
                    ['[Noun]が じょうず/へた です — I am good/bad at [noun]'],
                    ['[Verb たい]です — I want to [verb]'],
                    ['[Verb ないで]ください — Please don\'t [verb]'],
                    ['[Verb て]もいいですか — May I [verb]?'],
                    ['[Verb て]はいけません — You must not [verb]'],
                    ['[Verb dictionary]ことができます — I can [verb]'],
                    ['[Noun]は [Noun]より [Adj]です — [A] is more [adj] than [B]'],
                    ['まだ [Verb ていません] — I haven\'t [verb] yet'],
                ],
            },
            {
                heading: 'Question Words (疑問詞)',
                desc: 'Essential question words for JLPT N5 conversations.',
                items: [
                    ['何 (なに/なん) — What', 'いつ — When'],
                    ['どこ — Where', 'だれ/どなた — Who'],
                    ['どう/いかが — How', 'どれ — Which one'],
                    ['どの — Which (+ noun)', 'なぜ/どうして — Why'],
                    ['いくら — How much (price)', 'いくつ — How many / How old'],
                ],
            },
        ],
    },
    vocabulary: {
        title: '語彙',
        titleEn: 'Vocabulary (JLPT N5)',
        icon: '語',
        sections: [
            {
                heading: 'Greetings & Daily Phrases (挨拶)',
                desc: 'Essential Japanese greetings and polite expressions tested on JLPT N5. Approximately 800 vocabulary words are required for the exam.',
                items: [
                    ['おはようございます — Good morning (polite)', 'こんにちは — Hello / Good afternoon'],
                    ['こんばんは — Good evening', 'おやすみなさい — Good night'],
                    ['さようなら — Goodbye', 'じゃあ、また — See you later'],
                    ['ありがとうございます — Thank you (polite)', 'どういたしまして — You\'re welcome'],
                    ['すみません — Excuse me / Sorry', 'ごめんなさい — I\'m sorry'],
                    ['いただきます — Before eating', 'ごちそうさまでした — After eating'],
                    ['おねがいします — Please (requesting)', 'はじめまして — Nice to meet you'],
                    ['よろしくおねがいします — Please take care of me', 'おげんきですか — How are you?'],
                ],
            },
            {
                heading: 'Numbers & Counters (数字・助数詞)',
                desc: 'Japanese uses specific counter words for different objects. JLPT N5 tests common counting systems.',
                items: [
                    ['ひとつ (1 thing)', 'ふたつ (2 things)', 'みっつ (3 things)', 'よっつ (4 things)', 'いつつ (5 things)'],
                    ['むっつ (6 things)', 'ななつ (7 things)', 'やっつ (8 things)', 'ここのつ (9 things)', 'とお (10 things)'],
                    ['〜人 (にん) — people', '〜つ — general objects', '〜枚 (まい) — flat things'],
                    ['〜本 (ほん) — long things', '〜冊 (さつ) — books', '〜台 (だい) — machines'],
                    ['〜匹 (ひき) — small animals', '〜杯 (はい) — cups/glasses', '〜回 (かい) — times'],
                ],
            },
            {
                heading: 'Time Expressions (時間の表現)',
                desc: 'Time-related vocabulary essential for JLPT N5.',
                items: [
                    ['きょう — Today', 'あした — Tomorrow', 'きのう — Yesterday'],
                    ['あさ — Morning', 'ひる — Afternoon', 'よる/ばん — Night/Evening'],
                    ['まいにち — Every day', 'まいあさ — Every morning', 'まいばん — Every night'],
                    ['まいしゅう — Every week', 'まいつき — Every month', 'まいとし — Every year'],
                    ['せんしゅう — Last week', 'こんしゅう — This week', 'らいしゅう — Next week'],
                    ['げつようび — Monday', 'かようび — Tuesday', 'すいようび — Wednesday'],
                    ['もくようび — Thursday', 'きんようび — Friday', 'どようび — Saturday'],
                    ['にちようび — Sunday'],
                ],
            },
            {
                heading: 'Places & Locations (場所)',
                desc: 'Common location vocabulary for JLPT N5.',
                items: [
                    ['がっこう — School', 'びょういん — Hospital', 'えき — Station'],
                    ['ぎんこう — Bank', 'ゆうびんきょく — Post office', 'としょかん — Library'],
                    ['こうえん — Park', 'デパート — Department store', 'スーパー — Supermarket'],
                    ['レストラン — Restaurant', 'ホテル — Hotel', 'くうこう — Airport'],
                    ['うち/いえ — Home/House', 'へや — Room', 'にわ — Garden'],
                    ['かいしゃ — Company', 'みせ — Shop', 'ちかてつ — Subway'],
                ],
            },
            {
                heading: 'Family Terms (家族)',
                desc: 'Japanese has different terms for your own family vs. other people\'s family members.',
                items: [
                    ['ちち / おとうさん — (My / Your) Father', 'はは / おかあさん — (My / Your) Mother'],
                    ['あに / おにいさん — (My / Your) Older brother', 'あね / おねえさん — (My / Your) Older sister'],
                    ['おとうと / おとうとさん — (My / Your) Younger brother', 'いもうと / いもうとさん — (My / Your) Younger sister'],
                    ['かぞく / ごかぞく — (My / Your) Family', 'きょうだい / ごきょうだい — (My / Your) Siblings'],
                ],
            },
            {
                heading: 'Colors, Food & Common Nouns',
                desc: 'Everyday nouns tested on JLPT N5.',
                items: [
                    ['あか — Red', 'あお — Blue', 'しろ — White', 'くろ — Black'],
                    ['みず — Water', 'おちゃ — Tea', 'ごはん — Rice/Meal', 'にく — Meat'],
                    ['さかな — Fish', 'やさい — Vegetables', 'くだもの — Fruit', 'たまご — Egg'],
                    ['でんわ — Telephone', 'じてんしゃ — Bicycle', 'くるま — Car', 'かさ — Umbrella'],
                    ['ほん — Book', 'しんぶん — Newspaper', 'ざっし — Magazine', 'てがみ — Letter'],
                ],
            },
        ],
    },
    verbs: {
        title: '動詞',
        titleEn: 'Verbs (JLPT N5)',
        icon: '動',
        sections: [
            {
                heading: 'Understanding Verb Groups',
                desc: 'Japanese verbs are divided into three groups based on conjugation patterns. Understanding which group a verb belongs to is essential for correct conjugation on JLPT N5.',
                items: [
                    ['Group 1 (五段/U-verbs): Dictionary form ends in う-column kana (く, す, つ, ぬ, ぶ, む, る)'],
                    ['Group 2 (一段/Ru-verbs): Dictionary form ends in -いる or -える'],
                    ['Group 3 (Irregular): Only two verbs — する (to do) and くる (to come)'],
                ],
            },
            {
                heading: 'Group 1 — Godan Verbs (五段動詞)',
                desc: 'The largest group. When conjugating, the final kana changes to a different row.',
                items: [
                    ['いく (行く) — to go', 'かく (書く) — to write', 'きく (聞く) — to hear/ask'],
                    ['はなす (話す) — to speak', 'まつ (待つ) — to wait', 'しぬ (死ぬ) — to die'],
                    ['よむ (読む) — to read', 'のむ (飲む) — to drink', 'あそぶ (遊ぶ) — to play'],
                    ['かう (買う) — to buy', 'あう (会う) — to meet', 'つかう (使う) — to use'],
                    ['ある — to exist (things)', 'わかる (分かる) — to understand', 'つくる (作る) — to make'],
                    ['のる (乗る) — to ride', 'おわる (終わる) — to end', 'はじまる (始まる) — to begin'],
                    ['はいる (入る) — to enter', 'かえる (帰る) — to return home', 'きる (切る) — to cut'],
                    ['しる (知る) — to know', 'とる (撮る) — to take (photo)', 'おくる (送る) — to send'],
                ],
            },
            {
                heading: 'Group 2 — Ichidan Verbs (一段動詞)',
                desc: 'These verbs always end in -る and are simpler to conjugate — just drop the る and add the ending.',
                items: [
                    ['たべる (食べる) — to eat', 'みる (見る) — to see/watch', 'ねる (寝る) — to sleep'],
                    ['おきる (起きる) — to wake up', 'あける (開ける) — to open', 'しめる (閉める) — to close'],
                    ['おしえる (教える) — to teach', 'でかける (出かける) — to go out', 'つける — to turn on'],
                    ['でる (出る) — to leave/exit', 'いれる (入れる) — to put in', 'きる (着る) — to wear'],
                    ['あびる (浴びる) — to shower', 'みせる (見せる) — to show', 'つとめる (勤める) — to work for'],
                ],
            },
            {
                heading: 'Group 3 — Irregular Verbs (不規則動詞)',
                desc: 'Only two verbs are irregular in Japanese. They and their compounds appear very frequently.',
                items: [
                    ['する — to do', 'くる (来る) — to come'],
                    ['べんきょうする (勉強する) — to study', 'りょこうする (旅行する) — to travel'],
                    ['うんどうする (運動する) — to exercise', 'さんぽする (散歩する) — to take a walk'],
                    ['せんたくする (洗濯する) — to do laundry', 'そうじする (掃除する) — to clean'],
                    ['でんわする (電話する) — to call', 'かいものする (買い物する) — to go shopping'],
                ],
            },
            {
                heading: 'Te-form Conjugation (て形)',
                desc: 'The て-form is one of the most important conjugations for JLPT N5. It connects sentences, makes requests, and describes ongoing actions.',
                items: [
                    ['く → いて: かく → かいて (write)', 'ぐ → いで: およぐ → およいで (swim)'],
                    ['す → して: はなす → はなして (speak)', 'つ/る/う → って: まつ → まって (wait)'],
                    ['ぬ/ぶ/む → んで: よむ → よんで (read)', 'る-verb: たべる → たべて (eat)'],
                    ['する → して (do)', 'くる → きて (come)'],
                    ['Exception: いく → いって (go)'],
                ],
            },
            {
                heading: 'Key Verb Expressions for N5',
                desc: 'Common verb patterns and expressions frequently tested on JLPT N5.',
                items: [
                    ['〜てください — Please do ~', '〜てもいいです — It\'s OK to ~'],
                    ['〜てはいけません — You must not ~', '〜ています — Currently doing ~'],
                    ['〜たいです — I want to ~', '〜たことがあります — Have experienced ~'],
                    ['〜ましょう — Let\'s ~ (suggestion)', '〜ませんか — Won\'t you ~ ? (invitation)'],
                    ['〜ことができます — Can do ~', '〜まえに — Before doing ~'],
                    ['〜たあとで — After doing ~', '〜ながら — While doing ~'],
                ],
            },
        ],
    },
    culture: {
        title: '文化',
        titleEn: 'Japanese Culture',
        icon: '化',
        sections: [
            {
                heading: 'Traditional Arts (伝統芸術)',
                desc: 'Understanding Japanese culture enriches your language learning and provides context for many JLPT reading passages.',
                items: [
                    ['茶道 (さどう) — Tea Ceremony: A ritualized preparation and serving of matcha green tea'],
                    ['華道 (かどう) — Ikebana: The art of flower arrangement emphasizing form, line, and balance'],
                    ['書道 (しょどう) — Shodo: Japanese calligraphy using brush and ink on paper'],
                    ['武道 (ぶどう) — Martial Arts: Includes judo (柔道), kendo (剣道), karate (空手)'],
                    ['能 (のう) — Noh: Classical masked musical drama dating back to the 14th century'],
                    ['歌舞伎 (かぶき) — Kabuki: Traditional drama with elaborate costumes and makeup'],
                    ['折り紙 (おりがみ) — Origami: The art of paper folding into decorative shapes'],
                ],
            },
            {
                heading: 'Festivals & Seasons (祭り・季節)',
                desc: 'Japanese culture is deeply connected to the changing seasons. Festivals mark important seasonal and cultural events throughout the year.',
                items: [
                    ['正月 (しょうがつ) — New Year: The most important holiday, celebrated Jan 1-3'],
                    ['節分 (せつぶん) — Setsubun: Bean throwing to ward off evil spirits (Feb 3)'],
                    ['ひな祭り (ひなまつり) — Doll Festival: Girls\' Day celebration (Mar 3)'],
                    ['桜祭り (さくらまつり) — Cherry Blossom Festival: Hanami flower viewing (Mar-Apr)'],
                    ['こどもの日 — Children\'s Day: Carp streamers for children\'s health (May 5)'],
                    ['七夕 (たなばた) — Star Festival: Write wishes on strips of paper (Jul 7)'],
                    ['お盆 (おぼん) — Bon Festival: Honor ancestors\' spirits (Aug 13-16)'],
                    ['七五三 (しちごさん) — 7-5-3 Festival: Celebrate children ages 3, 5, 7 (Nov 15)'],
                    ['大晦日 (おおみそか) — New Year\'s Eve: Temple bells ring 108 times (Dec 31)'],
                ],
            },
            {
                heading: 'Daily Customs & Etiquette (日常の習慣)',
                desc: 'Understanding Japanese customs helps you communicate more naturally and respectfully.',
                items: [
                    ['お辞儀 (おじぎ) — Bowing: The fundamental form of greeting and showing respect'],
                    ['靴を脱ぐ (くつをぬぐ) — Removing shoes before entering homes and some buildings'],
                    ['いただきます / ごちそうさま — Saying grace before and after meals'],
                    ['敬語 (けいご) — Honorific language: Polite speech forms used in formal situations'],
                    ['名刺交換 (めいしこうかん) — Business card exchange: A ritual in Japanese business'],
                    ['箸の使い方 (はしのつかいかた) — Chopstick etiquette: Never stick chopsticks upright in rice'],
                    ['温泉 (おんせん) — Hot springs: Wash body before entering the communal bath'],
                ],
            },
            {
                heading: 'Food Culture (食文化)',
                desc: 'Japanese cuisine (和食 washoku) is UNESCO Intangible Cultural Heritage. Understanding food culture is essential for daily life in Japan.',
                items: [
                    ['寿司 (すし) — Sushi: Vinegared rice with raw fish or toppings'],
                    ['ラーメン — Ramen: Chinese-origin noodle soup with various regional styles'],
                    ['天ぷら (てんぷら) — Tempura: Lightly battered and deep-fried seafood/vegetables'],
                    ['うどん — Udon: Thick wheat noodles served in broth'],
                    ['味噌汁 (みそしる) — Miso soup: Fermented soybean paste soup'],
                    ['弁当 (べんとう) — Bento: Packed lunch boxes with compartmentalized dishes'],
                    ['抹茶 (まっちゃ) — Matcha: Powdered green tea used in ceremony and sweets'],
                ],
            },
            {
                heading: 'Useful Cultural References for JLPT',
                desc: 'JLPT reading passages often reference these cultural concepts. Familiarity gives you an advantage.',
                items: [
                    ['和 (わ) — Harmony: Core Japanese value emphasizing group harmony over individual'],
                    ['空気を読む (くうきをよむ) — "Read the air": Understanding unspoken social cues'],
                    ['もったいない — Wastefulness: A cultural value of not wasting resources'],
                    ['おもてなし — Hospitality: The Japanese spirit of selfless, wholehearted service'],
                    ['改善 (かいぜん) — Kaizen: Continuous improvement philosophy'],
                    ['わびさび — Wabi-sabi: Finding beauty in imperfection and impermanence'],
                ],
            },
        ],
    },
};

const ResourcePage = ({ categoryId, onBack }) => {
    const data = resourceData[categoryId];
    if (!data) return null;

    return (
        <motion.div
            className="resource-page"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            {/* Background gradient */}
            <div className="resource-bg" />

            {/* Header */}
            <div className="resource-header">
                <motion.button
                    className="back-to-hall-btn"
                    onClick={onBack}
                    whileHover={{ x: -5 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    ← Back to Hall
                </motion.button>

                <motion.div
                    className="resource-title-block"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="resource-icon">{data.icon}</span>
                    <div>
                        <h1 className="resource-title-jp">{data.title}</h1>
                        <h2 className="resource-title-en">{data.titleEn}</h2>
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="resource-content">
                {data.sections.map((section, sIdx) => (
                    <motion.div
                        key={sIdx}
                        className="resource-section"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + sIdx * 0.15 }}
                    >
                        <div className="section-accent" />
                        <h3 className="section-heading">
                            <span className="section-icon">📖</span>
                            {section.heading}
                        </h3>
                        <p className="section-desc">{section.desc}</p>

                        {section.items.length > 0 && (
                            <div className="section-items">
                                {section.items.map((row, rIdx) => (
                                    <div key={rIdx} className="item-row">
                                        {row.map((item, iIdx) => (
                                            <motion.div
                                                key={iIdx}
                                                className="item-cell"
                                                whileHover={{ scale: 1.02, backgroundColor: '#E8DFD0' }}
                                            >
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ResourcePage;
