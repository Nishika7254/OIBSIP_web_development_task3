# OIBSIP_web_development_task3
Third task of oasis internship in the domain web development.
Objectives
- Enable users to convert temperatures between Celsius (°C) and Fahrenheit (°F)
- Validate input to ensure it is a valid number
- Provide clear feedback and display converted values with correct units
- Use a dropdown for unit selection and a button to initiate conversion

Tools & Technologies
HTML – to structure the form, dropdown, button, and result display
CSS – for clean, responsive styling
JavaScript– to:
   Validate user input
   Apply conversion formulas:
   °C → °F: `C × 9/5 + 32`
   °F → °C: `(F − 32) × 5/9`
    Update the DOM with results
    Handle conversion logic triggered by the button

Outcome
A user-friendly single-page web app:
A number input and dropdown to select input unit (°C or °F)
A Convert button that:
    - Validates the input
    - Performs the calculation
    - Displays the result with the appropriate unit (e.g., “72.50 °F”)
    - Clear error messaging for invalid input
    - Easy to extend with additional units (like Kelvin) or features
