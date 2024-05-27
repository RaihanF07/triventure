document.addEventListener('DOMContentLoaded', function () {
    // Generate a random reservation number (you may use your own logic)
    var reservationNumber = generateReservationNumber();

    // Display the reservation number on the page
    document.getElementById('reservation-number').innerText = reservationNumber;
});

function generateReservationNumber() {
    // Replace this with your own logic to generate a unique reservation number
    // For simplicity, this example uses a random number
    return Math.floor(Math.random() * 1000000);
}