// script used for navbar start
document.getElementById('toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
    document.body.classList.toggle('blur');
});

document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const toggle = document.getElementById('toggle');
    if (!toggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        toggle.classList.remove('active');
        document.body.classList.remove('blur');
    }
});
// script used for navbar end