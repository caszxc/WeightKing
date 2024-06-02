document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.register-box button')) {
        document.querySelector('.register-box button').addEventListener('click', registerUser);
    }
    
    if (document.querySelector('.login-box button')) {
        document.querySelector('.login-box button').addEventListener('click', loginUser);
    }
    
    if (document.querySelector('.profile-container form')) {
        document.querySelector('.profile-container form').addEventListener('submit', updateProfile);
    }

    if (document.querySelector('.btn-logout')) {
        document.querySelector('.btn-logout').addEventListener('click', logoutUser);
    }

    // Check login status and adjust UI accordingly
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        hideLoginRegisterButtons();
    } else {
        disableProfilePage();
    }
});
    
function hideLoginRegisterButtons() {
    const btnContainer = document.querySelector('.btn-container');
    if (btnContainer) btnContainer.style.display = 'none';

    const btnBurgerLogin = document.querySelector('.burger-login')
    if (btnBurgerLogin) btnBurgerLogin.style.display = 'none';

    const btnBurgerRegister = document.querySelector('.burger-register')
    if (btnBurgerRegister) btnBurgerRegister.style.display = 'none';

    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.justifyContent = 'flex-end'; 
}

function disableProfilePage() {
    // Disable all form inputs
    const inputs = document.querySelectorAll('.profile-container form input');
    inputs.forEach(input => input.disabled = true);

    // Disable the select image button
    const selectImgBtn = document.querySelector('.select-img-btn');
    if (selectImgBtn) selectImgBtn.disabled = true;

    // Disable sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
    sidebarLinks.forEach(link => link.style.pointerEvents = 'none');
    
    // Disable the logout button
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) logoutBtn.disabled = true;
}

function registerUser(event) {
    event.preventDefault();
    
    const name = document.querySelector('.register-box input[placeholder="Name"]').value;
    const address = document.querySelector('.register-box input[placeholder="Address"]').value;
    const phone = document.querySelector('.register-box input[placeholder="Phone Number"]').value;
    const email = document.querySelector('.register-box input[placeholder="Email"]').value;
    const password = document.querySelector('.register-box input[placeholder="Password"]').value;
    const confirmPassword = document.querySelector('.register-box input[placeholder="Confirm Password"]').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const user = { name, address, phone, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    window.location.href = 'login.html';
}

function loginUser(event) {
    event.preventDefault();
    
    const email = document.querySelector('.login-box input[placeholder="Email"]').value;
    const password = document.querySelector('.login-box input[placeholder="Password"]').value;
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.email === email && user.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
}

function updateProfile(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    loggedInUser = { ...loggedInUser, name, email, phone, address };
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    alert('Profile updated successfully!');
}

function loadProfile() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.querySelector('#name').value = loggedInUser.name;
        document.querySelector('#email').value = loggedInUser.email;
        document.querySelector('#phone').value = loggedInUser.phone;
        document.querySelector('#address').value = loggedInUser.address;
    }
}

function logoutUser() {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
}

if (document.body.contains(document.querySelector('.profile-container form'))) {
    window.onload = loadProfile;
}
