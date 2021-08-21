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
});
memoryHigh.addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    getTotalPrice();
});

// storage events
storageLow.addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    getTotalPrice();
});
storageMedium.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    getTotalPrice();
});
storageHigh.addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    getTotalPrice();
});

// delivery events
deliveryLate.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    getTotalPrice();
})
deliveryFast.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    getTotalPrice();
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
