// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <form>,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Declare object that will store the form-data

const collectedData = {
    fullname: null,
    email: null,
    message: null
};

// Declare object that will store the errors

const errors = {};

// Declare variable that will 
// store regular expression for email
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // email reg-exp

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateForm(ev) {      
    // Prevent the default behaviour 
    // of the form element.
    ev.preventDefault();

  
    //FULL NAME 
    // Check if fullname is not empty.
    if(fullname.value !== ""){
    // If so:
       // Pass the collected value
       // to your object "data".
        collectedData.fullname = fullname.value;  
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your object "errors".
        errors.fn = "Full name is missing";
    // End your conditional here.
        }

    
    //EMAIL 
    // Check if email is not empty.
    if (email.value !== "") {
       // Check if email is valid.
        if (pattern.test(email.value)) {
       // If so:
          // Pass the collected value
          // to your Object "data".
            collectedData.email = email.value;
            delete errors.em;
       // Otherwise:
        } else {
          // Create a corresponding error-message
          // and add it to your object "errors".
            errors.em = "Email is invalid";
       // End your nested conditional here.
        } 
    // Otherwise:
    } else {
       // Create a corresponding error-message
       // and add it to your object"errors"
        errors.em = "Email is missing";
    // End your outer conditional here.
    }

    
    //MESSAGE 
    // Check if message is not empty.
     if (message.value !== "") {
    // If so:
       // Pass the collected value
       // to your object "data".
        collectedData.message = message.value; 
    // Otherwise:
     }else{
       // Create a corresponding error-message
       // and add it to your object"errors"
       errors.msg = "Message is missing";
    // End your conditional here.
    }
    

    // FEEDBACK/ERRORS 
    // Check if there is anything in object errors
    if (Object.keys(errors).length === 0) {
       // If so: 
       // Print it in JavaScript console.
        console.log(collectedData);
    // Otherwise:
     } else {
       // Print the data in JavaScript console.
       console.log(errors);
       // Clear text-fields
       fullname.value = null;
       email.value=null;
       message.value=null;
    // End your conditional here.
    }
                       
// Close your function here
}
    
// Register your form to "submit" event.
form.addEventListener("submit", validateForm);   
    
    
    