const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
});

const fadeItems = document.querySelectorAll('.fade-in');
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.18,
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
    }
    });
}, observerOptions);

fadeItems.forEach((item) => fadeObserver.observe(item));


const openIkeja = document.getElementById('openIkeja');
const ikejaMall = document.getElementById('ikejaMall');
const closeIkeja = document.getElementById('closeIkeja');
// const mainPage = document.getElementById('mainPage');

openIkeja.addEventListener('click', () => {
    ikejaMall.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeIkeja.addEventListener('click', () => {
    ikejaMall.style.display = 'none';
    mainPage.classList.remove('blur');
});

const openLekki = document.getElementById('openLekki');
const lekkiPhase1 = document.getElementById('lekkiPhase1');
const closeLekki = document.getElementById('closeLekki');


openLekki.addEventListener('click', () => {
    lekkiPhase1.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeLekki.addEventListener('click', () => {
    lekkiPhase1.style.display = 'none';
    mainPage.classList.remove('blur');  });

const openVictoria = document.getElementById('openVictoria');
const victoriaIsland = document.getElementById('victoriaIsland');
const closeVictoria = document.getElementById('closeVictoria');


openVictoria.addEventListener('click', () => { 
    victoriaIsland.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeVictoria.addEventListener('click', () => {
    victoriaIsland.style.display = 'none';
    mainPage.classList.remove('blur');
});

const openYaba = document.getElementById('openYaba');
const yabaCentral = document.getElementById('yabaCentral');
const closeYaba = document.getElementById('closeYaba');

openYaba.addEventListener('click', () => {
    yabaCentral.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeYaba.addEventListener('click', () => {
    yabaCentral.style.display = 'none';
    mainPage.classList.remove('blur');
}); 

const panelChip = document.getElementById('panelChip');
// const victoriaIsland = document.getElementById('victoriaIsland');
    panelChip.addEventListener('click', () => {
    victoriaIsland.style.display = 'flex';
});
const panelChip1 = document.getElementById('panelChip1');
// const victoriaIsland = document.getElementById('victoriaIsland');
    panelChip1.addEventListener('click', () => {
    yabaCentral.style.display = 'flex';
});
const panelChip2 = document.getElementById('panelChip2');
// const victoriaIsland = document.getElementById('victoriaIsland');
    panelChip2.addEventListener('click', () => {
    ikejaMall.style.display = 'flex';
});

const heroVisual = document.getElementById('hero-visual');
const heroVisual1 = document.getElementById('hero-visual1');
const heroVisual2 = document.getElementById('hero-visual2');

function showPanel(panel) {
    heroVisual.style.display = 'none';
    heroVisual1.style.display = 'none';
    heroVisual2.style.display = 'none';

    panel.style.display = 'flex';
}

// ALL VI DOTS
document.querySelectorAll('.dot-vi').forEach(dot => {
    dot.addEventListener('click', () => {
        showPanel(heroVisual);
    });
});

// ALL YABA DOTS
document.querySelectorAll('.dot-yaba').forEach  (dot => {
    dot.addEventListener('click', () => {
        showPanel(heroVisual1);
    });
});

// ALL IKEJA DOTS
document.querySelectorAll('.dot-ikeja').forEach(dot => {
    dot.addEventListener('click', () => {
        showPanel(heroVisual2);
    });
});

//PASSING IKEJA INFO
const bookBtnIkeja = document.getElementById('bookBtn-ikeja');
bookBtnIkeja.addEventListener('click', () => {
    const fullName = document.getElementById('fullName-ikeja').value;
    const email = document.getElementById('email-ikeja').value;
    const phone = document.getElementById('phone-ikeja').value;
    const lot = document.getElementById('lot-ikeja').value;
    const duration = document.getElementById('duration-ikeja').value;
    const startTime = document.getElementById('startTime-ikeja').value;
    const startMeridiem = document.getElementById('startMeridiem-ikeja').value;
    const now = new Date();
    const timestamp = now.toLocaleTimeString() + " | " + now.toLocaleDateString() ;
    // const endTime = document.getElementById('endTime').value;
    // const endMeridiem = document.getElementById('endMeridiem').value;

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);
    // localStorage.setItem('endTime', endTime);
    // localStorage.setItem('endMeridiem', endMeridiem);

    //Save location to localStorage
    localStorage.setItem('location', 'Ikeja City Mall');

    // Go to confirmation page
    window.location.href = './confirmation.html';
});

//PASSING LEKKI INFO
const bookBtnLekki = document.getElementById('bookBtn-lekki');
bookBtnLekki.addEventListener('click', () => {
    const fullName = document.getElementById('fullName-lekki').value;
    const email = document.getElementById('email-lekki').value;
    const phone = document.getElementById('phone-lekki').value;
    const lot = document.getElementById('lot-lekki').value;
    const duration = document.getElementById('duration-lekki').value;
    const startTime = document.getElementById('startTime-lekki').value;
    const startMeridiem = document.getElementById('startMeridiem-lekki').value;
    const now = new Date();
    const timestamp = now.toLocaleTimeString() + " | " + now.toLocaleDateString() ;
    // const endTime = document.getElementById('endTime').value;
    // const endMeridiem = document.getElementById('endMeridiem').value;

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);
    // localStorage.setItem('endTime', endTime);
    // localStorage.setItem('endMeridiem', endMeridiem);

    //Save location to localStorage
    localStorage.setItem('location', 'Lekki Phase 1');

    // Go to confirmation page
    window.location.href = './confirmation.html';
});

//PASSING VICTORIA INFO
const bookBtnVictoria = document.getElementById('bookBtn-victoria');
bookBtnVictoria.addEventListener('click', () => {
    const fullName = document.getElementById('fullName-victoria').value;
    const email = document.getElementById('email-victoria').value;
    const phone = document.getElementById('phone-victoria').value;
    const lot = document.getElementById('lot-victoria').value;
    const duration = document.getElementById('duration-victoria').value;
    const startTime = document.getElementById('startTime-victoria').value;
    const startMeridiem = document.getElementById('startMeridiem-victoria').value;
    const now = new Date();
    const timestamp = now.toLocaleTimeString() + " | " + now.toLocaleDateString() ;
    // const endTime = document.getElementById('endTime').value;
    // const endMeridiem = document.getElementById('endMeridiem').value;

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);
    // localStorage.setItem('endTime', endTime);
    // localStorage.setItem('endMeridiem', endMeridiem);

    //Save location to localStorage
    localStorage.setItem('location', 'Victoria Island');

    // Go to confirmation page
    window.location.href = './confirmation.html';
});
//PASSING YABA INFO
const bookBtnYaba = document.getElementById('bookBtn-yaba');
bookBtnYaba.addEventListener('click', () => {
    const fullName = document.getElementById('fullName-yaba').value;
    const email = document.getElementById('email-yaba').value;
    const phone = document.getElementById('phone-yaba').value;
    const lot = document.getElementById('lot-yaba').value;
    const duration = document.getElementById('duration-yaba').value;
    const startTime = document.getElementById('startTime-yaba').value;
    const startMeridiem = document.getElementById('startMeridiem-yaba').value;
    const now = new Date();
    const timestamp = now.toLocaleTimeString() + " | " + now.toLocaleDateString() ;
    // const endTime = document.getElementById('endTime').value;
    // const endMeridiem = document.getElementById('endMeridiem').value;

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);
    // localStorage.setItem('endTime', endTime);
    // localStorage.setItem('endMeridiem', endMeridiem);

    //Save location to localStorage
    localStorage.setItem('location', 'Yaba Central');

    // Go to confirmation page
    window.location.href = './confirmation.html';
});