# RetMan

Project Outline: Implementing a Searchable Product for retail stores

Objective:
The project aims to create a functional website enabling users to search for products available in specific stores. 
It involves two primary user roles: customers and shopkeepers.

Design and Interface Guidelines:
Pages: Landing/Home, Shops, Category, Product, and Admin.
Design Aesthetic: Simple, minimal, and elegant.
Color Palette: Aesthetic or monochromatic tones.
Font Preferences: Montserrat (primary), Nunito, or Calibri (secondary).
Authentication: Unified login/signup modal for both customers and shopkeepers.
Security Measures: Hashed passwords (bcrypt), session closure on browser close, and restricted access via defined routes.
Page-specific Details:

Main Page:
Navbar with logo and login/register options.
Project details and creator information in the body.
Prominent rectangular divs acting as buttons for "Search by Category," "Search by Product," and "Register Your Shop."
Shop by Category Page:

[Further details required]
Shop by Product Page:

[Further details required]
Shopkeepers Page:

[Further details required]
Functionalities:

Database structuring and handling of server logic for query execution.
Implementation details on how data is stored, retrieved, and handled by the server.
Detailed explanation of database schema and query execution impact.

Note on User Access:
Customer and shopkeeper authentication differentiation during login.
Shopkeepers cannot function as customers.
Technical Considerations:

Hashing passwords using bcrypt for secure storage.
Session management to close upon browser closure.
Prevention of unauthorized access to Admin pages via defined routes.
Emphasis:
Highlighting the backend functionalities and database handling, explaining query execution and data storage within the project.

This structure provides a comprehensive overview of the project's objectives, design guidelines, 
page-specific details, security measures, and technical emphasis on database handling and server logic execution.


# Steps to Start and Run the Site using VSCode and Terminal:

Clone the repository.
Navigate to client and server directories separately in the terminal.
Install dependencies using npm install.
Start the client-side using npm start.
Run the server using node server.js.

# Implementation Steps:
Design and build the UI components using HTML/CSS/JS.
Implement front-end logic for search, filtering, and displaying products.
Set up server routes for user, shopkeeper, and product functionalities.
Integrate front-end and back-end functionalities using API calls.

Test thoroughly, ensuring proper functionality and security measures.
