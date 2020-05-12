var pageMain = document.querySelector('main');
var wghtVal = '"wght" 140';
var spacVal = '"SPAC" 80';
var heigVal = '"HEIG" 400';
var asceVal = '"ASCE" 600';
var descVal = '"DESC" 600';
var diacVal = '"DIAC" 0';
var monoVal = '"MONO" 0';
var curvVal = '"CURV" 0';
setStyles();

function setStyles() {
  pageMain.setAttribute('style','font-variation-settings: ' + wghtVal + ', ' + spacVal + ', ' + heigVal + ', ' + asceVal + ', ' + descVal + ', ' + diacVal + ', ' + monoVal + ', ' + curvVal + ';');
}

function changeAxis(eID,num,axis,fldReset) {
  document.querySelector('#' + eID + 'Val').value = num;
  document.querySelector('#' + eID).setAttribute('aria-valuenow',num);
  tmpVal = '"' + axis + '" ' + num;
 
   
  new Function(axis.toLowerCase() +"Val  = tmpVal")();
  setStyles();
  if (fldReset == '1') {
    document.querySelector('#' + eID).value = num;
    document.getElementById(eID).focus();
  }
}

