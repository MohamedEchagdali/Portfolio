
document.addEventListener("DOMContentLoaded", () => {
const arrowFixed = document.getElementById("arrowUp");
const logo = document.getElementById("logoA");
const payContainer = document.getElementById("pay-method-container");
const descriptionBtn = document.getElementById("boton-descrip");
const headBtn = document.getElementById("headButton");

if (!arrowFixed || !payContainer || !descriptionBtn || !headBtn || !logo) {
    console.error("Element of DOM not find.");
    return;
}

//Scroll effect header
window.addEventListener("scroll", () =>{
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.id = "stickyId2"; 
    } else {
        header.id = "stickyId";
    }
})

function smoothUp(e){
    e.preventDefault();

    const mainLogo = document.getElementById("main")
    const headerOffset = mainLogo.offsetTop;

    window.scrollTo({
        top : headerOffset,
        behavior: "smooth"
        
    })
    console.log("sube arriba")
}

function showUpDonation(){
    if(payContainer.classList.contains('hidden')){
    payContainer.innerHTML = ` <div class="general-container">
    <h1>Donation Method</h1>
    <h4>Instant Donation</h4>
    <div class="radio-container">
        <div class="radio-container inside">
            <input type="radio" id="credit-card" name="donation-method" value="credit-card">
            <label for="credit-card">Credit Card</label>
            <img src="./Image/tarjeta.png" width="150px" height="30px">
        </div>

        <div class="radio-container inside">
            <input type="radio" id="paypal" name="donation-method" value="paypal">
            <label for="paypal">PayPal</label>
            <img src="./Image/paypal.png" >
        </div>

        <div class="radio-container inside">
            <input type="radio" id="google-pay" name="donation-method" value="google-pay">
            <label for="google-pay">Google Pay</label>
            <img src="./Image/googlepay.png" >
        </div>

        <div class="amount-donation">
            
            <label for="amount-donation-input"><img id="img-dollar" src="./Image/dollar-symbol_190165.png" alt="dollar" width="45px" height="45px"></label>
            <input type="number" id="amount-donation-input" placeholder="Amount to donate...">
        </div>
    
        <input type="submit" id="donate-button" value="Donate">
    </div>`

    payContainer.classList.remove('hidden');
    }else{
        payContainer.classList.add('hidden');
    }

    

const radioContainers = document.querySelectorAll('.radio-container .inside');
radioContainers.forEach(container => {
    container.addEventListener("click", () => {
        radioContainers.forEach(c => c.classList.remove('selected'));
        container.classList.add('selected');
        const radioInput = container.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;
        }
    });
});


}



headBtn.addEventListener("click", (e) => { 
    smoothUp(e);
    showUpDonation()

});

arrowFixed.addEventListener("click", smoothUp);
logo.addEventListener("click", smoothUp)

descriptionBtn.addEventListener("click", (e) => {
    smoothUp(e);
    setTimeout(() => {
        if(payContainer.classList.contains('hidden')){
            showUpDonation()
        }
    },700)
});


});





