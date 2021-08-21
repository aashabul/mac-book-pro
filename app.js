// best price
let bestPrice = document.getElementById('best-price');

// memory vairables
let memoryLow = document.getElementById('8gb');
let memoryHigh = document.getElementById('16gb');
let extraMemoryCost = document.getElementById('extra-memory-cost');

// storage variables
let storageLow = document.getElementById('low-storage');
let storageMedium = document.getElementById('medium-storage');
let storageHigh = document.getElementById('high-storage');
let extraStorageCost = document.getElementById('extra-storage-cost');

// delivery variables
let deliveryLate = document.getElementById('late-delivery');
let deliveryFast = document.getElementById('fast-delivery');
let deliveryCost = document.getElementById('delivery-charge')


// memory click events
memoryLow.addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    getTotalPrice();
    finalPrice.innerText = getTotalPrice();
});
memoryHigh.addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    getTotalPrice();
    finalPrice.innerText = getTotalPrice();
});

// storage events
storageLow.addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    getTotalPrice();
    finalPrice.innerText = getTotalPrice();
});
storageMedium.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    getTotalPrice();
    finalPrice.innerText = getTotalPrice();
});
storageHigh.addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    getTotalPrice();
    finalPrice.innerText = getTotalPrice();
});

// delivery events
deliveryLate.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    getTotalPrice();
    finalPrice.innerText = getTotalPrice();
})
deliveryFast.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    getTotalPrice();
    finalPrice.innerText = getTotalPrice();
});

// total cost 
let totalPrice = document.getElementById('total-price');
// calculate the total price
function getTotalPrice() {
    return totalPrice.innerText = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCost.innerText);
}

// final price
finalPrice = document.getElementById('final-price');
finalPrice.innerText = getTotalPrice();

// promo code
promoCode = document.getElementById('promo-code');
promoButton = document.getElementById('promo-button');

promoButton.addEventListener('click', function () {
    if (promoCode.value == 'stevekaku') {
        finalPrice.innerText = getTotalPrice() - getTotalPrice() * .20;
        promoCode.value = '';
        return finalPrice.innerText;
    }
    promoCode.value = '';
})
