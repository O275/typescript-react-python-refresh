fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => console.log(users))
  .catch(error => console.error("Error fetching users:", error));
