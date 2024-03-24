document.addEventListener('DOMContentLoaded', function() {
    const toggleForm = document.querySelectorAll('.toggleForm');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const inicioButton = document.querySelector('.inicio');
    const instrumentosButton = document.querySelector('.instrumentos');
    const contactoButton = document.querySelector('.contacto');
  
    toggleForm.forEach(function(element) {
      element.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.toggle('hidden');
        registerForm.classList.toggle('hidden');
      });
    });
  
    inicioButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Página de inicio');
    });
  
    instrumentosButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Página de instrumentos');
    });
  
    contactoButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Página de contacto');
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
       
        if (username === username && password === password) {
            window.location.href = "home.html"; 
        } else {
            alert("Credenciales incorrectas");
        }
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value.trim(); 
        const email = document.getElementById('email').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
    
      
        if (newUsername === '' || email === '' || newPassword === '') {
            alert('Por favor completa todos los campos.');
            return; 
        }
    
       
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor introduce un correo electrónico válido.');
            return; 
        }
    
        
    
        
        alert('Registro exitoso. ¡Bienvenido!');
        
    });
    
    });
    
    
    

    
