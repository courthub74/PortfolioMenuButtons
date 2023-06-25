  //////////////////////// MOBILE MENU SCRIPT /////////////////////////////////

    // HOME SECTION

    // HOME BURGER MOBILE MAIN QUERY
    const home_burger_mobile = document.querySelector('.hamburgermobile');
    // SLIDE HOME MENU QUERY
    const home_slide_menu_mobile = document.querySelector('.nav-mobile-main-home');

     // Adding Eventlistener to the hamburger and slide menu
     home_burger_mobile.addEventListener('click', function () {
        // toggle is active css state for hamburger menu
        home_burger_mobile.classList.toggle('is-active');
        console.log("Home Menu Pressed");
     });