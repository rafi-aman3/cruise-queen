// Ticket Change Handler
function handleTicketChange (className, isIncrease) {
    var classCount = classInput(className);

    switch (isIncrease) {
        case true:
            classCount++;
            break;
        case false:
            classCount--;
            break;    
    };

    if (classCount < 0) {
        classCount = 0;
        alert("Tickets can not be Negative.")
        document.getElementById(className + "ClassCount").value = classCount;
    };

    document.getElementById(className + "ClassCount").value = classCount;
    calculateTicketPrice();
};

// Ticket Class Input
function classInput(className) {
    var classCount = document.getElementById(className + "ClassCount").value;
    classCount = parseFloat(classCount);
    return classCount;
};

// Get Ticket Price 
function classPrice(className) {
    var classPrice = document.getElementById(className +"ClassPrice").innerText;
    classPrice = parseFloat(classPrice);
    return classPrice;
};

// Calculate Ticket Price and Return Them
function calculateTicketPrice() {
    var firstClassCount = classInput("first");
    var economyClassCount = classInput("economy");
    var firstClassPrice = classPrice("first");
    var economyClassPrice = classPrice("economy");
    var totalFirstClassPrice = firstClassPrice * firstClassCount;
    var totalEconomyClassPrice = economyClassPrice * economyClassCount;
    var subtotalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;
    document.getElementById("subtotalPrice").innerText = subtotalTicketPrice;
    var vatPrice = subtotalTicketPrice * 0.10;
    vatPrice = Math.round(vatPrice);
    document.getElementById("vat").innerText = vatPrice;
    var totalTicketPrice = 0;
    totalTicketPrice = vatPrice + subtotalTicketPrice; 
    document.getElementById("totalPrice").innerText = totalTicketPrice;
    document.getElementById("confirmation-first").innerText = firstClassCount;
    document.getElementById("confirmation-economy").innerText = economyClassCount;
    document.getElementById("confirmation-subtotal").innerText = subtotalTicketPrice;
    document.getElementById("confirmation-vat").innerText = vatPrice;
    document.getElementById("confirmation-total").innerText = totalTicketPrice;
}; 

// Handle Booking Button
function handleBookingBtn () {
    const bookingForm = document.getElementById("booking-form");
    bookingForm.style.display = "none";
    const confirmationArea = document.getElementById("confirmation");
    confirmationArea.style.display = "block";
};



