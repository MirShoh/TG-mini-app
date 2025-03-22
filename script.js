// Telegram Web App integratsiyasi
window.Telegram.WebApp.ready();

// Foydalanuvchi ma'lumotlari
let userData = {};

// Bo'limlarni ko'rsatish funksiyasi
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelectorAll('.sidebar a').forEach(a => {
        a.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`a[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Sidebar toggle funksiyasi
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// Registratsiya formasi
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    userData.name = name;
    window.Telegram.WebApp.sendData(JSON.stringify(userData));
    document.getElementById('regStatus').textContent = 'Registratsiya tasdiqlandi!';
    document.getElementById('userInfo').textContent = `Ism: ${userData.name}`;
});

// Kalkulyator funksiyalari
let calcExpression = '';
function addToCalc(value) {
    calcExpression += value;
    document.getElementById('calcResult').value = calcExpression;
}

function calculate() {
    try {
        calcExpression = eval(calcExpression).toString();
        document.getElementById('calcResult').value = calcExpression;
    } catch (e) {
        document.getElementById('calcResult').value = 'Xato';
    }
}

function clearCalc() {
    calcExpression = '';
    document.getElementById('calcResult').value = '';
}

// Vazifalar funksiyalari
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li');
        li.innerHTML = `${todoText} <button onclick="this.parentElement.remove()">O‘chirish</button>`;
        document.getElementById('todoList').appendChild(li);
        todoInput.value = '';
    }
}

// Ob-havo funksiyasi
async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        document.getElementById('weatherResult').textContent = 'Shahar nomini kiriting!';
        return;
    }
    try {
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // OpenWeatherMap API kalitini qo‘shing
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('weatherResult').textContent = `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
        } else {
            document.getElementById('weatherResult').textContent = 'Shahar topilmadi!';
        }
    } catch (e) {
        document.getElementById('weatherResult').textContent = 'Xatolik yuz berdi!';
    }
}

// Motivatsion iqtiboslar
const quotes = [
    "Muvaffaqiyat — bu har kuni kichik qadamlar bilan keladi.",
    "Orzularingga yetish uchun hozirdan boshla!",
    "Har bir muammo — yangi imkoniyatdir.",
    "Sabr va mehnat bilan hamma narsa mumkin."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').textContent = quotes[randomIndex];
}

// Dastlabki bo'limni ko'rsatish
showSection('home');
getRandomQuote(); // Birinchi iqtibosni yuklash
