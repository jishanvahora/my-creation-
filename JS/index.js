document.getElementById( "myform").addEventListener("submit", function(event){
    event.preventDefault()
    const payload = {
        firstname : document.getElementById("firstname").value,
        lastname :  document.getElementById("lastname").value,
        number : document.getElementById("number").value,
        email : document.getElementById("email").value,
        roll_number : document.getElementById("rollno").value,

    }
   const apiurl =  "http://192.168.194.144:3001/userregister"
   // Replace 'https://api.example.com/data' with your API endpoint
// const apiUrl = 'https://api.example.com/data';

// Making a GET request

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // Add any headers needed for the API
    },
    body: JSON.stringify(payload)  // Convert JS object to JSON string
  };

fetch(apiurl,options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with JSON data here-
    console.log(data);
    displayUserData(data)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
})

function displayUserData(userData) {
    const userDataDiv = document.getElementById("userdata");

    // Construct HTML to display the data
    userDataDiv.innerHTML = `
        <h2>User Data</h2>
        <p><strong>Name:</strong> ${userData.firstname} ${userData.lastname}</p>
        <p><strong>Phone Number:</strong> ${userData.number}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Roll Number:</strong> ${userData.roll_number}</p>
    `;
}
