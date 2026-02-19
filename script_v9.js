/**
 * 2026 LIFE ARCHITECT — v9.0.0
 */

// --- Internationalization (i18n) ---

const LANG = {
    tr: {
        // Header & Nav
        predictions: 'Tahminler', goals: 'Hedefler',
        list: 'Liste', bingo: 'Bingo', vision: 'Vizyon',
        // Sort
        sortManual: 'Manuel (Sürükle)', sortCreateDesc: 'Eklenen (Yeni)', sortCreateAsc: 'Eklenen (Eski)',
        sortDateAsc: 'Tarih (Yakın)', sortDateDesc: 'Tarih (Uzak)', sortDiff: 'Zorluk',
        // Empty state
        emptyTitle: 'Henüz bir hayal yok!', emptyText: 'İlk hedefini ekleyerek yolculuğuna başla',
        // Buttons
        fullscreen: 'Tam Ekran', sound: 'Ses', editMode: 'Düzenleme Modu',
        // Welcome
        welcomeTitle: 'Hoşgeldin!',
        welcomeDesc: 'Bu sadece bir Bingo değil.<br><strong>2026 Life Architect</strong>, hayallerini tasarladığın ve takip ettiğin yer.',
        welcomeGoals: 'Hedefler:', welcomeGoalsDesc: 'İlerlemelerini kaydet.',
        welcomePredictions: 'Tahminler:', welcomePredictionsDesc: 'Geleceğe not bırak.',
        welcomeProgress: 'İlerleme:', welcomeProgressDesc: 'Yılın her gününü değerlendir.',
        welcomeBtn: 'Yolculuğa Başla ✨',
        // Daily Mood
        moodTitle: 'Bugün Nasıl Hissediyorsun?', moodDesc: 'Gününe uygun modu seç.',
        moodFire: 'Enerjik', moodZen: 'Dengeli', moodFocus: 'Odaklı', moodHappy: 'İddialı', moodTired: 'Yorgun',
        // Item Modal
        newGoal: 'Yeni Hedef', titleLabel: 'Başlık', titlePlaceholder: 'Örn: Maraton koş...',
        categoryLabel: 'Kategori', dateLabel: 'Hedef Tarihi (Opsiyonel)', yearEnd: 'Yıl Sonu',
        subGoalLabel: 'Alt Hedefler', subGoalPlaceholder: 'Adım...',
        diffEasy: 'Kolay', diffMedium: 'Orta', diffHard: 'Zor', diffImpossible: 'İmkansız',
        imageNotes: 'Görsel / Notlar', file: 'Dosya', notesPlaceholder: 'Notlar...',
        noImage: 'Görsel Yok', imageSelected: '✅ Görsel Seçildi', imageExists: '✅ Görsel Var',
        difficulty: 'Zorluk',
        diffEasyXP: 'Kolay (1 XP)', diffMediumXP: 'Orta (3 XP)', diffHardXP: 'Zor (5 XP)', diffImpossibleXP: 'İmkansız (10 XP)',
        cancel: 'İptal', save: 'Kaydet', delete: 'Sil',
        // Random Ideas
        randomIdea: 'Rastgele Fikir', prediction: 'Tahmin', goal: 'Hedef',
        loading: 'Yükleniyor...', addToPredictions: 'Tahminlere Ekle', addToGoals: 'Hedeflere Ekle',
        // Category
        categories: 'Kategoriler', newCatPlaceholder: 'Yeni Kategori...', add: 'Ekle',
        // Detail
        detail: 'Detay', ok: 'Tamam', edit: 'Düzenle', mainGoal: 'ANA HEDEF',
        subGoals: 'Alt Hedefler',
        // Settings
        settings: 'Ayarlar',
        statistics: 'İstatistikler', statsDesc: 'İlerleme ve zorluk dağılımı',
        badges: 'Rozetler', badgesDesc: 'Kazanılan başarılar',
        share: 'Paylaş', shareDesc: 'Bingo kartını paylaş', print: 'Yazdır',
        shareBingoText: '2026 Bingo Kartıma göz atın! 🎰', uncomplete: 'Tamamlanmadı Yap',
        notifications: 'Bildirimler', notifDesc: 'Hedef hatırlatıcı',
        bingoSize: 'Bingo Boyutu', bingoSizeHint: 'Bingo ekranında alt kısımda değiştirebilirsin.',
        changeTheme: 'Tema Değiştir', fontSize: 'Yazı Boyutu',
        backup: 'Yedekle', restore: 'Geri Yükle', reset: 'Sıfırla',
        langToggle: 'English', close: 'Kapat',
        // Stats
        statsTitle: 'İstatistikler',
        totalGoals: 'Toplam Hedef', completed: 'Tamamlanan', totalXP: 'Toplam XP', dayStreak: 'Gün Streak',
        progress: 'İlerleme', diffBreakdown: 'Zorluk Dağılımı',
        // Badges
        badgesTitle: 'Rozetler',
        // Share
        shareTitle: 'Paylaş', saveImg: 'Kaydet', shareAction: 'Paylaş',
        // Dialogs
        yes: 'Evet', deleteConfirm: 'Sil?', areYouSure: 'Emin misin?',
        resetConfirm: 'Sıfırla', resetMsg: 'Tüm veriler silinecek. Emin misin?',
        importSuccess: 'Başarılı', importSuccessMsg: 'Veriler başarıyla yüklendi.',
        errorTitle: 'Hata', invalidFile: 'Geçersiz dosya formatı.', fileError: 'Dosya okunamadı.',
        notifEnabled: '✅ Bildirimler', notifEnabledMsg: 'Bildirimler etkinleştirildi! Yaklaşan hedefler için hatırlatma alacaksınız.',
        newBadge: '🏆 Yeni Rozet!', checkBadges: 'Rozetlerini kontrol et!',
        streakTitle: '🔥 Streak!', streakMsg: ' gün üst üste! Harika gidiyorsun!',
        levelUpTitle: '🎉 Level Up!', levelUpMsg: 'Artık bir {name}sin! (Lv.{level})',
        minOneCategory: 'En az 1 kategori kalmalı',
        // Grid countdown
        expired: 'SÜRE BİTTİ', today: 'BUGÜN', daysLeft: '{n} GÜN',
        cinko: '{n}. ÇİNKO!', tombola: 'TOMBOLA!!!',
        // Year progress
        yearProgress: '{year}\'nın {day}. günü (%{pct})',
        // Notification
        notifTitle: '🎯 Hedef Hatırlatma', notifBody: '"{text}" için {days} gün kaldı!',
        // Vision board
        visionQuote: '"Göremediğiniz bir hedefi vuramazsınız ve sahip olmadığınız bir hedefi göremezsiniz."',
        visionAuthor: '— Zig Ziglar',
        visionHint: '(Vizyon panosunu doldurmak için hedeflerine görsel ekle)',
        // Levels
        lvl1: 'Çaylak', lvl2: 'Gözlemci', lvl3: 'Mimar', lvl4: 'Usta', lvl5: 'Vizyoner', lvl6: 'Efsane', lvl7: 'Tanrı',
        // Default categories
        catGeneral: 'Genel', catCareer: 'Kariyer', catHealth: 'Sağlık', catTravel: 'Seyahat', catHobby: 'Hobi',
        // Badges
        b_first_goal: 'İlk Adım', bd_first_goal: 'İlk hedefini ekle',
        b_five_goals: 'Beşli', bd_five_goals: '5 hedef ekle',
        b_ten_goals: 'Onluk', bd_ten_goals: '10 hedef ekle',
        b_first_complete: 'Başarı', bd_first_complete: 'İlk hedefini tamamla',
        b_five_complete: 'Yıldız', bd_five_complete: '5 hedef tamamla',
        b_tombola: 'Tombala', bd_tombola: '25 hedef tamamla',
        b_halfway: 'Yarım Yol', bd_halfway: '%50 tamamla (min 10)',
        b_hard_complete: 'Zorluk', bd_hard_complete: 'Zor hedef tamamla',
        b_streak_3: 'Ateş', bd_streak_3: '3 gün streak',
        b_streak_7: 'Haftalık', bd_streak_7: '7 gün streak',
        b_streak_14: 'Azimli', bd_streak_14: '14 gün streak',
        b_streak_30: 'Şampiyon', bd_streak_30: '30 gün streak',
        b_xp_50: '50 XP', bd_xp_50: '50 XP kazan',
        b_xp_100: '100 XP', bd_xp_100: '100 XP kazan',
        b_xp_500: '500 XP', bd_xp_500: '500 XP kazan',
        b_legend: 'Efsane', bd_legend: 'Son seviyeye ulaş',
        b_cat_health: 'Sağlıkçı', bd_cat_health: '3 Sağlık hedefi',
        b_cat_career: 'Kariyer', bd_cat_career: '3 Kariyer hedefi',
        b_cat_finance: 'Finans', bd_cat_finance: '3 Finans hedefi',
        b_cat_art: 'Sanatçı', bd_cat_art: '3 Sanat hedefi',
        b_cat_travel: 'Gezgin', bd_cat_travel: '3 Gezi hedefi',
        b_cat_social: 'Sosyal', bd_cat_social: '3 Sosyal hedefi',
        b_photographer: 'Fotoğrafçı', bd_photographer: '5 görselli hedef',
        b_impossible: 'Tanrı Modu', bd_impossible: 'İmkansız görev tamamla',
        b_twenty_goals: 'Koleksiyoner', bd_twenty_goals: '20 hedef ekle',
        b_sub_master: 'Böl ve Fethet', bd_sub_master: '10 alt-hedefli görev',
        b_prediction_5: 'Kâhin', bd_prediction_5: '5 tahmin ekle',
        b_all_cats: 'Renkli Yaşam', bd_all_cats: 'Her kategoride hedef',
        b_speed_10: 'Hız Kozu', bd_speed_10: '30 günde 10 hedef tamamla',
        b_vision_user: 'Hayal Gücü', bd_vision_user: '3 görselli hedef ekle',
        b_perfect_week: 'Mükemmel Hafta', bd_perfect_week: '7 gün üst üste hedef tamamla',
        // Random Predictions
        rp: [
            "Bu sene hayatımın aşkını bulacağım", "İşten terfi alacağım", "Yeni bir araba alacağım",
            "Evlenme teklifi alacağım/edeceğim", "Yurtdışına çıkacağım", "Büyük bir sürpriz yaşayacağım",
            "Yeni iş teklifi alacağım", "Şanslı bir yıl geçireceğim", "Bir ödül kazanacağım",
            "Sosyal medyada viral olacağım", "Eski bir arkadaşımla barışacağım",
            "Hayallerimi gerçekleştirmeye başlayacağım", "Beklenmedik bir miras alacağım",
            "Bir rekora imza atacağım", "Aile büyüyecek (bebek/evlilik)", "Taşınacağım (yeni ev/şehir)"
        ],
        // Random Goals
        rg: [
            "KPSS'den 80+ puan almak", "Üniversite kazanmak", "10 kilo vermek", "100 kitap okumak",
            "Maraton koşmak", "10.000 TL biriktirmek", "Yeni bir dil öğrenmek (B1 seviye)",
            "Her gün 30 dakika egzersiz", "Sigara/alkol bırakmak", "Yeni bir hobi edinmek",
            "Kendi işimi kurmak", "1000 takipçiye ulaşmak", "Ehliyet almak", "Yüzme öğrenmek",
            "Günde 8 saat uyku", "Meditasyona başlamak", "50 film izlemek", "5 farklı şehir gezmek",
            "Gönüllü işe katılmak", "Fotoğrafçılık öğrenmek", "Bir enstrüman çalmak", "Minimalist yaşama geçmek"
        ]
    },
    en: {
        predictions: 'Predictions', goals: 'Goals',
        list: 'List', bingo: 'Bingo', vision: 'Vision',
        sortManual: 'Manual (Drag)', sortCreateDesc: 'Added (Newest)', sortCreateAsc: 'Added (Oldest)',
        sortDateAsc: 'Date (Nearest)', sortDateDesc: 'Date (Farthest)', sortDiff: 'Difficulty',
        emptyTitle: 'No dreams yet!', emptyText: 'Start your journey by adding your first goal',
        fullscreen: 'Fullscreen', sound: 'Sound', editMode: 'Edit Mode',
        welcomeTitle: 'Welcome!',
        welcomeDesc: 'This isn\'t just a Bingo.<br><strong>2026 Life Architect</strong> is where you design and track your dreams.',
        welcomeGoals: 'Goals:', welcomeGoalsDesc: 'Track your progress.',
        welcomePredictions: 'Predictions:', welcomePredictionsDesc: 'Leave notes for the future.',
        welcomeProgress: 'Progress:', welcomeProgressDesc: 'Make every day of the year count.',
        welcomeBtn: 'Start the Journey ✨',
        moodTitle: 'How Are You Feeling Today?', moodDesc: 'Pick a mood for your day.',
        moodFire: 'Energetic', moodZen: 'Balanced', moodFocus: 'Focused', moodHappy: 'Ambitious', moodTired: 'Tired',
        newGoal: 'New Goal', titleLabel: 'Title', titlePlaceholder: 'E.g.: Run a marathon...',
        categoryLabel: 'Category', dateLabel: 'Target Date (Optional)', yearEnd: 'Year End',
        subGoalLabel: 'Sub-Goals', subGoalPlaceholder: 'Step...',
        diffEasy: 'Easy', diffMedium: 'Medium', diffHard: 'Hard', diffImpossible: 'Impossible',
        imageNotes: 'Image / Notes', file: 'File', notesPlaceholder: 'Notes...',
        noImage: 'No Image', imageSelected: '✅ Image Selected', imageExists: '✅ Image Exists',
        difficulty: 'Difficulty',
        diffEasyXP: 'Easy (1 XP)', diffMediumXP: 'Medium (3 XP)', diffHardXP: 'Hard (5 XP)', diffImpossibleXP: 'Impossible (10 XP)',
        cancel: 'Cancel', save: 'Save', delete: 'Delete',
        randomIdea: 'Random Idea', prediction: 'Prediction', goal: 'Goal',
        loading: 'Loading...', addToPredictions: 'Add to Predictions', addToGoals: 'Add to Goals',
        categories: 'Categories', newCatPlaceholder: 'New Category...', add: 'Add',
        detail: 'Detail', ok: 'OK', edit: 'Edit', mainGoal: 'MAIN GOAL',
        subGoals: 'Sub Goals',
        settings: 'Settings',
        statistics: 'Statistics', statsDesc: 'Progress and difficulty distribution',
        badges: 'Badges', badgesDesc: 'Earned achievements',
        share: 'Share', shareDesc: 'Share your bingo card', print: 'Print',
        shareBingoText: 'Check out my 2026 Bingo Card! 🎰', uncomplete: 'Mark Incomplete',
        notifications: 'Notifications', notifDesc: 'Goal reminder',
        bingoSize: 'Bingo Size', bingoSizeHint: 'You can change it at the bottom of the Bingo view.',
        changeTheme: 'Change Theme', fontSize: 'Font Size',
        backup: 'Backup', restore: 'Restore', reset: 'Reset',
        langToggle: 'Türkçe', close: 'Close',
        statsTitle: 'Statistics',
        totalGoals: 'Total Goals', completed: 'Completed', totalXP: 'Total XP', dayStreak: 'Day Streak',
        progress: 'Progress', diffBreakdown: 'Difficulty Breakdown',
        badgesTitle: 'Badges',
        shareTitle: 'Share', saveImg: 'Save', shareAction: 'Share',
        yes: 'Yes', deleteConfirm: 'Delete?', areYouSure: 'Are you sure?',
        resetConfirm: 'Reset', resetMsg: 'All data will be deleted. Are you sure?',
        importSuccess: 'Success', importSuccessMsg: 'Data loaded successfully.',
        errorTitle: 'Error', invalidFile: 'Invalid file format.', fileError: 'File could not be read.',
        notifEnabled: '✅ Notifications', notifEnabledMsg: 'Notifications enabled! You will receive reminders for upcoming goals.',
        newBadge: '🏆 New Badge!', checkBadges: 'Check your badges!',
        streakTitle: '🔥 Streak!', streakMsg: ' days in a row! You\'re doing great!',
        levelUpTitle: '🎉 Level Up!', levelUpMsg: 'You are now a {name}! (Lv.{level})',
        minOneCategory: 'At least 1 category must remain',
        expired: 'EXPIRED', today: 'TODAY', daysLeft: '{n} DAYS',
        cinko: '{n}. BINGO!', tombola: 'FULL HOUSE!!!',
        yearProgress: 'Day {day} of {year} ({pct}%)',
        notifTitle: '🎯 Goal Reminder', notifBody: '{days} days left for "{text}"!',
        visionQuote: '"You can\'t hit a target you can\'t see, and you can\'t see a target you don\'t have."',
        visionAuthor: '— Zig Ziglar',
        visionHint: '(Add images to your goals to fill the vision board)',
        lvl1: 'Rookie', lvl2: 'Observer', lvl3: 'Architect', lvl4: 'Master', lvl5: 'Visionary', lvl6: 'Legend', lvl7: 'God',
        catGeneral: 'General', catCareer: 'Career', catHealth: 'Health', catTravel: 'Travel', catHobby: 'Hobby',
        b_first_goal: 'First Step', bd_first_goal: 'Add your first goal',
        b_five_goals: 'Fab Five', bd_five_goals: 'Add 5 goals',
        b_ten_goals: 'Top Ten', bd_ten_goals: 'Add 10 goals',
        b_first_complete: 'Achievement', bd_first_complete: 'Complete your first goal',
        b_five_complete: 'Star', bd_five_complete: 'Complete 5 goals',
        b_tombola: 'Full House', bd_tombola: 'Complete 25 goals',
        b_halfway: 'Halfway', bd_halfway: '50% done (min 10)',
        b_hard_complete: 'Tough', bd_hard_complete: 'Complete a hard goal',
        b_streak_3: 'Fire', bd_streak_3: '3-day streak',
        b_streak_7: 'Weekly', bd_streak_7: '7-day streak',
        b_streak_14: 'Persistent', bd_streak_14: '14-day streak',
        b_streak_30: 'Champion', bd_streak_30: '30-day streak',
        b_xp_50: '50 XP', bd_xp_50: 'Earn 50 XP',
        b_xp_100: '100 XP', bd_xp_100: 'Earn 100 XP',
        b_xp_500: '500 XP', bd_xp_500: 'Earn 500 XP',
        b_legend: 'Legend', bd_legend: 'Reach max level',
        b_cat_health: 'Health Nut', bd_cat_health: '3 Health goals',
        b_cat_career: 'Careerist', bd_cat_career: '3 Career goals',
        b_cat_finance: 'Finance', bd_cat_finance: '3 Finance goals',
        b_cat_art: 'Artist', bd_cat_art: '3 Art goals',
        b_cat_travel: 'Traveler', bd_cat_travel: '3 Travel goals',
        b_cat_social: 'Social', bd_cat_social: '3 Social goals',
        b_photographer: 'Photographer', bd_photographer: '5 goals with images',
        b_impossible: 'God Mode', bd_impossible: 'Complete an impossible task',
        b_twenty_goals: 'Collector', bd_twenty_goals: 'Add 20 goals',
        b_sub_master: 'Divide & Conquer', bd_sub_master: '10 goals with sub-goals',
        b_prediction_5: 'Oracle', bd_prediction_5: 'Add 5 predictions',
        b_all_cats: 'Colorful Life', bd_all_cats: 'Goals in every category',
        b_speed_10: 'Speed Runner', bd_speed_10: 'Complete 10 goals in 30 days',
        b_vision_user: 'Dreamer', bd_vision_user: 'Add 3 goals with images',
        b_perfect_week: 'Perfect Week', bd_perfect_week: 'Complete goals 7 days in a row',
        rp: [
            "I will find the love of my life this year", "I will get a promotion at work",
            "I will buy a new car", "I will propose / get proposed to",
            "I will travel abroad", "I will experience a big surprise",
            "I will get a new job offer", "I will have a lucky year",
            "I will win an award", "I will go viral on social media",
            "I will reconnect with an old friend", "I will start making my dreams come true",
            "I will receive unexpected wealth", "I will break a record",
            "Family will grow (baby/marriage)", "I will move (new home/city)"
        ],
        rg: [
            "Score 80+ on a major exam", "Get into university", "Lose 10 kg", "Read 100 books",
            "Run a marathon", "Save $10,000", "Learn a new language (B1 level)",
            "Exercise 30 minutes every day", "Quit smoking/alcohol", "Pick up a new hobby",
            "Start my own business", "Reach 1,000 followers", "Get a driver's license",
            "Learn to swim", "Sleep 8 hours a day", "Start meditating",
            "Watch 50 movies", "Visit 5 different cities", "Volunteer for a cause",
            "Learn photography", "Play an instrument", "Adopt a minimalist lifestyle"
        ]
    }
};

function t(key) {
    const lang = (appData && appData.config && appData.config.lang) || 'en';
    return LANG[lang][key] || LANG['en'][key] || key;
}

function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = val;
        } else if (el.tagName === 'OPTION') {
            el.textContent = val;
        } else {
            el.innerHTML = val;
        }
    });
    // Update document lang attribute
    const lang = (appData && appData.config && appData.config.lang) || 'en';
    document.documentElement.lang = lang === 'en' ? 'en' : 'tr';
}

function toggleLanguage() {
    const current = appData.config.lang || 'en';
    appData.config.lang = current === 'en' ? 'tr' : 'en';
    save();
    applyLanguage();
    render();
    updateStatsDisplay();
    updateYearProgress();
}

// --- Performance Utilities ---


function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


function throttle(func, wait = 100) {
    let lastTime = 0;
    return function executedFunction(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            func(...args);
        }
    };
}

let rafPending = false;
function scheduleRender() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
        rafPending = false;
        render();
    });
}

// Optimized save with debounce
const debouncedSave = debounce(() => {
    localStorage.setItem(STORAGE_KEY, obfuscateData(appData));
}, 300);

// --- Security & Validation ---


function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    const escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    return str.replace(/[&<>"'`=\/]/g, char => escapeMap[char]);
}

// --- Constants & Configuration ---

const STORAGE_KEY = 'bingo_2026_v9';
const CHECKSUM_SALT = 'L1F3_4RCH1T3CT_SECURE';


function obfuscateData(data) {
    const json = JSON.stringify(data);
    const checksum = generateChecksum(json);
    const payload = { d: btoa(unescape(encodeURIComponent(json))), c: checksum };
    return btoa(JSON.stringify(payload));
}


function deobfuscateData(encoded) {
    try {
        const payload = JSON.parse(atob(encoded));
        const json = decodeURIComponent(escape(atob(payload.d)));
        const data = JSON.parse(json);

        // integrity check
        const expectedChecksum = generateChecksum(json);
        if (payload.c !== expectedChecksum) {
            console.warn('Security Warning: Data integrity check failed.');
            return null;
        }
        return data;
    } catch (e) {
        console.error('Data Corruption:', e);
        return null;
    }
}


function generateChecksum(str) {
    let hash = 0;
    const combined = str + CHECKSUM_SALT;
    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(36);
}


function validateStats(stats) {
    const MAX_XP = 50000;
    const MAX_LEVEL = 7;
    const MAX_STREAK = 366;

    if (!stats || typeof stats !== 'object') {
        return { streak: 0, lastLoginDate: null, totalXP: 0, level: 1, badges: [] };
    }

    return {
        streak: Math.min(Math.max(0, stats.streak || 0), MAX_STREAK),
        lastLoginDate: stats.lastLoginDate || null,
        totalXP: Math.min(Math.max(0, stats.totalXP || 0), MAX_XP),
        level: Math.min(Math.max(1, stats.level || 1), MAX_LEVEL),
        badges: Array.isArray(stats.badges) ? stats.badges.slice(0, 50) : []
    };
}

// --- Application State ---
let appData = {
    items: [],
    categories: [
        { id: 1, name: 'General', color: '#747d8c' },
        { id: 2, name: 'Career', color: '#0984e3' },
        { id: 3, name: 'Health', color: '#00b894' },
        { id: 4, name: 'Travel', color: '#e17055' },
        { id: 5, name: 'Hobby', color: '#6c5ce7' }
    ],
    config: {
        theme: 'light',
        view: 'list',
        gridSize: 5,
        fontSize: 'normal',
        mode: 'predictions',
        sort: 'manual',
        soundEnabled: true,
        lang: 'en'
    },
    stats: {
        streak: 0,
        lastLoginDate: null,
        totalXP: 0,
        level: 1,
        badges: []
    }
};

// Global State Variables
let editingId = null;
let viewingId = null;
let activeImageBuffer = null;
let tempSubGoals = [];
let dragSourceElement = null;
let bingoEditMode = false;

// --- Game Constants ---

const XP_POINTS = { 'Easy': 1, 'Medium': 3, 'Hard': 5, 'Impossible': 10 };

// Auto-generation templates
function getRandomPredictions() { return t('rp'); }

function getRandomGoals() { return t('rg'); }

// Level Progression System
function getLevels() {
    return [
        { level: 1, name: t('lvl1'), minXP: 0 },
        { level: 2, name: t('lvl2'), minXP: 20 },
        { level: 3, name: t('lvl3'), minXP: 50 },
        { level: 4, name: t('lvl4'), minXP: 100 },
        { level: 5, name: t('lvl5'), minXP: 200 },
        { level: 6, name: t('lvl6'), minXP: 500 },
        { level: 7, name: t('lvl7'), minXP: 1000 }
    ];
}



// --- PWA & UI Effects ---


function hideSplashScreen() {
    const splash = document.getElementById('splashScreen');
    if (splash) {
        splash.classList.add('hidden');
        setTimeout(() => splash.remove(), 500);
    }
}


function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => { /* SW registered */ })
            .catch(err => { console.warn('SW Registration Failed', err); });
    }
}


function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => { });
        hapticFeedback('light');
    } else {
        document.exitFullscreen();
    }
}


function hapticFeedback(type = 'light') {
    if ('vibrate' in navigator) {
        switch (type) {
            case 'light': navigator.vibrate(10); break;
            case 'medium': navigator.vibrate(30); break;
            case 'heavy': navigator.vibrate([50, 30, 50]); break;
            case 'success': navigator.vibrate([30, 50, 100]); break;
        }
    }
}

let _audioCtx = null;
function getAudioCtx() {
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return _audioCtx;
}

function playSound(type) {
    if (!appData.config.soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        switch (type) {
            case 'complete':
                osc.frequency.value = 800;
                osc.type = 'sine';
                gain.gain.value = 0.1;
                osc.start();
                osc.stop(ctx.currentTime + 0.1);
                break;
            case 'cinko':
                osc.frequency.value = 600;
                osc.type = 'triangle';
                gain.gain.value = 0.15;
                osc.start();
                setTimeout(() => osc.frequency.value = 800, 100);
                setTimeout(() => osc.frequency.value = 1000, 200);
                osc.stop(ctx.currentTime + 0.3);
                break;
            case 'levelUp':
                osc.frequency.value = 400;
                osc.type = 'square';
                gain.gain.value = 0.1;
                osc.start();
                setTimeout(() => osc.frequency.value = 600, 100);
                setTimeout(() => osc.frequency.value = 800, 200);
                setTimeout(() => osc.frequency.value = 1200, 300);
                osc.stop(ctx.currentTime + 0.5);
                break;
        }
    } catch (e) { /* silent */ }
}


function updateStreak() {
    const today = new Date().toDateString();
    const lastLogin = appData.stats.lastLoginDate;

    if (!lastLogin) {
        appData.stats.streak = 1;
    } else if (lastLogin === today) {
        // Same day, no change
    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastLogin === yesterday.toDateString()) {
            appData.stats.streak++;
            if (appData.stats.streak % 7 === 0) {
                showDialog(t('streakTitle'), `${appData.stats.streak}${t('streakMsg')}`, () => { }, true);
                hapticFeedback('success');
            }
        } else {
            appData.stats.streak = 1; // Reset streak
        }
    }
    appData.stats.lastLoginDate = today;
    save();
}


// Confetti optimization — throttle to prevent lag
let _lastConfetti = 0;
function safeConfetti(opts) {
    const now = Date.now();
    if (now - _lastConfetti < 800) return; // skip if fired within 800ms
    _lastConfetti = now;
    // Reduce particles on mobile
    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? 0.5 : 1;
    try {
        confetti({
            ...opts,
            particleCount: Math.round((opts.particleCount || 30) * scale),
            disableForReducedMotion: true
        });
    } catch (e) { /* silent */ }
}

function checkLevelUp(oldXP, newXP) {
    const oldLevel = getLevels().filter(l => oldXP >= l.minXP).pop();
    const newLevel = getLevels().filter(l => newXP >= l.minXP).pop();

    if (newLevel && oldLevel && newLevel.level > oldLevel.level) {
        playSound('levelUp');
        hapticFeedback('success');
        safeConfetti({ particleCount: 100, spread: 100, origin: { y: 0.5 } });
        showDialog(t('levelUpTitle'), t('levelUpMsg').replace('{name}', newLevel.name).replace('{level}', newLevel.level), () => { }, true);
        appData.stats.level = newLevel.level;
    }
}

function getCurrentLevel() {
    return getLevels().filter(l => appData.stats.totalXP >= l.minXP).pop() || getLevels()[0];
}


/* ================================================================= */
/*  App Initialization                                               */
/* ================================================================= */

/**
 * Initializes the application.
 */
function init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    let loaded = null;

    if (stored) {
        // Try to deobfuscate (new secure format)
        loaded = deobfuscateData(stored);

        // Fallback: try legacy plaintext JSON
        if (!loaded) {
            try {
                loaded = JSON.parse(stored);
            } catch (e) {
                loaded = null;
            }
        }
    }

    if (loaded) {
        appData = loaded;
        if (!appData.categories) appData.categories = [{ id: 1, name: 'General', color: '#747d8c' }];
        // V7 Stats Migration + Validation
        appData.stats = validateStats(appData.stats);
        if (appData.config.soundEnabled === undefined) appData.config.soundEnabled = true;
        appData.items.forEach((item, index) => {
            if (!item.catId) item.catId = 1;
            if (item.order === undefined) item.order = index;
            // Track completion timestamp
            if (item.completed && !item.completedAt) item.completedAt = Date.now();
        });

        // Re-save in secure format if it was legacy
        save();
    } else {
        // Migration V4 -> V5
        const v4 = localStorage.getItem('bingo_2026_v4');
        if (v4) {
            try {
                const legacyData = JSON.parse(v4);
                appData = { ...appData, ...legacyData };
                appData.categories = [{ id: 1, name: 'General', color: '#747d8c' }, { id: 2, name: 'Career', color: '#0984e3' }, { id: 3, name: 'Health', color: '#00b894' }];
                appData.items.forEach((item, i) => { item.catId = 1; item.order = i; item.date = ""; });
                appData.stats = validateStats(appData.stats);
                save(); // Save in new secure format
            } catch (e) { /* Migration failed, use defaults */ }
        }
    }
    if (!appData.config.sort) appData.config.sort = 'manual';
    if (!appData.config.lang) appData.config.lang = 'en';

    // Apply Settings
    document.getElementById('sortSelect').value = appData.config.sort;
    applyTheme(appData.config.theme);
    applyFontSize(appData.config.fontSize);
    updateGridSize(appData.config.gridSize, false);
    switchMode(appData.config.mode, false);
    applyLanguage();

    // Feature Init
    updateYearProgress();
    restoreDailyMood();
    checkFirstTimeUser();

    // Register PWA Service Worker
    registerServiceWorker();

    // specific check for daily login streak
    updateStreak();

    // Adaptive Splash Screen
    // Hides splash screen only after fonts and critical resources are ready
    const SPLASH_MIN_DURATION = 800;
    const startTime = performance.now();

    const finishLoading = () => {
        const elapsed = performance.now() - startTime;
        const remainingTime = Math.max(0, SPLASH_MIN_DURATION - elapsed);

        setTimeout(() => {
            hideSplashScreen();
            render();
            updateStatsDisplay();
        }, remainingTime);
    };

    // Firefox fix - use timeout fallback in case fonts.ready hangs
    const loadTimeout = new Promise(resolve => setTimeout(resolve, 1500));

    if (document.fonts && document.fonts.ready) {
        // Race between fonts.ready and timeout - whichever finishes first
        Promise.race([document.fonts.ready, loadTimeout])
            .then(finishLoading)
            .catch(finishLoading);
    } else {
        finishLoading();
    }
}

// --- Core Render Logic ---

function getSortedItems() {
    let items = appData.items.filter(i => (i.type || 'predictions') === appData.config.mode);
    if (appData.config.sort === 'manual') {
        items.sort((a, b) => (a.order || 0) - (b.order || 0));
    } else if (appData.config.sort === 'date-asc') {
        items.sort((a, b) => (a.date ? new Date(a.date) : new Date('2099')) - (b.date ? new Date(b.date) : new Date('2099')));
    } else if (appData.config.sort === 'date-desc') {
        items.sort((a, b) => (b.date ? new Date(b.date) : new Date(0)) - (a.date ? new Date(a.date) : new Date(0)));
    } else if (appData.config.sort === 'create-asc') {
        items.sort((a, b) => a.id - b.id);
    } else if (appData.config.sort === 'create-desc') {
        items.sort((a, b) => b.id - a.id);
    } else if (appData.config.sort === 'diff') {
        items.sort((a, b) => XP_POINTS[b.difficulty] - XP_POINTS[a.difficulty]);
    }
    return items;
}
function render() {
    const container = document.getElementById('mainContainer');
    container.innerHTML = '';

    let items = getSortedItems();

    // Empty State
    const emptyState = document.getElementById('emptyState');
    if (emptyState) {
        emptyState.style.display = items.length === 0 ? 'block' : 'none';
    }

    // Stats
    let totalXP = 0, completedCount = 0;
    items.forEach(i => {
        if (i.completed) { totalXP += XP_POINTS[i.difficulty]; completedCount++; }
        else if (i.subItems) i.subItems.forEach(s => { if (s.completed) totalXP += 1; });
    });
    document.getElementById('progressText').innerText = `${completedCount}/${items.length}`;
    let rank = totalXP > 500 ? t('lvl6') : totalXP > 200 ? t('lvl5') : totalXP > 80 ? t('lvl3') : totalXP > 20 ? t('lvl2') : t('lvl1');
    document.getElementById('userRank').innerText = `${rank} (${totalXP}XP)`;

    if (appData.config.view === 'list') {
        container.className = 'container list-view';
        container.style.gridTemplateColumns = 'none';

        items.forEach(item => {
            const cat = appData.categories.find(c => c.id == item.catId) || appData.categories[0];
            const div = document.createElement('div');
            div.className = `card ${item.completed ? 'completed' : ''}`;
            div.draggable = (appData.config.sort === 'manual');
            div.dataset.id = item.id;

            if (div.draggable) {
                div.addEventListener('dragstart', handleDragStart);
                div.addEventListener('dragover', handleDragOver);
                div.addEventListener('drop', handleDrop);
                div.addEventListener('dragend', handleDragEnd);

                // MOBILE TOUCH EVENTS
                div.addEventListener('touchstart', handleTouchStart, { passive: false });
                div.addEventListener('touchmove', handleTouchMove, { passive: false });
                div.addEventListener('touchend', handleTouchEnd);
            }

            // Progress
            let progressHtml = '';
            let doneCount = 0;
            if (item.subItems && item.subItems.length > 0) {
                doneCount = item.subItems.filter(s => s.completed).length;
                const pct = (doneCount / item.subItems.length) * 100;
                progressHtml = `<div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`;
            }

            // Optional Date
            const dateHtml = item.date ? `<div class="date-badge"><i class="ph-duotone ph-calendar-blank"></i> ${item.date}</div>` : '';

            div.onclick = (e) => {
                // Prevent expansion if clicking directly on specific controls
                if (!e.target.closest('.checkbox') && !e.target.closest('.drag-handle') && !e.target.closest('.edit-btn') && !e.target.closest('.checklist-item')) {
                    // Toggle Expand
                    toggleItemDetails(item.id);
                }
            };

            div.innerHTML = `
              <div class="card-main">
                ${appData.config.sort === 'manual' ? '<div class="drag-handle">≡</div>' : ''}
                <div class="card-left">
                    <div class="card-header">
                        <div class="checkbox" onclick="handleCheck(${item.id}, event)"></div>
                        <div style="flex:1;">
                            <div style="font-weight:600; line-height:1.4;">${escapeHtml(item.text)}</div>
                            <div style="margin-top:2px; display:flex; gap:5px; align-items:center; flex-wrap:wrap;">
                                <span class="pill" style="background:${cat.color}">${escapeHtml(cat.name)}</span>
                                <span class="diff-badge">${item.difficulty}</span>
                                ${dateHtml}
                                ${(item.subItems && item.subItems.length > 0) ? `<span style="font-size:0.75rem; color:var(--text-muted);">(${doneCount}/${item.subItems.length})</span>` : ''}
                            </div>
                        </div>
                        <button class="edit-btn" onclick="event.stopPropagation(); openEdit(${item.id})" title="Düzenle"><i class="ph-duotone ph-pencil-simple"></i></button>
                    </div>
                    ${progressHtml}
                </div>
              </div>
              
              <!-- Accordion Body -->
              <div class="card-body" id="body-${item.id}">
                ${renderSubItemsHtml(item)}
              </div>
            `;
            container.appendChild(div);
        });
    } else {
        // BINGO FRAME
        container.className = 'container';
        container.style.gridTemplateColumns = '';

        // Don't render bingo frame if there are no items
        if (items.length === 0) {
            // empty — container will show empty state below
        } else {

            const size = parseInt(appData.config.gridSize);

            // Build frame wrapper
            const frame = document.createElement('div');
            frame.className = 'bingo-frame';

            // Header letters based on grid size
            const headerTexts = { 3: ['2', '0', '26'], 4: ['B', 'I', 'N', 'G'], 5: ['B', 'I', 'N', 'G', 'O'] };
            const letters = headerTexts[size] || headerTexts[5];
            const header = document.createElement('div');
            header.className = 'bingo-header';
            letters.forEach(l => {
                const span = document.createElement('span');
                span.className = 'bingo-header-letter';
                span.textContent = l;
                header.appendChild(span);
            });
            frame.appendChild(header);

            // Grid inside frame
            const grid = document.createElement('div');
            grid.className = 'grid-view';
            grid.id = 'bingoGrid';
            grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

            // Calculate Bingo Status (rows + columns + diagonals)
            const bingoStatus = checkBingoStatus(items, size);
            const centerIndex = (size === 5) ? 12 : -1;

            items.forEach((item, index) => {
                const cat = appData.categories.find(c => c.id == item.catId) || appData.categories[0];
                const div = document.createElement('div');

                // Check if this cell is part of any completed line
                const isLineComplete = bingoStatus.completedCells.has(index);

                // Center star (free space) for 5×5
                const isFreeSpace = (index === centerIndex);

                div.className = `grid-card ${item.completed || isFreeSpace ? 'completed' : ''} ${isLineComplete ? 'line-complete-bg' : ''} ${bingoEditMode ? 'wiggle' : ''} ${isFreeSpace ? 'free-space' : ''}`;
                div.dataset.id = item.id;
                div.dataset.index = index;

                // Drag & Drop handlers for Edit Mode
                if (bingoEditMode && !isFreeSpace) {
                    div.draggable = true;
                    div.addEventListener('dragstart', handleGridDragStart);
                    div.addEventListener('dragover', handleGridDragOver);
                    div.addEventListener('drop', handleGridDrop);
                    div.addEventListener('dragend', handleGridDragEnd);

                    div.addEventListener('touchstart', handleGridTouchStart, { passive: false });
                    div.addEventListener('touchmove', handleGridTouchMove, { passive: false });
                    div.addEventListener('touchend', handleGridTouchEnd);
                }

                // Click handling
                if (!isFreeSpace) {
                    div.onclick = (e) => {
                        if (bingoEditMode) return;
                        if (item.completed) {
                            // Completed items → show detail/edit modal
                            openEdit(item.id);
                        } else if (appData.config.mode === 'goals' || (item.subItems && item.subItems.length > 0)) {
                            openDetailModal(item.id);
                        } else {
                            toggleComplete(item.id);
                        }
                    };
                    div.oncontextmenu = (e) => { e.preventDefault(); openEdit(item.id); };
                }

                // Free space gets a star
                if (isFreeSpace) {
                    div.innerHTML = '<div class="free-star">⭐</div>';
                    // Auto-complete the free space
                    if (!item.completed) { item.completed = true; item.completedAt = Date.now(); }
                } else {
                    // Countdown Overlay
                    if (item.date && !item.completed) {
                        const daysLeft = Math.ceil((new Date(item.date) - new Date()) / (1000 * 60 * 60 * 24));
                        let txt = daysLeft < 0 ? t('expired') : daysLeft === 0 ? t('today') : t('daysLeft').replace('{n}', daysLeft);
                        div.innerHTML += `<div class="grid-countdown">${txt}</div>`;
                    }

                    // Progress
                    if (item.subItems && item.subItems.length > 0) {
                        const done = item.subItems.filter(s => s.completed).length;
                        const pct = (done / item.subItems.length) * 100;
                        div.innerHTML += `<div class="grid-progress"><div class="grid-progress-bar" style="width:${pct}%"></div></div>`;
                    }

                    // Stamp & Content
                    const safeImg = item.img ? escapeHtml(item.img) : '';
                    div.innerHTML += `
                    <div class="grid-card-bg" style="background-image: url('${safeImg}')"></div>
                    <span class="grid-content">${escapeHtml(item.text)}</span>
                    <div class="stamp-mark"></div>
                `;
                }
                grid.appendChild(div);
            });

            frame.appendChild(grid);
            container.appendChild(frame);

            // Share & Print action buttons
            const actions = document.createElement('div');
            actions.className = 'bingo-actions';
            actions.innerHTML = `
            <button class="bingo-action-btn" onclick="shareBingoCard()">
                <i class="ph-duotone ph-share-network"></i> ${t('share') || 'Share'}
            </button>
            <button class="bingo-action-btn" onclick="printBingoCard()">
                <i class="ph-duotone ph-printer"></i> ${t('print') || 'Print'}
            </button>
        `;
            container.appendChild(actions);
        } // end if items.length > 0
    }
    // Autosave removed from render() for performance
    // save() is now only called when data actually changes
}

// --- Drag & Drop ---
function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSourceElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    this.classList.add('dragging');
}

const throttledDragLogic = throttle((clientY) => {
    const container = document.getElementById('mainContainer');
    const afterElement = getDragAfterElement(container, clientY);
    const draggable = document.querySelector('.dragging');
    if (draggable) {
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    }
}, 16);


function handleDragOver(e) {
    if (e.preventDefault) e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    throttledDragLogic(e.clientY);
    return false;
}


function handleTouchStart(e) {
    // Only allow dragging via the drag handle to prevent scrolling issues
    if (!e.target.closest('.drag-handle')) return;

    e.preventDefault(); // Prevent scroll while dragging
    dragSourceElement = this;
    this.style.opacity = '0.4';
    this.classList.add('dragging');
}

// --- View & Grid Management ---
function updateGridSize(val, shouldRender = true) {
    appData.config.gridSize = parseInt(val);

    // Update floating label and slider
    const floatLabel = document.getElementById('floatingSizeLabel');
    if (floatLabel) floatLabel.innerText = `${val}x${val}`;

    const floatSlider = document.getElementById('floatingGridInput');
    if (floatSlider) floatSlider.value = val;

    const label = document.getElementById('gridSizeLabel'); // Existing label
    if (label) label.innerText = `${val}x${val}`;

    const slider = document.getElementById('gridSizeInput'); // Existing slider
    if (slider) slider.value = val;

    if (shouldRender) {
        save();
        if (appData.config.view === 'grid') {
            scheduleRender();
        }
    }
}



const throttledTouchLogic = throttle((clientY) => {
    const container = document.getElementById('mainContainer');
    const afterElement = getDragAfterElement(container, clientY);
    if (dragSourceElement) {
        if (afterElement == null) {
            container.appendChild(dragSourceElement);
        } else {
            container.insertBefore(dragSourceElement, afterElement);
        }
    }
}, 16);

function handleTouchMove(e) {
    if (!dragSourceElement) return;
    if (e.cancelable) e.preventDefault();

    const touch = e.touches[0];
    throttledTouchLogic(touch.clientY);
}


function handleTouchEnd(e) {
    if (!dragSourceElement) return;
    this.style.opacity = '1';
    this.classList.remove('dragging');
    dragSourceElement = null;

    // Re-order and Save
    const container = document.getElementById('mainContainer');
    const cards = [...container.querySelectorAll('.card')];
    cards.forEach((card, index) => {
        const id = parseInt(card.dataset.id);
        const item = appData.items.find(i => i.id === id);
        if (item) item.order = index;
    });
    save();
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function handleDrop(e) {
    e.stopPropagation();
    // Re-calculate order based on DOM
    const container = document.getElementById('mainContainer');
    const cards = [...container.querySelectorAll('.card')];

    // Update appData order
    cards.forEach((card, index) => {
        const id = parseInt(card.dataset.id);
        const item = appData.items.find(i => i.id === id);
        if (item) item.order = index;
    });
    save();
    return false;
}

function handleDragEnd() {
    this.style.opacity = '1';
    this.classList.remove('dragging');
    scheduleRender(); // Refresh to clean states
}

// --- Item Management ---
function saveItem() {
    const text = document.getElementById('inpText').value;
    if (!text) return;
    const diff = document.getElementById('inpDiff').value;
    const notes = document.getElementById('inpNotes').value;
    const catId = parseInt(document.getElementById('inpCat').value);
    const date = document.getElementById('inpDate').value;
    let img = activeImageBuffer || document.getElementById('inpImgUrl').value;

    const newItem = {
        id: editingId || Date.now(),
        text, difficulty: diff, notes, img: img || "", catId, date,
        completed: false, subItems: tempSubGoals, type: appData.config.mode,
        order: editingId ? (appData.items.find(i => i.id === editingId)?.order ?? appData.items.length) : appData.items.length
    };

    if (editingId) {
        const idx = appData.items.findIndex(i => i.id === editingId);
        newItem.completed = appData.items[idx].completed;
        if (!img) newItem.img = appData.items[idx].img;
        newItem.order = appData.items[idx].order; // Keep order on edit
        appData.items[idx] = newItem;
    } else { appData.items.push(newItem); }

    save();
    closeModal('itemModal'); render();
}

/* ================================================================= */
/*  Vision Board Mode                                                */
/* ================================================================= */

function openVisionMode() {
    const container = document.getElementById('visionGrid');
    container.innerHTML = '';
    const items = appData.items.filter(i => (i.type || 'predictions') === appData.config.mode && i.img);

    if (items.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; text-align: center; color: rgba(255,255,255,0.9); padding: 20px;">
                <blockquote style="font-family: 'Times New Roman', serif; font-size: 1.8rem; font-style: italic; max-width: 700px; line-height: 1.6; margin-bottom: 25px; text-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                    ${t('visionQuote')}
                </blockquote>
                <cite style="font-size: 1rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 300; opacity: 0.8; border-top: 1px solid rgba(255,255,255,0.3); padding-top: 10px;">${t('visionAuthor')}</cite>
                
                <div style="margin-top: 60px; font-size: 0.85rem; opacity: 0.3; font-family: sans-serif;">
                    ${t('visionHint')}
                </div>
            </div>`;
    } else {
        items.forEach((item, i) => {
            const div = document.createElement('div');
            div.className = 'vision-card';
            div.style.animation = `fadeIn 0.5s ease forwards ${i * 0.1}s`;
            div.onclick = () => openEdit(item.id);
            div.innerHTML = `<img src="${escapeHtml(item.img)}" class="vision-img"><div class="vision-overlay"><h3>${escapeHtml(item.text)}</h3><p>${escapeHtml(item.date || '')}</p></div>`;
            container.appendChild(div);
        });
    }
    document.getElementById('visionContainer').classList.add('active');
}

function closeVisionMode() { document.getElementById('visionContainer').classList.remove('active'); }

// --- HELPERS ---
function renderSubItemsHtml(item) {
    if (!item.subItems || item.subItems.length === 0) return '';
    let html = '<div style="display:flex; flex-direction:column; gap:5px;">';
    item.subItems.forEach((s, idx) => {
        html += `
        <div class="checklist-item ${s.completed ? 'checked' : ''}" onclick="toggleSubGoal(${item.id}, ${idx})">
            <div class="checklist-checkbox"></div>
            <div style="flex:1; word-break:break-word; font-size:0.95rem;">${escapeHtml(s.text)}</div>
            <span class="diff-badge" style="margin-left:auto;">${s.difficulty || 'Medium'}</span>
        </div>`;
    });
    html += '</div>';
    return html;
}

function toggleItemDetails(id) {
    const cardBody = document.getElementById(`body-${id}`);
    const card = cardBody.closest('.card');

    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
    }
}

function toggleSubGoal(itemId, subIndex) {
    const item = appData.items.find(i => i.id === itemId);
    if (item && item.subItems && item.subItems[subIndex]) {
        const sub = item.subItems[subIndex];
        const wasCompleted = sub.completed;
        sub.completed = !sub.completed;

        if (sub.completed && !wasCompleted) {
            // Award XP for sub-goal (1 XP each)
            const oldXP = appData.stats.totalXP || 0;
            appData.stats.totalXP = oldXP + 1;

            confetti({ particleCount: 20, spread: 40, origin: { y: 0.7 } });
            playSound('complete');
            hapticFeedback('light');

            checkLevelUp(oldXP, appData.stats.totalXP);
        } else if (!sub.completed && wasCompleted) {
            appData.stats.totalXP = Math.max(0, (appData.stats.totalXP || 0) - 1);
        }

        save();
        render();
        setTimeout(() => {
            const el = document.querySelector(`.card[data-id="${itemId}"]`);
            if (el) el.classList.add('expanded');
        }, 10);
    }
}

function changeSort(val) { appData.config.sort = val; save(); render(); }

function openAddModal() {
    editingId = null;
    activeImageBuffer = null; // Fixed: was tempImgBase64
    tempSubGoals = [];

    document.getElementById('modalTitle').innerText = t('newGoal');
    document.getElementById('inpText').value = "";
    document.getElementById('inpNotes').value = "";
    document.getElementById('inpDate').value = "";

    document.getElementById('filePreviewText').innerText = t('noImage');
    document.getElementById('filePreviewText').style.borderColor = 'var(--text-muted)';
    document.getElementById('filePreviewText').style.color = 'var(--text-muted)';
    document.getElementById('filePreviewText').classList.remove('success');

    toggleImgMode('file');
    updateYearEndButton(false);

    // CRITICAL FIX: Ensure categories are rendered
    // If we have categories, default to the first one if ID 1 doesn't exist
    const defaultCat = appData.categories.find(c => c.id === 1) ? 1 : (appData.categories[0]?.id || null);
    renderCatOptions(defaultCat);

    renderSubGoalList();

    document.getElementById('btnDelete').classList.add('hidden');
    const btnUnc = document.getElementById('btnUncomplete');
    if (btnUnc) btnUnc.classList.add('hidden');
    openModal('itemModal');
}

// toggleImgMode is defined in V9.6 section at end of file

// handleFileSelect is defined in V9.6 section at end of file

// Toggle Year End date
function setYearEnd() {
    const dateInput = document.getElementById('inpDate');
    const isYearEnd = dateInput.value === '2026-12-31';

    if (isYearEnd) {
        // If already year end, clear it
        dateInput.value = '';
        updateYearEndButton(false);
    } else {
        // Set to year end
        dateInput.value = '2026-12-31';
        updateYearEndButton(true);
    }
}

function updateYearEndButton(isActive) {
    const btn = document.querySelector('[onclick="setYearEnd()"]');
    if (btn) {
        if (isActive) {
            btn.style.background = 'var(--accent)';
            btn.style.color = '#fff';
            btn.style.borderColor = 'var(--accent)';
        } else {
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
        }
    }
}

function openEdit(id) {
    const item = appData.items.find(i => i.id === id);
    if (!item) return;
    editingId = id;
    tempSubGoals = JSON.parse(JSON.stringify(item.subItems || []));
    document.getElementById('inpText').value = item.text;
    document.getElementById('inpNotes').value = item.notes || "";
    document.getElementById('inpDate').value = item.date || "";
    document.getElementById('filePreviewText').innerText = item.img ? t('imageExists') : t('noImage');
    updateYearEndButton(item.date === '2026-12-31');
    renderCatOptions(item.catId); renderSubGoalList();

    // Show delete button when editing
    document.getElementById('btnDelete').classList.remove('hidden');

    // Show uncomplete button if item is completed
    const btnUnc = document.getElementById('btnUncomplete');
    if (btnUnc) {
        if (item.completed) {
            btnUnc.classList.remove('hidden');
        } else {
            btnUnc.classList.add('hidden');
        }
    }

    openModal('itemModal');
}

function uncompleteFromModal() {
    if (!editingId) return;
    const item = appData.items.find(i => i.id === editingId);
    if (!item) return;
    item.completed = false;
    item.completedAt = null;
    save();
    closeModal('itemModal');
    render();
    lastBingoLineCount = 0; // Reset so re-checking works
}

/* ================================================================= */
/*  Bingo Game Logic                                                 */
/* ================================================================= */

let lastBingoLineCount = 0;

/**
 * Checks the grid for completed lines (rows, columns, diagonals).
 * Center cell (index 12) counts as completed for 5×5 grids.
 */
function checkBingoStatus(items, size) {
    const completedCells = new Set();
    let lineCount = 0;
    const total = size * size;

    if (items.length < size) return { completedCells, lineCount };

    const isCompleted = (idx) => {
        if (idx >= items.length) return false;
        if (size === 5 && idx === 12) return true; // free space
        return !!items[idx].completed;
    };

    // Check rows
    for (let r = 0; r < size; r++) {
        let complete = true;
        for (let c = 0; c < size; c++) {
            if (!isCompleted(r * size + c)) { complete = false; break; }
        }
        if (complete) {
            lineCount++;
            for (let c = 0; c < size; c++) completedCells.add(r * size + c);
        }
    }

    // Check columns
    for (let c = 0; c < size; c++) {
        let complete = true;
        for (let r = 0; r < size; r++) {
            if (!isCompleted(r * size + c)) { complete = false; break; }
        }
        if (complete) {
            lineCount++;
            for (let r = 0; r < size; r++) completedCells.add(r * size + c);
        }
    }

    // Check diagonals (only for grids >= 3)
    if (size >= 3) {
        // Top-left to bottom-right
        let d1 = true;
        for (let i = 0; i < size; i++) {
            if (!isCompleted(i * size + i)) { d1 = false; break; }
        }
        if (d1) {
            lineCount++;
            for (let i = 0; i < size; i++) completedCells.add(i * size + i);
        }

        // Top-right to bottom-left
        let d2 = true;
        for (let i = 0; i < size; i++) {
            if (!isCompleted(i * size + (size - 1 - i))) { d2 = false; break; }
        }
        if (d2) {
            lineCount++;
            for (let i = 0; i < size; i++) completedCells.add(i * size + (size - 1 - i));
        }
    }

    return { completedCells, lineCount };
}

function triggerCinkoReview() {
    let sortedItems = getSortedItems();
    const size = parseInt(appData.config.gridSize);
    const status = checkBingoStatus(sortedItems, size);

    // Instant Cell Styling
    const grid = document.getElementById('bingoGrid');
    if (appData.config.view === 'grid' && grid) {
        const cards = [...grid.children];
        cards.forEach((c, i) => {
            c.classList.toggle('line-complete-bg', status.completedCells.has(i));
        });
    }

    if (status.lineCount > lastBingoLineCount) {
        const totalLines = size + size + 2; // rows + cols + 2 diags
        let msg = t('cinko').replace('{n}', status.lineCount);
        if (status.lineCount === totalLines) msg = t('tombola');
        showCinkoToast(msg);
        safeConfetti({ particleCount: 80, spread: 90, origin: { y: 0.5 } });
    }
    lastBingoLineCount = status.lineCount;
}

function showCinkoToast(msg) {
    const el = document.getElementById('cinkoToast');
    el.innerText = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
}

/**
 * Share bingo card as image using html2canvas + Web Share API
 */
async function shareBingoCard() {
    const frame = document.querySelector('.bingo-frame');
    if (!frame) return;

    try {
        const canvas = await html2canvas(frame, {
            backgroundColor: '#ffffff',
            scale: 2,
            useCORS: true,
            logging: false
        });

        canvas.toBlob(async (blob) => {
            if (!blob) return;

            const file = new File([blob], '2026-bingo-card.png', { type: 'image/png' });

            // Try native share (mobile)
            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        title: '2026 Bingo Card',
                        text: t('shareBingoText') || 'Check out my 2026 Bingo Card! 🎰',
                        files: [file]
                    });
                    return;
                } catch (e) {
                    // User cancelled or share failed, fall through to download
                }
            }

            // Fallback: download
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = '2026-bingo-card.png';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 'image/png');
    } catch (e) {
        console.warn('Share failed:', e);
    }
}

/**
 * Print bingo card as image (uses html2canvas for pixel-perfect output)
 */
async function printBingoCard() {
    const frame = document.querySelector('.bingo-frame');
    if (!frame) return;

    try {
        const canvas = await html2canvas(frame, {
            backgroundColor: '#ffffff',
            scale: 2,
            useCORS: true,
            logging: false
        });

        const dataUrl = canvas.toDataURL('image/png');
        const printWin = window.open('', '_blank');
        if (!printWin) return;

        printWin.document.write(`<!DOCTYPE html>
<html>
<head>
    <title>2026 Bingo Card</title>
    <style>
        body { display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0; background:#fff; }
        img { max-width:100%; max-height:90vh; }
        @media print { body { background:#fff; } @page { margin: 1cm; } }
    </style>
</head>
<body><img src="${dataUrl}" alt="2026 Bingo Card"></body>
</html>`);

        printWin.document.close();
        setTimeout(() => {
            printWin.print();
            printWin.close();
        }, 300);
    } catch (e) {
        console.warn('Print failed:', e);
    }
}

function toggleComplete(id) {
    const i = appData.items.find(x => x.id === id);
    if (i) {
        const wasCompleted = i.completed;
        i.completed = !i.completed;
        if (i.completed) i.completedAt = Date.now();
        else delete i.completedAt;

        // Instant DOM Update
        const card = document.querySelector(`.grid-card[data-id="${i.id}"]`);
        if (card) {
            i.completed ? card.classList.add('completed') : card.classList.remove('completed');
        }

        if (i.completed && !wasCompleted) {
            // Award XP
            const xpGained = XP_POINTS[i.difficulty || 'Medium'];
            const oldXP = appData.stats.totalXP || 0;
            appData.stats.totalXP = oldXP + xpGained;

            // Effects (Async)
            requestAnimationFrame(() => {
                safeConfetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
                playSound('complete');
                hapticFeedback('success');
            });

            // Check for level up
            checkLevelUp(oldXP, appData.stats.totalXP);

            // Check for new badges
            if (checkBadges()) {
                setTimeout(() => showDialog(t('newBadge'), t('checkBadges'), () => { }, true), 1500);
            }
        } else if (!i.completed && wasCompleted) {
            // Remove XP if uncompleting
            const xpLost = XP_POINTS[i.difficulty || 'Medium'];
            appData.stats.totalXP = Math.max(0, (appData.stats.totalXP || 0) - xpLost);
        }

        save();
        updateStatsDisplay();
        if (appData.config.view === 'grid') triggerCinkoReview();
        // scheduleRender(); REMOVED for instant feedback
    }
}

// --- Category Management ---

function renderCatOptions(selId) {
    const sel = document.getElementById('inpCat'); sel.innerHTML = '';
    appData.categories.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id; opt.innerText = c.name;
        if (c.id === selId) opt.selected = true;
        sel.appendChild(opt);
    });
}

function openCatManager() {
    const list = document.getElementById('catList'); list.innerHTML = '';
    appData.categories.forEach(c => {
        const div = document.createElement('div'); div.className = 'cat-item';
        div.innerHTML = `<div class="color-preview" style="background:${c.color}"></div><span>${escapeHtml(c.name)}</span> <button onclick="delCat(${c.id})" style="margin-left:auto;color:red;border:none;background:none;cursor:pointer;">🗑️</button>`;
        list.appendChild(div);
    });
    openModal('catModal');
}

function addCategory() {
    const name = document.getElementById('newCatName').value;
    const color = document.getElementById('newCatColor').value;
    if (!name) return;
    appData.categories.push({ id: Date.now(), name, color });
    openCatManager(); renderCatOptions(null);
}

function delCat(id) {
    if (appData.categories.length <= 1) return alert(t('minOneCategory'));
    appData.categories = appData.categories.filter(c => c.id !== id);
    openCatManager(); renderCatOptions(null);
}

// --- Sub-Goal Management ---

function addSubGoal() {
    const t = document.getElementById('inpSubText').value;
    const d = document.getElementById('inpSubDiff').value;
    if (t) {
        tempSubGoals.push({ text: t, completed: false, difficulty: d });
        document.getElementById('inpSubText').value = '';
        renderSubGoalList();
    }
}

function renderSubGoalList() {
    const l = document.getElementById('subGoalList'); l.innerHTML = '';
    tempSubGoals.forEach((s, i) => { l.innerHTML += `<div class="sub-goal-item"><span>${escapeHtml(s.text)} <small class="text-muted">(${s.difficulty})</small></span><button onclick="tempSubGoals.splice(${i},1);renderSubGoalList()" style="color:red;border:none;background:none;">X</button></div>`; });
}

function handleCheck(id, e) { e.stopPropagation(); toggleComplete(id); }

function openDetailModal(id) {
    viewingId = id; const item = appData.items.find(i => i.id === id);
    if (!item) return;
    const l = document.getElementById('detailList'); l.innerHTML = '';
    l.innerHTML += `<div class="checklist-item ${item.completed ? 'checked' : ''}" onclick="toggleComplete(${item.id});openDetailModal(${item.id})"><div class="checklist-checkbox"></div><b>${t('mainGoal')} (${item.difficulty})</b></div>`;
    if (item.subItems) item.subItems.forEach((s, idx) => {
        l.innerHTML += `<div class="checklist-item ${s.completed ? 'checked' : ''}" onclick="toggleSubGoal(${item.id},${idx});openDetailModal(${item.id})"><div class="checklist-checkbox"></div>${escapeHtml(s.text)}</div>`;
    });
    openModal('detailModal');
}

function editFromDetail() { closeModal('detailModal'); openEdit(viewingId); }

// --- VIEW SWITCHING ---
function switchMode(m, r = true) {
    appData.config.mode = m;
    document.getElementById('btnModePred').classList.toggle('active', m === 'predictions');
    document.getElementById('btnModeGoal').classList.toggle('active', m === 'goals');
    if (r) render();
}

function switchView(v) {
    appData.config.view = v;
    const btnList = document.getElementById('btnList');
    const btnGrid = document.getElementById('btnGrid');
    if (btnList) btnList.classList.toggle('active', v === 'list');
    if (btnGrid) btnGrid.classList.toggle('active', v === 'grid');

    const floatCtrl = document.getElementById('floatingGridControls');
    if (floatCtrl) {
        if (v === 'grid') {
            floatCtrl.classList.remove('hidden');
            floatCtrl.style.display = 'block';
            floatCtrl.style.visibility = 'visible';
            floatCtrl.style.zIndex = '2300';
            updateGridSize(appData.config.gridSize, false);
        } else {
            floatCtrl.classList.add('hidden');
            floatCtrl.style.display = 'none';
        }
    }

    render();
    save();
}

// --- UI Dialogs & Modals ---

function openSettings() { openModal('settingsModal'); }
// openRandomGen is defined in the Random Ideas section

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    // Restore scroll if no other modals are open
    if (!document.querySelector('.modal-overlay.active')) {
        document.body.style.overflow = '';
    }
}
function openModal(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}


// --- DIALOG ---
function showDialog(title, msg, onConfirm, isAlert = false) {
    document.getElementById('dialogTitle').innerText = title; document.getElementById('dialogMsg').innerText = msg;
    const c = document.getElementById('dialogBtns'); c.innerHTML = '';
    const btn = document.createElement('button'); btn.innerText = isAlert ? t('ok') : t('cancel'); btn.className = 'btn btn-secondary'; btn.onclick = () => closeModal('dialogModal'); c.appendChild(btn);
    if (!isAlert) { const btn2 = document.createElement('button'); btn2.innerText = t('yes'); btn2.className = 'btn btn-danger'; btn2.onclick = () => { onConfirm(); closeModal('dialogModal') }; c.appendChild(btn2); }
    openModal('dialogModal');
}

function confirmDelete() {
    showDialog(t('deleteConfirm'), t('areYouSure'), () => {
        appData.items = appData.items.filter(i => i.id !== editingId); save(); closeModal('itemModal'); render();
    });
}

// --- Data Persistence ---
function save(immediate = false) {
    // Validate stats before saving to prevent cheating
    appData.stats = validateStats(appData.stats);

    if (immediate) {
        localStorage.setItem(STORAGE_KEY, obfuscateData(appData));
    } else {
        debouncedSave();
    }
}

// --- THEME & FONT ---
function cycleTheme() {
    const themes = ['light', 'dark', 'cyberpunk'];
    let idx = themes.indexOf(appData.config.theme);
    idx = (idx + 1) % themes.length;
    appData.config.theme = themes[idx];
    applyTheme(appData.config.theme);
    save();
}

function applyTheme(t) {
    document.body.setAttribute('data-theme', t);
}

function toggleFontSize() {
    appData.config.fontSize = appData.config.fontSize === 'normal' ? 'large' : 'normal';
    applyFontSize(appData.config.fontSize);
    save();
}

function applyFontSize(s) {
    document.body.setAttribute('data-size', s);
}

// --- BACKUP & RESTORE ---
function exportData() {
    const s = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData));
    const n = document.createElement('a'); n.href = s; n.download = 'life_architect_2026.json';
    document.body.appendChild(n);
    n.click();
    document.body.removeChild(n);
}

function importData(inp) {
    const f = inp.files[0];
    if (f) {
        const r = new FileReader();
        r.onload = e => {
            try {
                const loaded = JSON.parse(e.target.result);
                if (loaded.items && loaded.categories) {
                    appData = loaded;
                    // Validate stats to prevent cheat injection via import
                    appData.stats = validateStats(appData.stats);
                    save();
                    showDialog(t('importSuccess'), t('importSuccessMsg'), () => location.reload(), true);
                } else {
                    showDialog(t('errorTitle'), t('invalidFile'), () => { }, true);
                }
            } catch (e) {
                showDialog(t('errorTitle'), t('fileError'), () => { }, true);
            }
        };
        r.readAsText(f);
    }
}

function resetApp() {
    showDialog(t('resetConfirm'), t('resetMsg'), () => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('welcomeShown_v9');
        location.reload();
    });
}

// --- Sound Toggle ---
function toggleSound() {
    appData.config.soundEnabled = !appData.config.soundEnabled;
    const btn = document.getElementById('soundToggle');
    if (btn) {
        btn.innerHTML = appData.config.soundEnabled ? '<i class="ph-duotone ph-speaker-high"></i>' : '<i class="ph-duotone ph-speaker-slash"></i>';
        btn.classList.toggle('muted', !appData.config.soundEnabled);
    }
    if (appData.config.soundEnabled) {
        playSound('complete'); // Test sound
    }
    save();
}

// --- Stats Display ---
function updateStatsDisplay() {
    const level = getCurrentLevel();
    const rankEl = document.getElementById('userRank');
    if (rankEl) {
        let streakHtml = appData.stats.streak > 1 ? `<span class="streak-badge"><i class="ph-duotone ph-flame"></i> ${appData.stats.streak}</span>` : '';
        rankEl.innerHTML = `<span class="level-badge">Lv.${level.level} ${level.name}</span>${streakHtml}`;
    }
}

/* ================================================================= */
/*  Statistics & Analysis                                            */
/* ================================================================= */

function openStats() {
    calculateStats();
    openModal('statsModal');
}

/**
 * Calculates user statistics for the dashboard.
 */
function calculateStats() {
    const items = appData.items;
    const completed = items.filter(i => i.completed);

    // Basic stats
    document.getElementById('statTotalItems').innerText = items.length;
    document.getElementById('statCompleted').innerText = completed.length;
    document.getElementById('statTotalXP').innerText = appData.stats.totalXP || 0;
    document.getElementById('statStreak').innerText = appData.stats.streak || 0;

    // Overall progress
    const progress = items.length > 0 ? Math.round((completed.length / items.length) * 100) : 0;
    document.getElementById('overallProgress').style.width = progress + '%';
    document.getElementById('progressLabel').innerText = progress + '%';

    // Difficulty breakdown
    const diffCounts = { Easy: 0, Medium: 0, Hard: 0, Impossible: 0 };
    const diffCompleted = { Easy: 0, Medium: 0, Hard: 0, Impossible: 0 };

    items.forEach(i => {
        diffCounts[i.difficulty || 'Medium']++;
        if (i.completed) diffCompleted[i.difficulty || 'Medium']++;
    });

    const diffBars = document.getElementById('difficultyBars');
    diffBars.innerHTML = '';

    ['Easy', 'Medium', 'Hard', 'Impossible'].forEach(diff => {
        const total = diffCounts[diff];
        const done = diffCompleted[diff];
        const pct = total > 0 ? (done / total) * 100 : 0;
        const labels = { Easy: t('diffEasy'), Medium: t('diffMedium'), Hard: t('diffHard'), Impossible: t('diffImpossible') };

        diffBars.innerHTML += `
            <div class="diff-bar-row">
                <div class="diff-bar-label">${labels[diff]}</div>
                <div class="diff-bar-track">
                    <div class="diff-bar-fill ${diff.toLowerCase()}" style="width:${pct}%"></div>
                </div>
                <div class="diff-bar-count">${done}/${total}</div>
            </div>`;
    });
}

// --- Gamification (Badges) ---

function getBadges() {
    return [
        // --- BASIC ---
        { id: 'first_goal', icon: '<i class="ph-duotone ph-target"></i>', name: t('b_first_goal'), desc: t('bd_first_goal'), condition: () => appData.items.length >= 1 },
        { id: 'five_goals', icon: '<i class="ph-duotone ph-number-circle-five"></i>', name: t('b_five_goals'), desc: t('bd_five_goals'), condition: () => appData.items.length >= 5 },
        { id: 'ten_goals', icon: '<i class="ph-duotone ph-number-circle-ten"></i>', name: t('b_ten_goals'), desc: t('bd_ten_goals'), condition: () => appData.items.length >= 10 },
        // --- COMPLETION ---
        { id: 'first_complete', icon: '<i class="ph-duotone ph-check-circle"></i>', name: t('b_first_complete'), desc: t('bd_first_complete'), condition: () => appData.items.some(i => i.completed) },
        { id: 'five_complete', icon: '<i class="ph-duotone ph-star"></i>', name: t('b_five_complete'), desc: t('bd_five_complete'), condition: () => appData.items.filter(i => i.completed).length >= 5 },
        { id: 'tombola', icon: '<i class="ph-duotone ph-confetti"></i>', name: t('b_tombola'), desc: t('bd_tombola'), condition: () => appData.items.filter(i => i.completed).length >= 25 },
        { id: 'halfway', icon: '<i class="ph-duotone ph-flag-checkered"></i>', name: t('b_halfway'), desc: t('bd_halfway'), condition: () => appData.items.length >= 10 && (appData.items.filter(i => i.completed).length / appData.items.length) >= 0.5 },
        { id: 'hard_complete', icon: '<i class="ph-duotone ph-skull"></i>', name: t('b_hard_complete'), desc: t('bd_hard_complete'), condition: () => appData.items.some(i => i.completed && (i.difficulty === 'Hard' || i.difficulty === 'Impossible')) },
        // --- STREAKS ---
        { id: 'streak_3', icon: '<i class="ph-duotone ph-flame"></i>', name: t('b_streak_3'), desc: t('bd_streak_3'), condition: () => appData.stats.streak >= 3 },
        { id: 'streak_7', icon: '<i class="ph-duotone ph-calendar-check"></i>', name: t('b_streak_7'), desc: t('bd_streak_7'), condition: () => appData.stats.streak >= 7 },
        { id: 'streak_14', icon: '<i class="ph-duotone ph-clock"></i>', name: t('b_streak_14'), desc: t('bd_streak_14'), condition: () => appData.stats.streak >= 14 },
        { id: 'streak_30', icon: '<i class="ph-duotone ph-trophy"></i>', name: t('b_streak_30'), desc: t('bd_streak_30'), condition: () => appData.stats.streak >= 30 },
        // --- XP & LEVELS ---
        { id: 'xp_50', icon: '<i class="ph-duotone ph-medal"></i>', name: t('b_xp_50'), desc: t('bd_xp_50'), condition: () => appData.stats.totalXP >= 50 },
        { id: 'xp_100', icon: '<i class="ph-duotone ph-diamond"></i>', name: t('b_xp_100'), desc: t('bd_xp_100'), condition: () => appData.stats.totalXP >= 100 },
        { id: 'xp_500', icon: '<i class="ph-duotone ph-crown"></i>', name: t('b_xp_500'), desc: t('bd_xp_500'), condition: () => appData.stats.totalXP >= 500 },
        { id: 'legend', icon: '<i class="ph-duotone ph-crown-simple"></i>', name: t('b_legend'), desc: t('bd_legend'), condition: () => appData.stats.level >= 7 },
        // --- CATEGORIES ---
        { id: 'cat_health', icon: '<i class="ph-duotone ph-heart-beat"></i>', name: t('b_cat_health'), desc: t('bd_cat_health'), condition: () => countCompletedByCategory(['sağlık', 'spor', 'diyet', 'fitness', 'health', 'sport']) >= 3 },
        { id: 'cat_career', icon: '<i class="ph-duotone ph-briefcase"></i>', name: t('b_cat_career'), desc: t('bd_cat_career'), condition: () => countCompletedByCategory(['kariyer', 'iş', 'okul', 'ders', 'proje', 'career', 'work', 'school']) >= 3 },
        { id: 'cat_finance', icon: '<i class="ph-duotone ph-currency-dollar"></i>', name: t('b_cat_finance'), desc: t('bd_cat_finance'), condition: () => countCompletedByCategory(['finans', 'para', 'yatırım', 'kripto', 'finance', 'money', 'investment']) >= 3 },
        { id: 'cat_art', icon: '<i class="ph-duotone ph-paint-brush"></i>', name: t('b_cat_art'), desc: t('bd_cat_art'), condition: () => countCompletedByCategory(['sanat', 'hobi', 'müzik', 'resim', 'kitap', 'art', 'hobby', 'music', 'book']) >= 3 },
        { id: 'cat_travel', icon: '<i class="ph-duotone ph-airplane"></i>', name: t('b_cat_travel'), desc: t('bd_cat_travel'), condition: () => countCompletedByCategory(['seyahat', 'gezi', 'tatil', 'kamp', 'travel', 'trip', 'vacation']) >= 3 },
        { id: 'cat_social', icon: '<i class="ph-duotone ph-users-three"></i>', name: t('b_cat_social'), desc: t('bd_cat_social'), condition: () => countCompletedByCategory(['aile', 'arkadaş', 'etkinlik', 'buluşma', 'family', 'friend', 'event']) >= 3 },
        // --- MISC ---
        { id: 'photographer', icon: '<i class="ph-duotone ph-camera"></i>', name: t('b_photographer'), desc: t('bd_photographer'), condition: () => appData.items.filter(i => i.img && i.img.length > 50).length >= 5 },
        // --- NEW BADGES ---
        { id: 'impossible', icon: '<i class="ph-duotone ph-lightning"></i>', name: t('b_impossible'), desc: t('bd_impossible'), condition: () => appData.items.some(i => i.completed && i.difficulty === 'Impossible') },
        { id: 'twenty_goals', icon: '<i class="ph-duotone ph-list-numbers"></i>', name: t('b_twenty_goals'), desc: t('bd_twenty_goals'), condition: () => appData.items.length >= 20 },
        { id: 'sub_master', icon: '<i class="ph-duotone ph-tree-structure"></i>', name: t('b_sub_master'), desc: t('bd_sub_master'), condition: () => appData.items.filter(i => i.subGoals && i.subGoals.length > 0).length >= 10 },
        { id: 'prediction_5', icon: '<i class="ph-duotone ph-crystal-ball"></i>', name: t('b_prediction_5'), desc: t('bd_prediction_5'), condition: () => appData.items.filter(i => (i.type || 'predictions') === 'predictions').length >= 5 },
        { id: 'all_cats', icon: '<i class="ph-duotone ph-palette"></i>', name: t('b_all_cats'), desc: t('bd_all_cats'), condition: () => { const usedCats = new Set(appData.items.map(i => i.catId)); return appData.categories.length >= 3 && appData.categories.every(c => usedCats.has(c.id)); } },
        { id: 'speed_10', icon: '<i class="ph-duotone ph-rocket"></i>', name: t('b_speed_10'), desc: t('bd_speed_10'), condition: () => { const monthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000; return appData.items.filter(i => i.completed && i.completedAt && i.completedAt > monthAgo).length >= 10; } },
        { id: 'vision_user', icon: '<i class="ph-duotone ph-image"></i>', name: t('b_vision_user'), desc: t('bd_vision_user'), condition: () => appData.items.filter(i => i.img && i.img.length > 50).length >= 3 },
        { id: 'perfect_week', icon: '<i class="ph-duotone ph-calendar-star"></i>', name: t('b_perfect_week'), desc: t('bd_perfect_week'), condition: () => appData.stats.streak >= 7 }
    ];
}

function countCompletedByCategory(keywords) {
    let count = 0;
    appData.items.forEach(item => {
        const cat = appData.categories.find(c => c.id == item.catId);
        if (cat) {
            const catName = cat.name.toLowerCase();
            const text = item.text.toLowerCase();
            if (keywords.some(k => catName.includes(k) || text.includes(k))) {
                count++;
            }
        }
    });
    return count;
}

function openBadges() {
    checkBadges();
    renderBadges();
    openModal('badgesModal');
}

function checkBadges() {
    let newBadge = false;
    getBadges().forEach(badge => {
        if (!appData.stats.badges.includes(badge.id) && badge.condition()) {
            appData.stats.badges.push(badge.id);
            newBadge = true;
        }
    });
    if (newBadge) save();
    return newBadge;
}

function renderBadges() {
    const grid = document.getElementById('badgesGrid');
    grid.innerHTML = '';

    getBadges().forEach(badge => {
        const earned = appData.stats.badges.includes(badge.id);
        grid.innerHTML += `
            <div class="badge-card ${earned ? 'earned' : 'locked'}">
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-desc">${badge.desc}</div>
            </div>`;
    });
}

// --- Social & Notifications ---

function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showDialog(t('notifEnabled'), t('notifEnabledMsg'), () => { }, true);
            }
        });
    }
}

function scheduleReminders() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    // Check for items with dates approaching in next 3 days
    const today = new Date();
    const threeDays = new Date();
    threeDays.setDate(today.getDate() + 3);

    appData.items.forEach(item => {
        if (!item.completed && item.date) {
            const itemDate = new Date(item.date);
            if (itemDate >= today && itemDate <= threeDays) {
                const daysLeft = Math.ceil((itemDate - today) / (1000 * 60 * 60 * 24));
                new Notification(t('notifTitle'), {
                    body: t('notifBody').replace('{text}', item.text).replace('{days}', daysLeft),
                    icon: '🎯',
                    tag: `reminder-${item.id}`
                });
            }
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    init();
});

// --- V9 Features ---

function updateYearProgress() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const start = new Date(currentYear, 0, 1);
    const end = new Date(currentYear + 1, 0, 1);
    const percent = ((now - start) / (end - start)) * 100;

    const fill = document.getElementById('yearProgressFill');
    const label = document.getElementById('yearProgressLabel');

    if (fill && label) {
        fill.style.width = `${percent}%`;
        const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
        label.innerText = t('yearProgress').replace('{year}', currentYear).replace('{day}', dayOfYear).replace('{pct}', percent.toFixed(1));
    }
}

// Daily Mood Logic
function openDailyModal() {
    openModal('dailyModal');
    // Highlight if already selected today
    const todayStr = new Date().toISOString().split('T')[0];
    if (appData.dailyStats && appData.dailyStats[todayStr]) {
        const mood = appData.dailyStats[todayStr];
        document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.mood-btn[data-mood="${mood}"]`);
        if (btn) btn.classList.add('active');
    }
}

function selectMood(mood) {
    const todayStr = new Date().toISOString().split('T')[0];

    if (!appData.dailyStats) appData.dailyStats = {};
    appData.dailyStats[todayStr] = mood;

    save();

    // Visual feedback
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.mood-btn[data-mood="${mood}"]`);
    if (btn) btn.classList.add('active');

    // Apply subtle theme adaptation
    applyMoodTheme(mood);

    // Celebration effect
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
    hapticFeedback('light');

    setTimeout(() => closeModal('dailyModal'), 600);
}

function restoreDailyMood() {
    const todayStr = new Date().toISOString().split('T')[0];
    if (appData.dailyStats && appData.dailyStats[todayStr]) {
        applyMoodTheme(appData.dailyStats[todayStr]);
    } else {
        // Reset mood theme if new day
        document.body.removeAttribute('data-mood');
    }
}

function applyMoodTheme(mood) {
    document.body.setAttribute('data-mood', mood);
}

// Welcome Modal Logic
function checkFirstTimeUser() {
    if (!localStorage.getItem('welcomeShown_v9')) {
        setTimeout(() => {
            openModal('welcomeModal');
        }, 1500); // Small delay for effect
    }
}

function closeWelcome() {
    closeModal('welcomeModal');
    localStorage.setItem('welcomeShown_v9', 'true');
    hapticFeedback('success');
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
}


function toggleBingoEditMode() {
    bingoEditMode = !bingoEditMode;

    const lockBtn = document.getElementById('bingoEditToggle');
    const lockIcon = document.getElementById('bingoLockIcon');
    const container = document.getElementById('mainContainer');

    if (bingoEditMode) {
        // Enter edit mode
        lockBtn.classList.add('active');
        lockIcon.className = 'ph-duotone ph-lock-simple-open';
        container.classList.add('edit-mode');
        hapticFeedback('light');
    } else {
        // Exit edit mode
        lockBtn.classList.remove('active');
        lockIcon.className = 'ph-duotone ph-lock-simple';
        container.classList.remove('edit-mode');
        hapticFeedback('success');
    }

    render(); // Re-render to update card classes
}

// Grid Drag Handlers (Desktop)
let gridDragSrcEl = null;
let gridDragSrcIndex = null;

function handleGridDragStart(e) {
    gridDragSrcEl = this;
    gridDragSrcIndex = parseInt(this.dataset.index);
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.id);
}

function handleGridDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    if (!gridDragSrcEl || this === gridDragSrcEl) return;

    const container = document.getElementById('mainContainer');
    const cards = [...container.querySelectorAll('.grid-card')];
    const draggedIndex = cards.indexOf(gridDragSrcEl);
    const targetIndex = cards.indexOf(this);

    if (draggedIndex === -1 || targetIndex === -1) return;

    // Live DOM reordering - move the dragged card to new position
    if (draggedIndex < targetIndex) {
        this.after(gridDragSrcEl);
    } else {
        this.before(gridDragSrcEl);
    }
}

function handleGridDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    // Save the new order based on current DOM positions
    saveGridOrderFromDOM();
}

function handleGridDragEnd() {
    if (gridDragSrcEl) {
        gridDragSrcEl.classList.remove('dragging');
    }
    gridDragSrcEl = null;
    gridDragSrcIndex = null;
}

// Grid Touch Handlers (Mobile)
let gridTouchSrcEl = null;
let gridTouchSrcIndex = null;
let gridTouchStartY = 0;
let gridTouchStartX = 0;

function handleGridTouchStart(e) {
    if (!bingoEditMode) return;

    gridTouchSrcEl = this;
    gridTouchSrcIndex = parseInt(this.dataset.index);

    const touch = e.touches[0];
    gridTouchStartX = touch.clientX;
    gridTouchStartY = touch.clientY;

    this.classList.add('dragging');
    hapticFeedback('light');
}

function handleGridTouchMove(e) {
    if (!gridTouchSrcEl || !bingoEditMode) return;
    e.preventDefault();

    const touch = e.touches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);

    if (elementBelow && elementBelow.classList.contains('grid-card') && elementBelow !== gridTouchSrcEl) {
        const container = document.getElementById('mainContainer');
        const cards = [...container.querySelectorAll('.grid-card')];
        const draggedIndex = cards.indexOf(gridTouchSrcEl);
        const targetIndex = cards.indexOf(elementBelow);

        if (draggedIndex !== -1 && targetIndex !== -1) {
            // Live DOM reordering for touch
            if (draggedIndex < targetIndex) {
                elementBelow.after(gridTouchSrcEl);
            } else {
                elementBelow.before(gridTouchSrcEl);
            }
            hapticFeedback('light');
        }
    }
}

function handleGridTouchEnd(e) {
    if (!gridTouchSrcEl || !bingoEditMode) return;

    // Save the new order based on current DOM positions
    saveGridOrderFromDOM();

    if (gridTouchSrcEl) {
        gridTouchSrcEl.classList.remove('dragging');
    }
    gridTouchSrcEl = null;
}

// Save Grid Order from current DOM positions (Insert Logic)
function saveGridOrderFromDOM() {
    const container = document.getElementById('mainContainer');
    const cards = [...container.querySelectorAll('.grid-card')];

    // Get the item IDs in their new DOM order
    const newOrder = cards.map(card => parseInt(card.dataset.id));

    // Update appData.items order values based on new positions
    newOrder.forEach((id, index) => {
        const item = appData.items.find(i => i.id === id);
        if (item) {
            item.order = index;
        }
    });

    save();
    hapticFeedback('success');
}



// --- Random Ideas ---

function openRandomGen() {
    const rp = getRandomPredictions();
    const rg = getRandomGoals();
    const predictionIdea = rp[Math.floor(Math.random() * rp.length)];
    const goalIdea = rg[Math.floor(Math.random() * rg.length)];

    document.getElementById('randomPredictionText').innerText = predictionIdea;
    document.getElementById('randomGoalText').innerText = goalIdea;

    openModal('randomModal');
}

function refreshRandomIdea(type) {
    if (type === 'prediction') {
        const rp = getRandomPredictions();
        document.getElementById('randomPredictionText').innerText = rp[Math.floor(Math.random() * rp.length)];
    } else {
        const rg = getRandomGoals();
        document.getElementById('randomGoalText').innerText = rg[Math.floor(Math.random() * rg.length)];
    }
    hapticFeedback('light');
}

function useRandomIdea(type) {
    const text = type === 'prediction'
        ? document.getElementById('randomPredictionText').innerText
        : document.getElementById('randomGoalText').innerText;

    const itemType = type === 'prediction' ? 'predictions' : 'goals';

    appData.items.push({
        id: Date.now(),
        text: text,
        difficulty: 'Medium',
        catId: 1,
        completed: false,
        type: itemType,
        order: appData.items.length,
        subItems: [],
        notes: '',
        img: '',
        date: ''
    });

    save();
    closeModal('randomModal');

    // Switch to appropriate mode
    if (appData.config.mode !== itemType) {
        switchMode(itemType);
    } else {
        render();
    }

    hapticFeedback('success');
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
}

// init() is called from DOMContentLoaded

// --- File Upload ---
function toggleImgMode(mode) {
    const fileContainer = document.getElementById('imgFileContainer');
    const urlInput = document.getElementById('inpImgUrl');

    if (mode === 'file') {
        fileContainer.classList.remove('hidden');
        fileContainer.style.display = 'block';
        urlInput.classList.add('hidden');
        urlInput.style.display = 'none';
    } else {
        fileContainer.classList.add('hidden');
        fileContainer.style.display = 'none';
        urlInput.classList.remove('hidden');
        urlInput.style.display = 'block';
        urlInput.focus();
    }
}


function handleFileSelect(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            activeImageBuffer = e.target.result; // Fixed: was tempImgBase64
            const preview = document.getElementById('filePreviewText');
            if (preview) {
                preview.innerText = t('imageSelected');
                preview.style.borderColor = "var(--success)";
                preview.style.color = "var(--success)";
                preview.style.background = "rgba(46, 213, 115, 0.1)";
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Duplicate openAddModal removed - the correct version is at line ~1072

