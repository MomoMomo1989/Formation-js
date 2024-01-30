const note = document.getElementById("nt");
const val = document.getElementById("val");
const textresult = document.getElementById("textresult");
let result = 0;
let result2 = "";
console.log(note.value);
val.addEventListener('click', ()=> {
  alert(note.value);
  if (note.value <= 40)  {
    result = "f";
  }
  else if ((note.value > 40) && (note.value <= 50)) {
    result = "e";
  }
  else if ((note.value > 50) && (note.value <= 60)) {
    result = "d";
  }
  else if ((note.value > 60) && (note.value <= 70)) {
    result = "c";
  }
  else if ((note.value > 70) && (note.value <= 80)) {
    result = "b";
  }
  else if ((note.value > 80) && (note.value <= 100)) {
    result = "a";
  }
  console.log(result)
  alert(result);
  resltt(note.value)
});
function resltt(re){
  if (re < 50){
    result2="ajournée"
  }
  else{
    result2="admis"
  };
  alert(result2);
  textresult.innerHTML=result2;
};