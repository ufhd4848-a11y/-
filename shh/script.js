// Menu Data with real images
const menuItems = [
    {
        id: 1,
        name: 'Salmon Nigiri',
        description: 'Fresh Norwegian salmon on seasoned sushi rice with wasabi',
        price: 12,
        image: 'https://source.unsplash.com/600x400/?salmon,sushi&sig=1'   // 1️⃣
    },
    {
        id: 2,
        name: 'Bluefin Tuna Sashimi',
        description: 'Premium cuts of raw bluefin tuna, served with ponzu sauce',
        price: 18,
        image: 'https://source.unsplash.com/600x400/?tuna,sashimi&sig=2'   // 2️⃣
    },
    {
        id: 3,
        name: 'Dragon Roll',
        description: 'Shrimp tempura and cucumber topped with eel and avocado',
        price: 16,
        image: 'https://source.unsplash.com/600x400/?dragon,roll,sushi&sig=3' // 3️⃣
    },
    {
        id: 4,
        name: 'Spicy Tuna Roll',
        description: 'Spicy tuna mix with cucumber and sesame seeds',
        price: 14,
        image: 'https://source.unsplash.com/600x400/?spicy,tuna,roll&sig=4' // 4️⃣
    },
    {
        id: 5,
        name: 'Rainbow Roll',
        description: 'California roll topped with assorted fresh fish',
        price: 20,
        image: 'https://source.unsplash.com/600x400/?rainbow,roll,sushi&sig=5' // 5️⃣
    },
    {
        id: 6,
        name: 'Wagyu Beef Nigiri',
        description: 'Seared A5 Wagyu beef with truffle oil and microgreens',
        price: 24,
        image: 'https://source.unsplash.com/600x400/?wagyu,beef,sushi&sig=6' // 6️⃣
    },
    {
        id: 7,
        name: 'Tempura Udon',
        description: 'Thick wheat noodles in dashi broth with shrimp tempura',
        price: 15,
        image: 'https://source.unsplash.com/600x400/?tempura,udon&sig=7'   // 7️⃣
    },
    {
        id: 8,
        name: 'Matcha Cheesecake',
        description: 'Creamy green tea cheesecake with red bean paste',
        price: 10,
        image: 'https://source.unsplash.com/600x400/?matcha,cheesecake&sig=8' // 8️⃣
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('sushiwave_cart')) || [];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateCartUI();
    setupEventListeners();
});

// Render Menu
function renderMenu() {
    menuGrid.innerHTML = menuItems.map(item => `
        <article class="menu-card">
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-content">
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <div class="menu-footer">
                    <span class="menu-price">$${item.price}</span>
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        </article>
    `).join('');

    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });
    });
}

// Cart Functions
function addToCart(id) {
    const item = menuItems.find(item => item.id === id);
    const existingItem = cart.find(cartItem => cartItem.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function saveCart() {
    localStorage.setItem('sushiwave_cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');
    }

    // Update total
    cartTotal.textContent = `$${calculateTotal().toFixed(2)}`;
}

// Cart Sidebar Toggle
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Event Listeners
function setupEventListeners() {
    // Cart toggle
    cartToggle.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);

    // Mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Form validation
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Form Validation
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');
    
    let isValid = true;

    // Reset errors
    [name, email, message].forEach(field => {
        field.classList.remove('error');
        document.getElementById(`${field.id}Error`).classList.remove('show');
    });

    // Validate name
    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        isValid = false;
    }

    if (isValid) {
        // Show success message
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        successMessage.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

function showError(input, message) {
    input.classList.add('error');
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Close cart on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartSidebar();
    }
});
