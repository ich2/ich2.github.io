// exercice 1
document.getElementById("prix_ht").innerHTML = Math.floor(Math.random() * 13)  + 100;
document.getElementById("marge").innerHTML = (Math.floor(Math.random() * 13)  + 20);

// passwords
<script>
function validate_password() {
  var x= document.getElementById("password");
  var y= document.getElementById("password_again");
  if(x.value==y.value) return x;
  else alert("Les mots de passe saisis sont différents.");
}
</script>
