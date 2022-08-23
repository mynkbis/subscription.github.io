window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


const shoping = document.querySelector('btnClk');

const helloo = () => {
console.log("thank you for shoppping")
}


shoping.addEventListener("click",helloo())