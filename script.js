// JavaScript for interactive functionality

function showAlert() {
    alert("Welcome to the Interactive Website!");
}

document.getElementById('userForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted Successfully!");
});
