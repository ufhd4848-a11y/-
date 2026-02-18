:root {
    --primary-color: #e74c3c;
    --secondary-color: #2c3e50;
    --accent-color: #f39c12;
    --text-light: #ecf0f1;
    --text-dark: #2c3e50;
    --bg-light: #f8f9fa;
    --bg-dark: #1a1a1a;
    --white: #ffffff;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 10px 20px rgba(0, 0, 0, 0.15);
    --transition: all 0.3s ease;
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --border-radius: 8px;
    --max-width: 1200px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--bg-light);
    overflow-x: hidden;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-sm);
}

/* Header Styles */
.sticky-header {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
    z-index: 1000;
    padding: var(--spacing-sm) 0;
}

.nav-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-sm);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: var(--spacing-md);
}

.nav-links a {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.cart-toggle {
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    padding: var(--spacing-xs);
    font-size: 1.2rem;
}

.cart-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--primary-color);
    color: var(--white);
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}

.cta-button {
    background: var(--primary-color);
    color: var(--white);
    border: none;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
}

.cta-button:hover {
    background: #c0392b;
    transform: translateY(-2px);
}

.hamburger {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    gap: 4px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--text-dark);
    transition: var(--transition);
    border-radius: 3px;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1920&q=80') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    padding: var(--spacing-lg) var(--spacing-sm);
}

.hero-content {
    max-width: 800px;
    animation: fadeInUp 1s ease;
}

.hero h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: var(--spacing-sm);
    line-height: 1.2;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-md);
    opacity: 0.9;
}

.btn-group {
    display: flex;
    gap: var(--spacing-sm);
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid transparent;
    cursor: pointer;
    display: inline-block;
}

.btn-primary {
    background: var(--primary-color);
    color: var(--white);
    border-color: var(--primary-color);
}

.btn-primary:hover {
    background: transparent;
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background: transparent;
    color: var(--white);
    border-color: var(--white);
}

.btn-secondary:hover {
    background: var(--white);
    color: var(--text-dark);
    transform: translateY(-3px);
}

/* Menu Section */
.menu-section {
    padding: var(--spacing-lg) 0;
    background: var(--bg-light);
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: var(--spacing-md);
    color: var(--secondary-color);
    position: relative;
    padding-bottom: var(--spacing-sm);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
}

.menu-card {
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
}

.menu-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.menu-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.menu-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.menu-card:hover .menu-image img {
    transform: scale(1.05);
}

.menu-content {
    padding: var(--spacing-sm);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.menu-title {
    font-size: 1.25rem;
    margin-bottom: var(--spacing-xs);
    color: var(--secondary-color);
}

.menu-description {
    color: #666;
    margin-bottom: var(--spacing-sm);
    flex-grow: 1;
    font-size: 0.95rem;
}

.menu-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.menu-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary-color);
}

.add-to-cart {
    background: var(--secondary-color);
    color: var(--white);
    border: none;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
}

.add-to-cart:hover {
    background: var(--primary-color);
    transform: scale(1.05);
}

/* About Section */
.about-section {
    padding: var(--spacing-lg) 0;
    background: var(--secondary-color);
    color: var(--text-light);
}

.about-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    align-items: center;
}

.about-content h2 {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-md);
    color: var(--white);
}

.about-content p {
    margin-bottom: var(--spacing-sm);
    opacity: 0.9;
    font-size: 1.1rem;
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
}

.stat-item {
    text-align: center;
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius);
    backdrop-filter: blur(10px);
    transition: var(--transition);
}

.stat-item:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: var(--spacing-xs);
}

.stat-label {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
}

/* Contact Section */
.contact-section {
    padding: var(--spacing-lg) 0;
    background: var(--bg-light);
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: var(--spacing-xs);
    font-weight: 600;
    color: var(--secondary-color);
}

.form-group input,
.form-group textarea {
    padding: var(--spacing-sm);
    border: 2px solid #ddd;
    border-radius: var(--border-radius);
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.error-message {
    color: var(--primary-color);
    font-size: 0.875rem;
    margin-top: 4px;
    display: none;
}

.error-message.show {
    display: block;
}

.form-group input.error,
.form-group textarea.error {
    border-color: var(--primary-color);
}

.success-message {
    background: #27ae60;
    color: var(--white);
    padding: var(--spacing-sm);
    border-radius: var(--border-radius);
    text-align: center;
    display: none;
    margin-top: var(--spacing-sm);
}

.success-message.show {
    display: block;
    animation: slideDown 0.3s ease;
}

/* Cart Sidebar */
.cart-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 400px;
    height: 100vh;
    background: var(--white);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
    z-index: 2000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
}

.cart-sidebar.open {
    transform: translateX(0);
}

.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1999;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
}

.cart-overlay.show {
    opacity: 1;
    visibility: visible;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md);
    border-bottom: 1px solid #eee;
    background: var(--secondary-color);
    color: var(--white);
}

.close-cart {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--white);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.close-cart:hover {
    transform: rotate(90deg);
}

.cart-items {
    flex-grow: 1;
    overflow-y: auto;
    padding: var(--spacing-sm);
}

.cart-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    border-bottom: 1px solid #eee;
    animation: slideIn 0.3s ease;
}

.cart-item-image {
    width: 60px;
    height: 60px;
    border-radius: var(--border-radius);
    object-fit: cover;
    flex-shrink: 0;
}

.cart-item-details {
    flex-grow: 1;
}

.cart-item-title {
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--secondary-color);
}

.cart-item-price {
    color: var(--primary-color);
    font-weight: 600;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    margin-top: var(--spacing-xs);
}

.qty-btn {
    width: 25px;
    height: 25px;
    border: 1px solid #ddd;
    background: var(--white);
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.qty-btn:hover {
    background: var(--bg-light);
    border-color: var(--primary-color);
}

.remove-item {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    font-size: 1.2rem;
    padding: var(--spacing-xs);
    transition: var(--transition);
}

.remove-item:hover {
    transform: scale(1.2);
}

.empty-cart {
    text-align: center;
    padding: var(--spacing-lg);
    color: #666;
}

.cart-footer {
    padding: var(--spacing-md);
    border-top: 1px solid #eee;
    background: var(--bg-light);
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--secondary-color);
}

.checkout-btn {
    width: 100%;
}

/* Footer */
.footer {
    background: var(--secondary-color);
    color: var(--text-light);
    text-align: center;
    padding: var(--spacing-md);
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        background: var(--white);
        flex-direction: column;
        padding: var(--spacing-md);
        gap: var(--spacing-sm);
        transform: translateY(-150%);
        transition: var(--transition);
        box-shadow: var(--shadow);
    }

    .nav-links.active {
        transform: translateY(0);
    }

    .hamburger {
        display: flex;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .about-container {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }

    .cart-sidebar {
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 2rem;
    }

    .btn-group {
        flex-direction: column;
        width: 100%;
    }

    .btn {
        width: 100%;
        text-align: center;
    }

    .about-stats {
        grid-template-columns: 1fr;
    }
}

/* Grouped menu accordion */
.menu-group-card .menu-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
}

.group-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 0;
}

.group-arrow {
    color: var(--primary-color);
    transition: transform 0.2s ease;
}

.group-toggle[aria-expanded='true'] .group-arrow {
    transform: rotate(180deg);
}

.group-variants {
    border-top: 1px solid #ececec;
    margin-top: var(--spacing-xs);
    padding-top: var(--spacing-xs);
}

.variant-item {
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-sm);
    padding: 0.4rem 0;
}

.variant-name {
    font-weight: 600;
    color: var(--secondary-color);
}

.variant-description {
    font-size: 0.85rem;
    color: #777;
}

.variant-price {
    font-weight: 700;
    color: var(--primary-color);
    white-space: nowrap;
}

/* Improved menu layout */
.menu-category-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
}

.menu-category-block {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
}

.menu-category-title {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: var(--secondary-color);
    border-left: 4px solid var(--primary-color);
    padding-left: 0.75rem;
}

.menu-category-block .menu-grid {
    margin-top: 0;
}

.menu-card {
    border: 1px solid #f0f0f0;
}

.menu-card .menu-image {
    border-bottom: 1px solid #f2f2f2;
}

.variants-count {
    font-size: 0.8rem;
    color: #6f6f6f;
    background: #f6f6f6;
    padding: 0.2rem 0.45rem;
    border-radius: 999px;
}

.group-variants {
    background: #fafafa;
    border-radius: 10px;
    padding: 0.5rem 0.8rem;
}

.variant-item + .variant-item {
    border-top: 1px dashed #e3e3e3;
}

@media (max-width: 768px) {
    .menu-category-block {
        padding: 1rem;
    }

    .menu-category-title {
        font-size: 1.2rem;
    }
}
