# ShopNexus E-Commerce Application

## Overview

Welcome to ShopNexus! This is a modern e-commerce platform built with React, designed to provide a smooth and engaging shopping experience. The application features product listings, category browsing, a carousel for featured products, and more. This project demonstrates advanced frontend development skills and incorporates best practices for building scalable web applications.


## Table of Contents

- Features
- Installation
- Usage
- Components
- API Endpoints
- Contributing
- Acknowledgements
- Contact


## Features
- Product Listings: View products with images, descriptions, ratings, and prices.
- Product Carousel: Showcases featured products with autoplay and manual controls.
- Category Browsing: Explore products by different categories.
- Flash Sales and Best Sellers: Highlight special deals and top-selling products.
- Add to Cart and Wishlist: Manage cart items and save favorite products.
- Responsive Design: Adapts to various screen sizes for a seamless experience on both desktop and mobile devices.
- Service Workers: Caches images for offline access to improve performance.

## Installation

To get started with the E-Commerce Application, follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have Node.js and npm installed. You can check if they are installed by running:
``` 
node -v
npm -v
```

### Clone the Repository

Clone the repository to your local machine:

``` 
git clone https://github.com/your-username/e-commerce-app.git
cd e-commerce-app
```
### Install Dependencies

Install the project dependencies using npm:

``` 
npm install
```
### Usage

To start the development server and see the application in action, run:

``` 
npm start
```

This command will start the React development server and open the application in your default web browser at http://localhost:3000.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the build folder.
- `npm test`: Runs the test suite.

## Components

### 1. ProductCard

Displays individual product details including image, title, price, rating, and stock.

Props:

	•	product: The product object containing details like images, title, price, rating, and stock.
	•	showDiscount: Boolean flag to show discount percentage.

### 2. ProductCarousel

A carousel component for displaying product images with optional controls and autoplay.

Props:

	•	images: Array of product image URLs.
	•	controls: Boolean to show left/right scroll controls.
	•	autoplay: Boolean to enable automatic image sliding.
	•	fit: The fit mode for images (e.g., cover, contain).
	•	product: The product object for handling actions.
	•	discount: Discount percentage for the product.
	•	showDiscount: Boolean flag to show discount percentage.

### 3. CategoryCard

Displays a category with an icon and title, and navigates to the category’s product page on click.

Props:

	•	category: The category object containing name and icon.

###  4. ProductCategories

A horizontal scrollable list of product categories with navigation arrows.

Props:

	•	tag: Tag line for the category section.
	•	title: Title for the category section.

### 5. NewArrival

Showcases new products with images and descriptions.

### 6. FlashSale

Displays a slider for flash sale products with discount details and a countdown timer.

### 7. BestSelling

Shows best-selling products in a slider format.

## API Endpoints

- Fetch Flash Sale Products
URL: https://dummyjson.com/products?sortBy=discountPercentage&order=desc&limit=15
Method: GET

- Fetch Best Selling Products
URL: https://dummyjson.com/products?sortBy=rating&order=desc&limit=15
Method: GET

- Fetch Product Categories
URL: https://dummyjson.com/products/categories
Method: GET

## Acknowledgements

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- MUI: A React component library for building modern UIs.
- DummyJSON: A free API for dummy data used in development and testing.
- Lucide Icons: A collection of open-source icons for modern web development.

## Contact

For any questions or feedback, please reach out to:
GitHub: https://github.com/peeyush_shivam
