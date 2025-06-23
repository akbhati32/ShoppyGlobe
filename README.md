# 🛒 ShoppyGlobe

**ShoppyGlobe** is a sleek and modern e-commerce web application built with **React** and powered by **Redux Toolkit** for state management. It offers users a smooth shopping experience with dynamic product listings, cart functionality, and a responsive UI.

## Link URL:
- [https://github.com/akbhati32/ShoppyGlobe.git](https://github.com/akbhati32/ShoppyGlobe.git)


---
## Home
![Home](https://github.com/user-attachments/assets/ed4f1e47-7e05-46be-865d-42d8f970f3ae)

## Shop
![Shop](https://github.com/user-attachments/assets/b37d4323-f5b1-4100-a7bb-a0d8451be285)

## Cart
![Cart](https://github.com/user-attachments/assets/d1ee34e0-2d66-47ae-85e0-5a54bf934646)

## Checkout
![Checkout](https://github.com/user-attachments/assets/5508fbf7-a3f2-4b2b-92d8-1ed9d30ec863)

---

## ✨ Features

- 🔍 Search and filter products
- 🛒 Add to cart with quantity update
- 📦 Checkout form interface
- 💬 Toast notifications
- 📂 Organized folder structure using reusable components and hooks
- ⚡ Clean, responsive UI with Tailwind CSS
- 🔄 State management using Redux
- 🧩 Modular components and reusable custom hooks

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router, React Icons, Toastify
- **Global State Management:**  Redux Toolkit
- **React Router DOM**  Client-side routing
- **API:**  DummyJSON
- **Tools:**  Vite

---

## 🧪 Usage

- Visit the homepage
- Browse through products on the Shop page
- Use the search bar or filter dropdown to refine results.
- Add items to your cart using the "Add to Cart" button
- Click the cart menu to view added products, choose quantity and proceed to checkout.
- Fill out the checkout form (dummy submission)
- Place an order

---

## 📂 Folder Structure

```sh

📦 ShoppyGlobe
📂 public                     # Folder to store images, fevicon
📂 src                        # Root Folder contains react components
┣ 📂 components               # Reusable UI components
┃ ┣ 📄 Cart.jsx               # Display cart items and total price
┃ ┣ 📄 CartItem.jsx           # Display individual cart item
┃ ┣ 📄 Checkout.jsx           # Checkout page for final purchase
┃ ┣ 📄 Footer.jsx             # Contains about, categories, quick & social links
┃ ┣ 📄 Header.jsx             # Includes logo, navigation & cart menus
┃ ┣ 📄 Home.jsx               # Homepage display hero and offers
┃ ┣ 📄 LoadingSpinner.jsx     # Shows loading animation
┃ ┣ 📄 NotFound.jsx           # Display 404 error
┃ ┣ 📄 ProductDetails.jsx     # Display detailed info about selected product
┃ ┣ 📄 ProductItem.jsx        # Individual product item in product grid
┃ ┣ 📄 ProductList.jsx        # Listed all products includes category & search bar
┣ 📂 hooks                    # Folder for custom hooks
┃ ┣ 📄 useFetch.js            # Custom hook to fetch all products
┃ ┣ 📄 useFetchDetails.js     # Custom hook to fetch individual product details
┣ 📂 redux                    # Redux store configuration
┃ ┣ 📄 cartSlice.js           # Redux slice for cart management
┃ ┣ 📄 shopStore.js           # Redux store setup & integration
┣ 📄 App.jsx                  # Default component
┣ 📄 index.css                # Tailwind configuration
┣ 📄 main.jsx                 # Root component
┣ 📄 index.html               # Index html page   
┣ 📄 package-lock.json        # Packages and sub-dependencies
┣ 📄 package.json             # Metadata and dependencies
┣ 📄 vite.config.js           # Vite configuration
┗ 📄 README.md                # Metadata about project

```

---

## 🚀 Installation & Setup

1.  Clone the repository

```sh
git clone https://github.com/akbhati32/ShoppyGlobe.git
cd ShoppyGlobe
```

2. Install dependencies

```sh
npm install
```

3. Start the development server

```sh
npm run dev
```

4. Open in browser

```sh
http://localhost:5173
```

---

## 💡 Future Improvements

- ✅ User authentication (login/register)
- ✅ More product categories & filters
- ✅ Payment gateway integration
- ✅ Admin panel for product management
- ✅ Order history tracking

---

## 📄 License
Feel free to use and modify it for your own learning or project needs.

## 🙋‍♂️ Author
**Aslam Bhati**

---
