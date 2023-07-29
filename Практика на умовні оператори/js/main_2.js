let kmDistance = +prompt("Provide the distnace in km");

let kmResult = kmDistance * 1000;

let feetDistance = +prompt("Provide the distnace in feet");

let feetResult = feetDistance * 0.305;

if(kmResult > feetResult){
    alert(`${kmDistance}km is bigger than ${feetDistance}feet`)
} else if(kmResult < feetResult){
    alert(`${feetDistance}feet is bigger ${kmDistance}km`)
}