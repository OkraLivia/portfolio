  //PROJECTS
  // Display some data from the object:
document.getElementById("name").innerHTML =
OsqledARen.name;
document.getElementById("description").innerHTML =
OsqledARen.description;

document.getElementById("name2").innerHTML =
scrollr.name;
document.getElementById("description2").innerHTML =
scrollr.description;

document.getElementById("name3").innerHTML =
lightForest.name;
document.getElementById("description3").innerHTML =
lightForest.description;

document.getElementById("name4").innerHTML =
KTH.name;
document.getElementById("description4").innerHTML =
KTH.description;

document.getElementById("name5").innerHTML =
studyPlaces.name;
document.getElementById("description5").innerHTML =
studyPlaces.description;

document.getElementById("name6").innerHTML =
bedtime.name;
document.getElementById("description6").innerHTML =
bedtime.description;

document.getElementById("name7").innerHTML =
hippo.name;
document.getElementById("description7").innerHTML =
hippo.description;

document.getElementById("name8").innerHTML =
MyFaveDb.name;
document.getElementById("description8").innerHTML =
MyFaveDb.description;

document.getElementById("name9").innerHTML =
CozyCorners.name;
document.getElementById("description9").innerHTML =
CozyCorners.description;

document.getElementById("name10").innerHTML =
colorCombo.name;
document.getElementById("description10").innerHTML =
colorCombo.description;

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('modal');
  var container2 = document.getElementById('modal2');
  var container3 = document.getElementById('modal3');
  var container4 = document.getElementById('modal4');
  var container5 = document.getElementById('modal5');
  var container6 = document.getElementById('modal6');
  var container7 = document.getElementById('modal7');
  var container8 = document.getElementById('modal8');
  var container9 = document.getElementById('modal9');
  var container10 = document.getElementById('modal10');

  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
  if (!container2.contains(e.target)) {
    container2.style.display = 'none';
  }
  if (!container3.contains(e.target)) {
    container3.style.display = 'none';
  }
  if (!container4.contains(e.target)) {
    container4.style.display = 'none';
  }
  if (!container5.contains(e.target)) {
    container5.style.display = 'none';
  }
  if (!container6.contains(e.target)) {
    container6.style.display = 'none';
  }
  if (!container7.contains(e.target)) {
    container7.style.display = 'none';
  }
  if (!container8.contains(e.target)) {
    container8.style.display = 'none';
  }
  if (!container9.contains(e.target)) {
    container9.style.display = 'none';
  }
  if (!container10.contains(e.target)) {
    container10.style.display = 'none';
  }
});

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("imgContainer")[0];
var imgModal = document.getElementById("imgContainer");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  imgModal.style.display = "none";
};

//OTHER ENGAGEMENTS
document.getElementById("netlightInfo").innerHTML =
netlight.description;

document.getElementById("ol").innerHTML =
ol.description;

document.getElementById("studs").innerHTML =
studs.description;

document.getElementById("mtgn").innerHTML =
mtgn.description;

//ART
document.getElementById("intro").innerHTML =
art.description;

//ME
document.getElementById("okra").innerHTML =
okra.description;


document.getElementById("skill").innerHTML =
skills.name;
document.getElementById("skills").innerHTML =
skills.description;

document.getElementById("langs").innerHTML =
lang.name;
document.getElementById("lang").innerHTML =
lang.description;