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

//IKEJA POPUP
const openIkeja = document.getElementById('openIkeja');
const ikejaMall = document.getElementById('ikejaMall');
const closeIkeja = document.getElementById('closeIkeja');

openIkeja.addEventListener('click', () => {
    ikejaMall.style.display = 'flex';
    mainPage.classList.add('blur');
});

closeIkeja.addEventListener('click', () => {
    ikejaMall.style.display = 'none';
    mainPage.classList.remove('blur');


});

//LEKKI POPUP
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

//VICTORIA ISLAND POPUP
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

//YABA POPUP
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

//DISPLAY LOCATIONS FROM PANEL CHIP
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

//SWITCHING LOCATIONS BETWEEN THE PANELS
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
    
    //Price
    const price = 500 
    //Calculate Price
    const total = price * Number(duration)
    // Save payment information
    localStorage.setItem('price', price);
    localStorage.setItem('total', total);

    // Valiating the form
    if(fullName === ""){
        alert("please enter your full name")
        return;
    }
    if(email ===""){
        alert("please enter your email")
        return;
    }
    if(phone ===""){
        alert("please enter your Phone No.")
        return;
    }
    if(lot === "Select a parking spot"){
        alert("Please select Parking spot")
        return;
    }
    if(duration === "Select duration"){
        alert("Please fill in the field")
        return;
    }
    if(startTime === "Arrival time"){
        alert("Please fill in thr field")
        return;
    }

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);
    

    //Save location to localStorage
    localStorage.setItem('location', 'Ikeja City Mall');
    

    // Go to confirmation page
    window.location.href = './Payment.html';
    
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

    //Price
    const price = 600 
    //Calculate Price
    const total = price * Number(duration)
    // Save payment information
    localStorage.setItem('price', price);
    localStorage.setItem('total', total);

        // Valiating the form
    if(fullName === ""){
        alert("please enter your full name")
        return;
    }
    if(email ===""){
        alert("please enter your email")
        return;
    }
    if(phone ===""){
        alert("please enter your Phone No.")
        return;
    }
    if(lot === "Select a parking spot"){
        alert("Please select Parking spot")
        return;
    }
    if(duration === "Select duration"){
        alert("Please fill in the field")
        return;
    }
    if(startTime === "Arrival time"){
        alert("Please fill in thr field")
        return;
    }

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);

    //Save location to localStorage
    localStorage.setItem('location', 'Lekki Phase 1');

    // Go to confirmation page
    window.location.href = './Payment.html';
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

    //Price
    const price = 800 
    //Calculate Price
    const total = price * Number(duration)
    // Save payment information
    localStorage.setItem('price', price);
    localStorage.setItem('total', total);

        // Valiating the form
    if(fullName === ""){
        alert("please enter your full name")
        return;
    }
    if(email ===""){
        alert("please enter your email")
        return;
    }
    if(phone ===""){
        alert("please enter your Phone No.")
        return;
    }
    if(lot === "Select a parking spot"){
        alert("Please select Parking spot")
        return;
    }
    if(duration === "Select duration"){
        alert("Please fill in the field")
        return;
    }
    if(startTime === "Arrival time"){
        alert("Please fill in thr field")
        return;
    }

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);

    //Save location to localStorage
    localStorage.setItem('location', 'Victoria Island');

    // Go to confirmation page
    window.location.href = './Payment.html';
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

    //Price
    const price = 400
    //Calculate Price
    const total = price * Number(duration)
    // Save payment information
    localStorage.setItem('price', price);
    localStorage.setItem('total', total);
    
    // Valiating the form
    if(fullName === ""){
        alert("please enter your full name")
        return;
    }
    if(email ===""){
        alert("please enter your email")
        return;
    }
    if(phone ===""){
        alert("please enter your Phone No.")
        return;
    }
    if(lot === "Select a parking spot"){
        alert("Please select Parking spot")
        return;
    }
    if(duration === "Select duration"){
        alert("Please fill in the field")
        return;
    }
    if(startTime === "Arrival time"){
        alert("Please fill in thr field")
        return;
    }

    // save Data to localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('lot', lot);
    localStorage.setItem('duration', duration);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('startMeridiem', startMeridiem);
    localStorage.setItem("timestamp", timestamp);

    //Save location to localStorage
    localStorage.setItem('location', 'Yaba Central');

    // Go to confirmation page
    window.location.href = './Payment.html';
});

//HAMBURGER FUNCTION
const hamburger = document.getElementById('hamburger');
const heroLinks = document.getElementById('hero-links');

hamburger.addEventListener('click', () =>{
    heroLinks.classList.toggle('active');
})

heroLinks.addEventListener('click', () => {
    heroLinks.classList.remove('active');
})

emailjs.init({
    publicKey: "2SOUWwWWHucF87xKD",
});

const form = document.getElementById("Support-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_pm1zm1a",
        "template_8spdae4",
        this
    )
    .then(() => {

        alert("Message sent successfully!");

        form.reset();

    })
    .catch(error => {

        console.error(error);

        alert("Failed to send message.");

    });

});
