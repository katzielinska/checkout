$(document).foundation();
var coll = document.getElementsByClassName("company-info");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    event.preventDefault();
    this.classList.toggle("collapsed");
    var content = this.nextElementSibling;
    content.classList.toggle("collapsed");
  });
}
