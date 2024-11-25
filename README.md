# Cypress E2E Tests for SolShop

## Overview

This project automates the key user flows for [SolShop](https://maksimtsepelevits22.thkit.ee/SolShop/index.php) using **Cypress**. The test suite covers critical functionalities, such as registration, login, adding products to the cart, and completing an order.

---

## Test Structure

The test file is divided into logical blocks to ensure comprehensive coverage of the user journey.

### 1. **Registration**
- Navigate to the registration page.
- Fill out the registration form with the following fields:
  - Name
  - Email
  - Password
- Check for successful registration (visibility of the login form).

![Registration Process](https://github.com/user-attachments/assets/5c384611-9a9d-4afd-bab7-80e7a443da45)

---

### 2. **Logging In to Your Account**
- Navigate to the login page.
- Log in using the credentials created during registration.
- Check for successful login (visibility of the shopping cart).

![Login Process](https://github.com/user-attachments/assets/8290aa11-c958-4318-bf72-dae3936d53f4)

---

### 3. **Adding Products to the Cart**
- Select two random products from the product list.
- Click the "Add to cart" button for each selected product.
- Check that the cart amount updates accordingly.

![Adding Products to Cart](https://github.com/user-attachments/assets/ad0c42bb-3869-4176-9cb5-018778f11d0d)

---

### 4. **Checking Out an Order**
- Navigate to the checkout page.
- Fill in the payment details:
  - Card number
  - CVV code
  - Cardholder name
  - Expiration date (month and year)
- Enter the delivery address.
- Confirm the order.
- Check for successful order completion (visibility of the confirmation message).

![Order Checkout](https://github.com/user-attachments/assets/92ae4e81-75b4-4121-bdfd-a47ec81973d8)


## Test Matrix


| **Case**          | **Date**       | **Comment**                                                                                  | **PASS/FAIL** |
|--------------------|----------------|----------------------------------------------------------------------------------------------|---------------|
| Register           | 11.11.2024    | Worked without any issues                                                                   | PASS          |
| Login              | 11.11.2024    | Worked without any issues                                                                   | PASS          |
| Add to cart        | 15.11.2024    | Worked on test but had issue with database context before                                    | PASS          |
| Purchase           | 17.11.2024    | Checkout couldn't be done because of the card data fill and address fill issues on the server| FAIL          |
| Purchase           | 18.11.2024    | After debugging and refactoring the code logic everything worked                            | PASS          |

