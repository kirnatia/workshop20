// const users = [
//     { name: "John", age: 25, occupation: "gardener" },
//     { name: "Lenny", age: 51, occupation: "programmer" },
//     { name: "Andrew", age: 43, occupation: "teacher" },
//     { name: "Peter", age: 81, occupation: "teacher" },
//     { name: "Anna", age: 43, occupation: "teacher" },
//     { name: "Albert", age: 76, occupation: "programmer" },
//     { name: "Adam", age: 47, occupation: "teacher" },
//     { name: "Robert", age: 72, occupation: "driver" },
// ];

// function main() {
//     // grabbed root element
//     const rootElement = document.getElementById("root");

//     // adding h1  element
//     const h1 = document.createElement('h1');
//     h1.innerHTML = 'FREELANCERS';
//     rootElement.appendChild(h1);

//     //create an unordered list element. loop through the users array creating li elements, append those elements to your HTML document
//     const ul = document.createElement('ul');
//     rootElement.appendChild(ul);

//     //for loop to create li items
//     for (let person of users) {
//         let li = document.createElement('li');
//         li.innerHTML = person.name;
//         ul.appendChild(li);

//     }
//     rootElement.appendChild(ul)


// }

// //call the main function
// main();

const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
  ];
  
  function main() {
    const rootElement = document.getElementById("root");
  
    // Create the h1 element
    const h1 = document.createElement('h1');
    h1.textContent = 'FREELANCERS';
    rootElement.appendChild(h1);
  
    // Create the unordered list and append the list items
    const ul = document.createElement('ul');
    users.forEach(person => {
      const li = document.createElement('li');
      li.textContent = person.name;
      ul.appendChild(li);
    });
    rootElement.appendChild(ul);
  }
  
  // Call the main function
  main();
  