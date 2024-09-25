
/*JavaScript: The eventListener on the "Projects" link toggles the dropdown menu to show or hide when clicked.When you use classList in JavaScript to manipulate classes on an HTML element, you are interacting with a list of the CSS classes applied to that element. These classes are found within the class attribute of the element in the DOM (Document Object Model).*/
    

document.getElementById('projects-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const dropdown = document.getElementById('projects-dropdown');
    dropdown.classList.toggle('show-dropdown'); // Toggle the dropdown visibility
});