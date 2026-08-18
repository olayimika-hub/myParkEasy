document.getElementById("confirmLocation").textContent =
localStorage.getItem("location");

document.getElementById("confirmName").textContent =
localStorage.getItem("fullName");

document.getElementById("confirmEmail").textContent =
localStorage.getItem("email");

document.getElementById("confirmPhone").textContent =
localStorage.getItem("phone");

document.getElementById("confirmLot").textContent =
localStorage.getItem("lot");

document.getElementById("confirmDuration").textContent =
localStorage.getItem("duration");

document.getElementById("confirmStartTime").textContent =
localStorage.getItem("startTime");

document.getElementById("confirmStartMeridiem").textContent =
localStorage.getItem("startMeridiem");

document.getElementById("confirmTimestamp").textContent =
localStorage.getItem("timestamp");

const downloadReceipt = document.getElementById('downloadReceipt');

downloadReceipt.addEventListener('click', () => {
    window.print();
});