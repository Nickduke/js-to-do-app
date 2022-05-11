// Query the DOM for the form element
const formElement = document.querySelector('form');
console.log(formElement);

// Add a submit event listener on the form
formElement.addEventListener('submit', (e) => {
  console.log('form has been submitted');

  // Stop the page from refreshing when the form is submitted
  console.log(e);
  e.preventDefault();
  // alert(`You've submitted this form`);

  // query the DOM for the input element and check whether it is empty
  const inputElement = document.getElementById('toDoItem');
  console.log(inputElement);

  // Only if the user has entered an actual task (AKA input is not empty):
  if (inputElement.value) {
    console.log('Congrats on entering a value!');
    // Grab the user's to-do item from the form input
    // create li
    const newListItem = document.createElement('li');
    // Display to do on page within an li element

    // Include  a checkbox icon within the li
    newListItem.innerHTML = `<i class='fa fa-light fa-square'></i>`;

    // Create an element that represents the text we have to add (our TO DO)
    const toDoContent = document.createTextNode(inputElement.value);
    console.log(toDoContent);
    // And then append that text element to the li
    newListItem.appendChild(toDoContent);

    // Add li element to the ul
    document.querySelector('ul').appendChild(newListItem);
    // Clear the input
    inputElement.value = '';
  } else {
    alert('Please do not leave input empty before submitting form.');
  }
});

// Clicking on a task allows you to toggle between checked/unchecked (AKA done vs not done)

// NOTE: This will not work because you can only add event listeners to elements which exist in the DOM at the time of code execution
// const listElements = document.querySelector('li');

// listElements.addEventListener('click', () => {
//   console.log('Task has been checked');
// });

// In order to attach a click evnent listener to the li's which do not exist on the page yet, we can use:
// EVENT PROPAGATION to DELAGATE the click to the ul!

// BONUS LEVEL:
// Add a "reset" button which clears all of the to - dos
// Add a "remove task" button to each task
// Add a edit task button
// Add congrats alert when all of the existing to-dos are checked off
// Take a break message if 5 or more tasks completed
