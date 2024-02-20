// exercice 1
document.getElementById("prix_ht").innerHTML = Math.floor(Math.random() * 13)  + 100;
document.getElementById("marge").innerHTML = (Math.floor(Math.random() * 13)  + 20);

// passwords
function validate_password(event) {
    var x = document.getElementsByName('password')[0].value,
        y = document.getElementsByName('password_again')[0].value;
    if (x === y) {
        return true;
    } else {
        alert('Les mots de passe saisis sont différents.');
        event.preventDefault();
        return false;
    }
}
