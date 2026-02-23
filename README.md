Answers to Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById → Returns a single element by its id. Id must be unique.

getElementsByClassName → Returns a live HTMLCollection of all elements with a given class.

querySelector → Returns the first element matching a CSS selector.

querySelectorAll → Returns a static NodeList of all elements matching a CSS selector.


2. How do you create and insert a new element into the DOM?

Answer: To add a new element to the DOM, follow three steps:

Create a new element

const div = document.createElement("div");

Add content or attributes

div.innerText = "Hello World";
div.setAttribute("class", "myDiv");

Insert into the DOM

document.body.appendChild(div); // Adds at the end of body

You can also use insertBefore to place it at a specific position.


3. What is Event Bubbling? And how does it work?

Answer: Event bubbling is when an event starts from the target element and then propagates upward through its parent elements.

Example: Clicking a button triggers its event first, then the parent, then the grandparent.


4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is attaching a single event listener to a parent element to handle events on its child elements.

Benefits:

Avoid multiple listeners on each child.

Works with dynamically added children.


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() → Stops the browser’s default action.
Example: Prevent a form from submitting or a link from navigating.

stopPropagation() → Stops the event from bubbling or capturing.
Example: Parent elements won’t receive the event when this is called.