# Kali App Ecommerce Store

Description
This project is a full-stack ecommerce store built using Next.js. It includes features such as a product listing page, single product pages, a shopping cart, checkout functionality, and a thank you page. The application is designed to provide a seamless shopping experience while incorporating security measures and testing for robust functionality.

Technologies Used
Next.js
React
TypeScript
PostgreSQL (for database)
Jest (for testing)
Fly.io (for deployment)
Screenshots
Products Page
Single Product Page

Setup Instructions
Clone the repository.
Navigate to the project directory.
Install dependencies using npm install.
Set up PostgreSQL database and configure connection in the .env file.
Run migrations with npm run migrate.
Start the development server with npm run dev.
Deployment Instructions
Requirements
Design and develop an ecommerce store using Next.js.
Products Page
Lists all products.
Minimum of 4 different products.
Relevant h1 element.
Each product in an anchor element with data-test-id="product-<product id>".
Header link to the products page with data-test-id="products-link".
Single Product Page
Quantity input with data-test-id="product-quantity".
Add to cart button with data-test-id="product-add-to-cart".
Clicking the button adds quantity to the cart.
Quantity starts at 1.
Negative quantity not allowed.
Cart Page
List of products with data-test-id="cart-product-<product id>".
Quantity, subtotal, and remove button within each product element.
Total price with data-test-id="cart-total".
Checkout button with data-test-id="cart-checkout".
Negative quantity not allowed.
Clicking checkout navigates to the checkout page.
Checkout Page
Total display and fields for shipping and payment information.
Fields with data-test-id attributes.
Form prevents submission with empty fields.
Confirm Order button with data-test-id="checkout-confirm-order".
Clicking confirms order, empties cart, and navigates to the Thank You page.
Thank You Page
Title includes "Thank you for your order".
Header with link to Cart and item count.
Header on all pages using the HTML <header> element.
Cart link with data-test-id="cart-link".
Count in an element with data-test-id="cart-count".
Cookies
Use a cookie called cart to store user's cart information.
Prevent unauthorized changes to cart data.
Database
Create a PostgreSQL database and table(s).
Connect to and query information from the database.
TypeScript / JSDoc
Use TypeScript for at least 2 pages with props and 4 other non-migration, non-database files.
Document React props with JSDoc.
Tests
Write tests for E2E functionality (add to cart, change quantity, remove from cart; checkout flow, payment page, thank you page).
Write unit tests for functions related to product data, cart, and sum.
GitHub Actions
Set up GitHub Actions to automatically test the code.
SEO
Add titles and meta descriptions to all pages.
Deploying
Deploy to Fly.io using the provided cheatsheet.
Follow these instructions to ensure a smooth setup and deployment process for the ecommerce store.
