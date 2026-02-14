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
