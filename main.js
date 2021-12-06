const result=document.getElementById("result");
const button=document.getElementById("button");

button.addEventListener('click', getRandom);

function getRandom(){
  
  
 fetch("https://aws.random.cat/meow")
  .then(res => res.json())
  .then(data =>{
result.innerHTML=`<img src="${data.file}">`;
   
 
 })
}


