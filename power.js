// console.log("pankaj");
function Printresume() {
    document.getElementById('btn')
    print(btn)
}

function Submitbtn() {

    let trget = document.getElementById('box')
    let trgets = document.getElementById('box1')
    let trgetss = document.getElementById('box2')
    let trgetssss = document.getElementById('box3')
    let trgetsss = document.getElementById('input4')

    localStorage.setItem('Name', trget.value)
    localStorage.setItem('Email', trgetss.value)
    localStorage.setItem('Password', trgetsss.value)
    localStorage.setItem('Phone', trgetssss.value)
    localStorage.setItem('Your Text', input4.value)
    // alert("Submitted Successfully")
    alert("potty")
}
let para1 = document.getElementById("para1");
para1.style.display = "none";
function DisplayMore1() {
    let para1 = document.getElementById("para1")
    if (para1.style.display != "block") {
        para1.style.display = "block"
    } else {
        para1.style.display = "none"
    }
}


let para2 = document.getElementById("para2");
para2.style.display = "none"
function displayMore2() {
    let para2 = document.getElementById("para2")
    if (para2.style.display != "block") {
        para2.style.display = "block"
    } else {
        para2.style.display = "none"
    }
}

let para3 = document.getElementById("para3");
para3.style.display = "none"
function displayMore3() {
    let para3 = document.getElementById("para3")
    if (para3.style.display != "block") {
        para3.style.display = "block"
    } else {
        para3.style.display = "none"
    }
}

let para4 = document.getElementById("para4");
para4.style.display = "none"
function displayMore4() {
    let para4 = document.getElementById("para4")
    if (para4.style.display != "block") {
        para4.style.display = "block"
    } else {
        para4.style.display = "none"
    }
}



// let key = prompt("type your key here")
// let value = prompt("type your value here")
// console.log(the value of `${key} is   localStorage.getItem ${key});