function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name field is missing");
      return false;
    }
    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
        alert("Email field is missing");
        return false;
      }
      let z = document.forms["myForm"]["fmessgaebox"].value;
    if (y == "") {
        alert("messgage is missing");
        return false;
      }
  }