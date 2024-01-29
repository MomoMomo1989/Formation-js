const st1 = ["cc1", "cc2", "cc3"];
console.log(st1);

st1.push("12");
console.log(st1);
st1.push("3");
console.log(st1);
st1.push(3);
console.log(st1);
st1.pop();
console.log(st1);  
   

const art ={
    nom:"p2",
    prenom:"p22",
    age:17,
    aureinf:["inf11",21,"inf31"]
}
const art2 = [
    {
        nom:"p33",
        prenom:"p33",
        age:173,
        aureinf:["inf1",2,"inf3"]
    },
    {
        nom:"p14",
        prenom:"p24",
        age:174,
        aureinf:["inf14",22,"inf34"]
    },
    {
        nom:"p15",
        prenom:"p25",
        age:175,
        aureinf:["inf51",25,"inf53"]
    }
];
console.log(art2[1].aureinf[2]);
function arrrtojason(value){
  return JSON.stringify(value)
}
console.log(arrrtojason(art2))
console.log(JSON.stringify(art2))
 
for (let x of art2){
    console.log(x.aureinf[0])
}
const ts1 = art2.map((x)=>{
    return x.age
})
console.log(ts1)

const flt = art2.filter((x) => {
   return x.aureinf[1] > 10
})
console.log(flt)
