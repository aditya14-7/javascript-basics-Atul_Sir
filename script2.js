<<<<<<< HEAD:script2.js
var value = 111;
let test = "Hello World!";
=======
/*
var myVar = 782;
let testVar = "Hello World!";
>>>>>>> ab06fa5e0c5391ca32e8c4c6e0d0c3ee8127a095:script.js

let heading = document.getElementsByTagName('h1');
console.log(heading);

let para1 = document.getElementById('para-1');
console.log('Paragraph:', para);

let para2 = document.getElementById('para-1').innertext;
console.log('Paragraph:', para);

let div = document.getElementsByClassName('container');
console.log("division:", div);

let heading2 = document.querySelectorAll('.head-2');
console.log(heading2);

let heading3 = document.querySelector('.container-1 .head-2');
console.log(heading3);
*/
// Class

class Car {
    constructor(name, cc, model, make){
        this.name = name;
        this.cc = cc;
        this.model = model;
        this.make = make;
    }

    getName() {
        return this.name;
    }
}

// Objects
const callJohn = () => {
    const obj = {
        name: "John Wick",
        car: "Mustang 69",
        possesions: [
            "Dog",
            "Car",
            "Pencil",
        ],
        nickname: "Boogeyman"
    };
    return obj;
}


function getNano() {
    let nano = new Car('Nano', '800', 'vi', 'Tata');
    console.log(nano);
}

// Pre Defined functions
function builtInFuncDemo() {
    let num = 12361;
    console.log(num.toExponential(3));
    
    let str = "Softpro";
    str = str.concat('India');
    console.log(str);
    
    let ar = ['test', 213, 21312, 343, str, 12, 65];
    console.log(ar.indexOf(str));
}

const setTime = () => {
    let datetime = document.getElementById('datetime');
    // let date = new Date();
    datetime.innerHTML = Date();
    // console.log("day", date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes());
}

setTime();
let show = false;
const showTime = () => {
    let time = document.getElementById('datetime');
    if(show === true){
        time.classList.remove('show');
        show = false;
        return;
    }
    time.classList.add('text-success', 'text-xl', 'show');
    show = true;
    return;
    // setTimeout(() => {
    // }, 3000);
}

// OOP concepts



