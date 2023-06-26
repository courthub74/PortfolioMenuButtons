// MY MENU STYLE PSUEDO-CODE

// query the burger button

// query the button space to change the innerHTML

// store that query in a variable

// set a class in css to make the burger img dissapear

// set a class to be toggled on for the button innerHTML

// set an eventlistener and write a click function for the query

// toggle the class of the burger img upon the onclick

// change the innerHTML of the button space upon the onclick

// toggle the innerHTML off 

// set the burger position to RELATIVE

// set the close text position to ABSOLUTE


const hamburger = document.querySelector('.menuburger');

const button = document.querySelector('.button');

const buttontext = document.querySelector('.closetext');

button.addEventListener('click', function () {
    // test print
    console.log("You've pressed the burger button");
    // toggle the is-gone class
    hamburger.classList.toggle('is-gone');
    // toggle the is-active class
    button.classList.toggle('is-active');
    // change the button HTML to close
    // button.innerHTML = "Close";
    // toggle the button text
    buttontext.classList.toggle('is-shown');
});