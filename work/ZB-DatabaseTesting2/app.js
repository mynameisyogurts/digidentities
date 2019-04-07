(function() {
	const btnLogin = document.getElementById('btnLogin');
	const btnLogout = document.getElementById('btnLogout');

	// Login event listener to log a user in anonymously
    btnLogin.addEventListener('click', e => {
        firebase.auth().signInAnonymously();
    });

    // Auth listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
    });
}());