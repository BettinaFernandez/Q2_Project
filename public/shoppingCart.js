var items = 0;
var total = 0;

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

var totalItems = document.getElementById('totalItems');
var viewCart = document.getElementById('view_cart');
var popover = document.getElementById('cartPopover');
var popoverContent = document.getElementById('popoverContent');
var closePopover = document.getElementById('closePopover');

function updateCart() {
    var cartText = "Your Cart: " + items + " item";
    
    if (items > 1) {
        cartText = cartText + "s";
    } else {
        cartText = cartText;
    }

    cartText = cartText + " - Php " + total.toFixed(2);
    totalItems.textContent = cartText;

    if (items == 0) {
        popoverContent.textContent = "Your cart is empty.";
    } else {
        popoverContent.textContent = "You have " + items + " item";
        if (items > 1) {
            popoverContent.textContent = popoverContent.textContent + "s";
        } else {
            popoverContent.textContent = popoverContent.textContent;
        }
        popoverContent.textContent = popoverContent.textContent + ", totaling Php " + total.toFixed(2);
    }
}

function addToCart(price) {
    items = items + 1;
    total = total + price;
    updateCart();
}

button1.onclick = function() { addToCart(120); };
button2.onclick = function() { addToCart(380); };
button3.onclick = function() { addToCart(250); };
button4.onclick = function() { addToCart(500); };

viewCart.onclick = function() {
    popover.style.display = "block";
};

closePopover.onclick = function() {
    popover.style.display = "none";
};
