
# Introduction

FlipDeal is an eCommerce company that has recently started dealing with multiple fitness products. Currently, they are starting small with 3 items in their cart:

- **Shoes**  
- **Bag**  
- **Jacket**

They have also launched a “Prime Membership” program where, if you are a member on their platform, you get good discounts on the products.

Now, they already have built the frontend of the application showing the cart page with product details, images, and other options. But now they want a backend developer who can create the APIs for various cart actions and work with the frontend.

# Objective

FlipDeal has given you the project to create the APIs on the backend for their “Cart Page”.

Before declaring the API Endpoints, make sure you declare the following variables and also import **CORS** into the code.

# Express Server Integration with Frontend

This repository contains backend APIs developed using Express.js and deployed on Vercel. These APIs are integrated with a frontend hosted [here](https://bd1-1.vercel.app/).

## Features
- Logger to display API responses in real-time.
- Functionality to add items to the cart and proceed with a membership selection.




## Setup and Integration Guide

### 1. **Deployed Backend**
The backend APIs which I have implemented are live and can be accessed at:  
**[https://bd-1-assignment-six.vercel.app/](https://bd-1-assignment-six.vercel.app/)**

### 2. **Frontend Integration**
Visit the frontend application:  
**[https://bd1-1.vercel.app/](https://bd1-1.vercel.app/)**  

#### Steps:
1. Upon opening the frontend, a dialog box will prompt you to enter your server URL.  
   Enter the backend url from above click **Save Changes**.

2. You will be redirected to the **Cart Page** displaying 3 items.

3. Add items to the cart by clicking **Add to Cart**.  
**Note**:  
- You must add all 3 items to enable the **Select Membership** button.  
- Adding the same item more than once is not allowed.

4. View API responses for your actions in the **Logger** section on the bottom right.

---

## User Actions and Workflow

### 1. Add Products to the Cart
- Add all 3 products to the cart.

### 2. Check Membership Status
- If the membership status is **Standard**, no discount is applied.  
- If the membership status is **Prime**, a 10% discount is applied to the total cart amount.

### 3. Select Delivery Location
Choose one of the following cities for delivery:  
- Mumbai  
- Delhi  
- Chennai  
- Kolkata  

- The **Shipping Cost** is calculated based on the distance to the selected city.

### 4. Select Shipping Method
Choose a shipping method:  
- **Standard:** Delivery time is calculated as 1 day per 50 km.  
- **Express:** Delivery time is calculated as 1 day per 100 km.

### 5. View Estimated Delivery Time and Total Payable Amount
The total payable amount includes:  
- **Total Cart Amount**  
- **Membership Discount** (if applicable)  
- **Shipping Cost** (based on location)  
- **Estimated Delivery Time**  
- **Tax Rate**  
- **Loyalty Points**  

### 6. Reset and Test Again
- To test with different factors, click the **Reset Form** button and repeat the process.



---

## API Logs
All user actions are logged in real-time and visible in the frontend's logger.

---


