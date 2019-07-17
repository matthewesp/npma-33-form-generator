//Global Varibles
var cName, cAdd, cPhone, cBizNum, iName, iNum, address, structure, addComments;
//varibles for no access areas
var basement, crawlSpace, main, attict, garage, exterior, porch, addition, other;
//hidden values
var visiblity = false;
var inspectOp1 = inspectOp2 = inspectOp3 = false;
var pTreat = false;
var treatOps = false;
var basementOps = crawlSpaceOps = mainOps = attictOps = garageOps = exteriorOps = porchOps = additionOps = otherOps = false;
var noAccess;
//Create PDF document
var doc = new jsPDF("p", "in", "letter");
// Commit's Save button to a varible
var submit = document.getElementById("save");
// Commit's form to a varible
var form = document.getElementById("form");
//Add's the images in Base64 Format
doc.addImage(imgDataP1, 'JPEG', 0, 0, 8.5, 11);
//add's inspection date
var date = Date();
//converts date into MM-DD-YYYY format
date = date.split(" ").slice(1,4).join(" ");
//Checks for changes in the form
form.addEventListener("change", function () {
  address = document.getElementById("address").value;
  structure = document.getElementById("structures").value;
  cName = document.getElementById("cName").value;
  cAdd = document.getElementById("cAddress").value;
  cPhone = document.getElementById("cPhone").value;
  cBizNum = document.getElementById("cBizNum").value;
  iName = document.getElementById("iName").value;
  iNum = document.getElementById('iNum').value;
  addComments = document.getElementById('addComments').value;
  // values checked for hidden ops
  visibility = document.getElementById("visible").checked;
  inspectOp1 = document.getElementById('liveInsectsChecked').checked;
  inspectOp2 = document.getElementById('deadInsectsChecked').checked;
  inspectOp3 = document.getElementById('vDamagedChecked').checked;
  pTreat = document.getElementById('pTreatChecked').checked;
  // gets inspection Details
  inspect1 = document.getElementById('liveInsects').value;
  inspect2 = document.getElementById('deadInsects').value;
  inspect3 = document.getElementById('vDamage').value;
  pTreatDetails = document.getElementById('pTreat').value;
  //Get treatment Details
  treatOps = document.getElementById('treatment').checked;
  treatmentDetails = document.getElementById('treatmentDetails').value;
  //Get Inaccessable Area Ops
  basementOPs = document.getElementById('basementChecked').checked;
  crawlSpaceOps = document.getElementById('crawlSpaceChecked').checked;
  mainOps = document.getElementById('mainChecked').checked;
  attictOps = document.getElementById('atticChecked').checked;
  garageOps = document.getElementById('garageChecked').checked;
  exteriorOps = document.getElementById('exteriorChecked').checked;
  porchOps = document.getElementById('porchChecked').checked;
  additionOps = document.getElementById('additionChecked').checked;
  otherOps = document.getElementById('otherChecked').checked;
  //Get Inaccessable areas Details
  basement = document.getElementById('basement').value;
  crawlSpace = document.getElementById('crawlSpace').value;
  main = document.getElementById('main').value;
  attic = document.getElementById('attic').value;
  garage = document.getElementById('garage').value;
  exterior = document.getElementById('exterior').value;
  porch = document.getElementById('porch').value;
  addition = document.getElementById('addition').value;
  other = document.getElementById('other').value;
  noAccess = [[basementOPs, "basement"], [crawlSpaceOps, "crawlSpace"], [mainOps, "main"], [attictOps, "attic"], [garageOps, "garage"], [exteriorOps, "exterior"], [porchOps, "porch"], [additionOps, "addition"], [otherOps, "other"]];
  //shows hidden ops
  if(visibility == true){
    document.getElementById("isChecked").classList.remove("invisible");
  } else {
    document.getElementById("isChecked").classList.add("invisible");
    document.getElementById("isChecked").classList.add("indent");
  };
  //Hidden Inspect Textbox 1
  if (inspectOp1 == true) {
    document.getElementById("liveInsects").classList.remove("invisible");
  } else {
    document.getElementById("liveInsects").classList.add("invisible");
  };
  //Hidden Inspect Textbox 2
  if (inspectOp2 == true) {
    document.getElementById("deadInsects").classList.remove("invisible");
  } else {
    document.getElementById("deadInsects").classList.add("invisible");
  };
  //Hidden Inspect Textbox 3
  if (inspectOp3 == true) {
    document.getElementById("vDamage").classList.remove("invisible");
    document.getElementById("pTreatment").classList.remove("invisible");
  } else {
    document.getElementById("vDamage").classList.add("invisible");
    document.getElementById("pTreatment").classList.add("invisible");
  };
  //Shows Textboxes for Inaccessable Areas
  for(let i = 0; i < noAccess.length; i++){
    if(noAccess[i][0] == true) {
      document.getElementById(noAccess[i][1]).classList.remove("invisible");
    } else {
      document.getElementById(noAccess[i][1]).classList.add("invisible");
    };
  };
  console.log("the form has changed");
});


//Saves the PDF on a click
submit.addEventListener("click", function(){
  if(address == "" || structure == ""){
    window. alert("Please fill out all entries");
  } else {
  //set font size
  doc.setFontSize(8);

  //writes Business Info
  doc.text(0.40, 1, cName);
  doc.text(0.40, 1.125, cAdd);
  doc.text(0.40, 1.25, cPhone);
  doc.text(4.25, 0.86, cBizNum);
  //writes Inspectors Info
  doc.text(0.40, 1.88, (iName + '  ||  ' + iNum));
  //write date
  doc.text(6.25, .85, date);
  //write Address
  doc.text(4.25, 1.25, address);
  //write structure
  doc.text(5.5, 1.9, structure);
  //set visibilty
  if(visibility == true){
    doc.text(0.43, 2.95, "x");
    if (inspectOp1 == true) {
      doc.text(0.61, 3.13, "x");
      doc.text(0.781, 3.293, inspect1);
    }
    if (inspectOp2 == true) {
      doc.text(0.61, 3.48, "x");
      doc.text(0.781, 3.663, inspect2);
    }
    if (inspectOp3 == true) {
      doc.text(0.61, 4, "x");
      doc.text(0.781, 4.184, inspect3);
      //get Previous Treatment Information Only if Option3 is True
      if (pTreat == true) {
        doc.text(0.651, 5, "x");
        doc.text(0.400, 5.205, pTreatDetails);
      } else{
        doc.text(1.001, 5, "x");
        doc.text(0.400, 5.205, pTreatDetails);
      }
    }
  } else {
    doc.text(0.43, 2.78 , "x");
  }

  if (treatOps == true) {
      doc.text(0.451, 5.955, "x");
      doc.text(0.750, 6.106, treatmentDetails);
  } else {
      doc.text(0.451, 6.306, "x");
      doc.text(0.750, 6.466, treatmentDetails);
  }
  console.log(noAccess);
  for (let i = 0; i < noAccess.length; i++) {
    if (noAccess[i][0] === true) {
      let z = (7.046 + (i * 0.151));
      let y = document.getElementById(noAccess[i][1]).value;
      doc.text(0.431, z, "x");
      doc.text(1.250, z, y);
    }
  };

  doc.text( 0.5, 8.775, addComments);
  //Add New page
  doc.addPage();
  //Add's the images in Base64 Format
  doc.addImage(imgDataP2, 'JPEG', 0, 0, 8.5, 11);
  //Saves the document
  doc.save('NPMA-33.pdf');
  }
});



