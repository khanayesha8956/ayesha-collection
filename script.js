// ========================================
// WHATSAPP NUMBER
// ========================================

// IMPORTANT:
// Replace this with your real WhatsApp number.
//
// India example:
// 919876543210
//
// Do NOT put + or spaces.

const whatsappNumber = "91123456789";


// ========================================
// OPEN WHATSAPP
// ========================================

function openWhatsApp() {

    const message =
        "Hello Ayesha Collection! I would like to know more about your kids clothing collection.";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}


// ========================================
// ORDER PRODUCT
// ========================================

function orderProduct(productName, price) {

    const message =
        "Hello Ayesha Collection!%0A%0A" +
        "I want to order:%0A" +
        productName +
        "%0A" +
        "Price: ₹" +
        price +
        "%0A%0A" +
        "Please share available sizes and colours.";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(
            "Hello Ayesha Collection!\n\n" +
            "I want to order:\n" +
            productName +
            "\nPrice: ₹" +
            price +
            "\n\nPlease share available sizes and colours."
        );

    window.open(url, "_blank");
}


// ========================================
// MOBILE MENU
// ========================================

function toggleMenu() {

    const nav = document.querySelector(".header nav");

    nav.classList.toggle("show");
}


// ========================================
// CLOSE MOBILE MENU AFTER CLICK
// ========================================

const navLinks = document.querySelectorAll(".header nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".header nav")
            .classList.remove("show");

    });

});