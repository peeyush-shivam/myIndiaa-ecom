# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Clone the Repository

Clone the repository to your local machine:

### `git clone https://github.com/your-username/e-commerce-app.git`
### `cd e-commerce-app`

Components

1. ProductCard

Displays individual product details including image, title, price, rating, and stock.

Props:

	•	product: The product object containing details like images, title, price, rating, and stock.
	•	showDiscount: Boolean flag to show discount percentage.

2. ProductCarousel

A carousel component for displaying product images with optional controls and autoplay.

Props:

	•	images: Array of product image URLs.
	•	controls: Boolean to show left/right scroll controls.
	•	autoplay: Boolean to enable automatic image sliding.
	•	fit: The fit mode for images (e.g., cover, contain).
	•	product: The product object for handling actions.
	•	discount: Discount percentage for the product.
	•	showDiscount: Boolean flag to show discount percentage.

3. CategoryCard

Displays a category with an icon and title, and navigates to the category’s product page on click.

Props:

	•	category: The category object containing name and icon.

4. ProductCategories

A horizontal scrollable list of product categories with navigation arrows.

Props:

	•	tag: Tag line for the category section.
	•	title: Title for the category section.

5. NewArrival

Showcases new products with images and descriptions.

6. FlashSale

Displays a slider for flash sale products with discount details and a countdown timer.

7. BestSelling

Shows best-selling products in a slider format.

API Endpoints

Fetch Flash Sale Products

	•	URL: https://dummyjson.com/products?sortBy=discountPercentage&order=desc&limit=15
	•	Method: GET

Fetch Best Selling Products

	•	URL: https://dummyjson.com/products?sortBy=rating&order=desc&limit=15
	•	Method: GET

Fetch Product Categories

	•	URL: https://dummyjson.com/products/categories
	•	Method: GET

Contributing

We welcome contributions to improve this project! To contribute:

	1.	Fork the repository and clone it to your local machine.
	2.	Create a new branch for your changes:


	5.	Open a Pull Request (PR) on GitHub with a clear description of the changes.

Code of Conduct

Please follow our Code of Conduct to ensure a positive and inclusive environment.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements

	•	React: A JavaScript library for building user interfaces.
	•	Tailwind CSS: A utility-first CSS framework for styling.
	•	MUI: A React component library for building modern UIs.
	•	DummyJSON: A free API for dummy data used in development and testing.
	•	Lucide Icons: A collection of open-source icons for modern web development.

Contact

For any questions or feedback, please reach out to:

	•	Your Name: your-email@example.com
	•	GitHub: https://github.com/your-username
