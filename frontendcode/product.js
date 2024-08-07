document.addEventListener('DOMContentLoaded', function() {
    // Check the URL path on page load
    if (window.location.pathname === '/product') {
        fetch('http://localhost:5050/products', {
            method: 'GET',
            headers: {
                'x-auth-token': localStorage.getItem('token') // Assuming the token is stored in localStorage
            }
        })
        .then(response => {
            if (response.status === 401) {
                window.location.href = 'http://localhost:5050/users/register';
            } else {
                window.location.href = 'http://localhost:5050/products';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            window.location.href = 'http://localhost:5050/users/register';
        });
    }
});

document.getElementById('products-link').addEventListener('click', function(event) {
    event.preventDefault();
    fetch('http://localhost:5050/products', {
        method: 'GET',
        headers: {
            'x-auth-token': localStorage.getItem('token') // Assuming the token is stored in localStorage
        }
    })
    .then(response => {
        if (response.status === 401) {
            window.location.href = 'http://localhost:5050/users/register';
        } else {
            window.location.href = 'http://localhost:5050/products';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        window.location.href = 'http://localhost:5050/users/register';
    });
});

document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>${description}</p>
        <p>Price: ${price}</p>
        <button class="buttonen">Delete</button>
    `;

    const container = document.getElementById('product-container');
    container.appendChild(productCard);

    productCard.querySelector('.buttonen').addEventListener('click', function() {
        productCard.remove();
    });

    document.getElementById('product-form').reset();
});

function logout() {
    localStorage.removeItem('token');
    window.location.href = '/register.html';
}


        
