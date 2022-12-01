/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myTopNavFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myBottomNavFunction() {
  var x = document.getElementById("myBottomnav");
  if (x.className === "bottomnav") {
    x.className += " responsive";
  } else {
    x.className = "bottomnav";
  }
}

const paragraph = `
<p>
  Copyright &copy; ${new Date().getFullYear()} Sanya's Blog | Alexander Dohms - WDD130
</p>
`;

document.getElementById('copyright').innerHTML = paragraph;