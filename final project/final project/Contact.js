function validateAndSubmit() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('concern').value;

    // Tutorial 10: Conditional Statement for professional validation
    if (!email.includes('.edu')) {
        alert("Please use a valid college (.edu) email address to reach our PTs.");
        return;
    }

    if (message.length < 20) {
        alert("Please provide more detail about your symptoms so we can help effectively.");
        return;
    }

    // Success state
    document.getElementById('response-message').innerHTML = 
        `<div style="padding:10px; background:#d4edda; border-radius:5px;">
            Inquiry sent! A PT will review your "Blueprint" shortly.
         </div>`;
}