const l2 = document.querySelector('#l2');
const l3 = document.querySelector('#l3');
const l1 = document.querySelector('#l1');
const x = 12;
l2.addEventListener('click',() => {
 l2.textContent='https//www.Google.com';
 l2.style = "position: relative;";
 l2.style = "top : 0;";
 l2.style = "left : 0;";
 //l2.href="https//:www.Google.com";
l1.style = "color: aqua;" 
}); 
const ff = document.getElementById('ff');
ff.onmousemove = function(){
    console.log("cc");
    ff.classList.toggle("cls");
}

//const ls = document.body.children[0].children[2].children.l3.textContent=`www.goole.com`
//const ls = document.body.children[0].children[2].children.l3.=`www.goole.com`
//console.log(document.body.children[0].children[2].children.l3.textContent);
// document.getElementById("l2").textContent = "cc"
// document.querySelector('#l3').textContent = "hrllo"
// document.getElementById("l2").href = "http://www.google.com"