// Firebase-Initialisierung
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Anmeldeformular abfangen
const loginForm = document.querySelector('#login-form');

// Anmeldeereignis abhören
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Standardformularsendeverhalten unterdrücken

    // Benutzer anmelden
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Erfolgreich angemeldet
            const user = userCredential.user;
            console.log('Angemeldet als:', user.email);
            // Weiterleitung zu einer anderen Seite oder Aktion
        })
        .catch((error) => {
            // Fehler bei der Anmeldung
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Fehler bei der Anmeldung:', errorMessage);
        });
});
