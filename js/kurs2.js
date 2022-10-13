// let elemMenu = formMenu.elemMenu.value;
function menu(){
let elemMenu = document.getElementById("in1").value; //вывод в модальное окно надписей в инпуте



let fc = document.getElementById('in2').value;

let bc = document.getElementById('in3').value;

let hc = document.getElementById('in4').value;

alert(elemMenu +' , ' + hc+" , "+ fc+ " ,  "+bc);

let arrayMenu = elemMenu.split(', ');

// console.log(arrayMenu);


let string1 = "";

let string2 = "";

for(i = 0 ;i <arrayMenu.length; i++ )
{
    string1+=`<li onclick="fucnimg(${i+1})"><a  href="#">${arrayMenu[i]}
     </a></li>`;
}

 string1 = `<ul>${string1}</ul>`;
string2=`a{
            /* цвет фона */ 
            background-color:${bc} ;
            /* color font */
            color:${fc};
          }
        a:hover
          {

          background-color: ${hc};
      
          }`;
  
 boxMenu.innerHTML = string1;   
 usersyle.innerHTML = string2;
//  console.log(string1);

formMenu.button.value = "change menu";
}

function fucnimg(n){
    boxpickture.innerHTML = 
    `
    <img onclick="boxpickture.innerHTML=''"src="../source/${n}.jpg">
    `; 
}
