// This will run when the form is submitted
document.getElementById('userForm').addEventListener('submit', async (e) => 
  {
    e.preventDefault(); 
    // Prevent the page from reloading
    // Get the values the user entered
    const data = 
    {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };
    
    // Send the data to our server
    try 
    {
        const res = await fetch('/api/users', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        
        const responseDiv = document.getElementById('response');
        
        if (res.ok) 
        {
            const text = await res.text();
            responseDiv.innerText = text;
            responseDiv.className = 'success';
            document.getElementById('userForm').reset(); // Clear the form
        } 
        else 
        {
            responseDiv.innerText = 'Error saving your information. Please try again.';
            responseDiv.className = 'error';
        }
    } 
    catch (err) 
    {
        document.getElementById('response').innerText = 'Connection error. Please try again later.';
        document.getElementById('response').className = 'error';
    }
});
