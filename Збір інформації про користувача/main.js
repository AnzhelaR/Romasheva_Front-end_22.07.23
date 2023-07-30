let userBd = +prompt("Твій рік народження");

let userAge = 2023 - userBd;

if (userBd == `` || userBd == null) {
    alert("Шкода, що Ви не захотіли ввести свій(ю)");
}

let userCity = prompt("В якому місті ти живеш?");

if (userCity == `` || userCity == null) {
    alert("Шкода, що Ви не захотіли ввести свій(ю)");
} else if(userCity === "Київ" || userCity === "Вашингтон" || userCity === "Лондон"){
    userCity = `Ти живеш у столиці ${userCity}`;
} else {
    userCity = `Ти живеш у місті ${userCity}`;
}

let userSport = prompt("Твій улюблений вид спорту:");

if (userSport == `` || userSport == null) {
    alert("Шкода, що Ви не захотіли ввести свій(ю)");
}

switch(userSport){
    case "Футбол":
        userSport = `Круто! Хочеш стати Андрієм Шевченко`;
        break;

    case "Плавання":
        userSport = `Круто! Хочеш стати Яною Клочковою`;
        break;

    case "Художня гіманстика":
        userSport = `Круто! Хочеш стати Іриною Дерюгіною`;
        break;

    case null:
        break;

    case ``:

    default:
        userSport =  "Круто!";
}


if(userBd !== 0 || userCity !== null || userSport !== null){

    if(userBd == 0 && userCity == null){
        alert(`${userSport}`);
    } else if(userCity == null && userSport == null){
        alert(`${userAge}`);
    } else if(userBd == 0 && userSport == null){
        alert(`${userCity}`);
    } else if(userBd == 0){
        alert(`${userCity} \n${userSport}`);
    } else if(userCity == null){
        alert(`Тобі ${userAge} \n${userSport}`);
    } else if(userSport == null){
        alert(`Тобі ${userAge} \n${userCity}`);
    } else{
        alert(` Тобі ${userAge} \n${userCity} \n${userSport}`);
    }
} else if(userBd !== 0 && userCity !== null && userSport !== null){
    alert(`Тобі ${userAge} \n${userCity} \n${userSport}`);
}



