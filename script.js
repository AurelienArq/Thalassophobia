function calculateProfile() {
    const responses = getResponses();
    const profile = determineProfile(responses);
    displayProfile(profile);
}

function getResponses() {
    const responses = {};

    responses.q1 = document.getElementById('q1').value;
    responses.q2 = document.getElementById('q2').value;
    responses.q3 = document.getElementById('q3').value;
    responses.q4 = document.getElementById('q4').value;
    responses.q5 = document.getElementById('q5').value;
    responses.q6 = document.getElementById('q6').value;
    responses.q7 = document.getElementById('q7').value;
    responses.q8 = document.getElementById('q8').value;
    responses.q9 = document.getElementById('q9').value;
    responses.q10 = document.getElementById('q10').value;

    return responses;
}

function determineProfile(responses) {
    // Exemple de logique de profil
    const q1 = responses.q1;
    const q2 = responses.q2;
    const q3 = responses.q3;
    const q4 = responses.q4;
    const q5 = responses.q5;
    const q6 = responses.q6;
    const q7 = responses.q7;
    const q8 = responses.q8;
    const q9 = responses.q9;
    const q10 = responses.q10;

    // Logique pour déterminer le profil
    if (q1 === 'a' && q2 === 'a' && q3 === 'a' && q4 === 'a') {
        return "Le Navigateur Intrépide";
    } else if (q1 === 'b' && q2 === 'b' && q3 === 'b' && q4 === 'b') {
        return "L'Expert Analytique";
    } else if (q1 === 'c' && q2 === 'c' && q3 === 'c' && q4 === 'c') {
        return "L'Observateur Prudent";
    } else if (q5 === 'a' && q6 === 'a' && q7 === 'a' && q8 === 'a') {
        return "Le Résolveur de Problèmes Rapide";
    } else if (q5 === 'b' && q6 === 'b' && q7 === 'b' && q8 === 'b') {
        return "Le Visionnaire Méthodique";
    } else {
        return "L'Esprit Polyvalent";
    }
}

function displayProfile(profile) {
    const resultElement = document.getElementById('result');
    const profileDescriptionElement = document.getElementById('profile-description');

    profileDescriptionElement.innerText = profile;

    // Affichez le résultat
    resultElement.style.display = 'block';
}


// Sélectionnez l'élément d'entrée du nombre
var participantsInput = document.getElementById('participants');

// Écoutez l'événement de saisie
participantsInput.addEventListener('input', function () {
    // Remplacez tout caractère non numérique par une chaîne vide
    this.value = this.value.replace(/\D/g, '');

    // Assurez-vous que la valeur reste dans la plage spécifiée
    var value = parseInt(this.value, 10) || 0;
    this.value = Math.min(10, Math.max(1, value));
});

var reservationForm = document.getElementById('reservation-form');
var confirmationMessage = document.getElementById('confirmation-message');

reservationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    reservationForm.style.display = 'none'; // Masque le formulaire
    confirmationMessage.style.display = 'block'; // Affiche le message de confirmation
});