// ===============================================
// Firebase конфигурация
// ===============================================
const firebaseConfig = {
    apiKey: "AIzaSyB-fanAD0E3GY04t41vxfpyZjo0F6LqDYs",
    authDomain: "baldieenglish.firebaseapp.com",
    projectId: "baldieenglish",
    storageBucket: "baldieenglish.firebasestorage.app",
    messagingSenderId: "107989336699",
    appId: "1:107989336699:web:05a047ad6c0a44cf7158de"
};

// Инициализация
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ===============================================
// Глобальные константы
// ===============================================
const MAP_SIZE = 15;
const CELL_SIZE = 50; // для canvas 750x750 (15*50)
const TEAMS = {
    team1: { name: 'Красные', color: '#ff4444', emoji: '🔴' },
    team2: { name: 'Синие', color: '#4444ff', emoji: '🔵' },
    team3: { name: 'Зеленые', color: '#44ff44', emoji: '🟢' }
};
