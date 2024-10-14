function displayEnteredName(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the value entered in the input field
    const name = document.getElementById("name").value;
    
    // Display the name in the paragraph below the form
    document.getElementById("displayName").innerText = "Player Name: " + name;
}