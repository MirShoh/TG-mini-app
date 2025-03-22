// Telegram Web App integratsiyasi
window.Telegram.WebApp.ready();

// Foydalanuvchi ma'lumotlari
let userData = {};

// Bo'limlarni ko'rsatish funksiyasi
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Registratsiya formasi
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    userData.name = name;

    // Telegram orqali ma'lumotni yuborish
    window.Telegram.WebApp.sendData(JSON.stringify(userData));
    
    // Statusni yangilash
    document.getElementById('regStatus').textContent = 'Registratsiya tasdiqlandi!';
    
    // Profilni yangilash
    document.getElementById('userInfo').textContent = `Ism: ${userData.name}`;
});

// Dastlabki bo'limni ko'rsatish
showSection('home');