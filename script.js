document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.capture-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const emailInput = document.querySelector('input[type="email"]').value;
            const webhookURL = "https://hook.eu1.make.com/s35fndtuho7g0grmwobdpzuiy1dshygd";

            fetch(webhookURL, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ 
                    email: emailInput,
                    date: new Date().toLocaleDateString('fr-FR')
                })
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = "success.html";
                }
            })
            .catch(err => {
                console.error(err);
                alert("Erreur lors de l'envoi.");
            });
        });
    }
});