let arrAniEys1 = [];
let arrAniEys = [];
let arrAniEysN1 = [];
let arrAniEysN = [];
// יצירת התמונה של הטלפון (כדי שערימת הפיתות יהיו מתחת)
let phone = document.createElement("img");
phone.setAttribute("src", "pictures/טלפון.png")
phone.setAttribute("id", "phone")
document.querySelector("#main").appendChild(phone);
//ניקוד
let score = document.createElement("div")
score.setAttribute("id", "score")
let scoreT = document.createTextNode("0");
score.appendChild(scoreT);
document.querySelector("#main").appendChild(score);
//יצירת התמונה של ערימת פיתות
let pita = document.createElement("img");
pita.setAttribute("src", "pictures/ערמת פתות.png")
pita.setAttribute("id", "pita")
pita.addEventListener("click", pitaFunc)
document.querySelector("#main").appendChild(pita);
//יצירת התמונה של יד בלי פיתה
let hand_without_pita = document.createElement("img");
hand_without_pita.setAttribute("src", "pictures/יד בלי פיתה.png")
hand_without_pita.setAttribute("id", "hand_without_pita")
document.querySelector("#main").appendChild(hand_without_pita);
//יצירת התמונה של יד לוקחת פיתה
let hand_take_pita = document.createElement("img");
hand_take_pita.setAttribute("src", "pictures/יד באמצע לקחת פיתה.png")
hand_take_pita.setAttribute("id", "hand_take_pita")
document.querySelector("#main").appendChild(hand_take_pita);
//יצירת התמונה של יד עם פיתה
let hand_with_pita = document.createElement("img");
hand_with_pita.setAttribute("src", "pictures/יד עם פיתה.png")
hand_with_pita.setAttribute("id", "hand_with_pita")
document.querySelector("#main").appendChild(hand_with_pita);
//יצירת התמונות של האוכל בתוך הפיתה
let single;
for (let i = 0; i < 4; i++) {
    single = document.createElement("img");
    single.setAttribute("src", "pictures/בודד/" + i + ".png")
    single.setAttribute("id", "s" + i);
    document.querySelector("#main").appendChild(single);
}
//יצירת התמונה של יד שמאל בסיסית
let hand_base = document.createElement("img");
hand_base.setAttribute("src", "pictures/יד לוקחת.png")
hand_base.setAttribute("id", "hand");
document.querySelector("#main").appendChild(hand_base);
//יצירת התמונה של יד שמאל באמצע להגיש
let hand_half = document.createElement("img");
hand_half.setAttribute("src", "pictures/יד מגישה/0.png")
hand_half.setAttribute("id", "hand_half");
document.querySelector("#main").appendChild(hand_half);
//יצירת התמונה של יד שמאל מגישה
let hand_serve = document.createElement("img");
hand_serve.setAttribute("src", "pictures/יד מגישה/0.png")
hand_serve.setAttribute("id", "hand_serve");
document.querySelector("#main").appendChild(hand_serve);
//יצירת התמונה של היד לוקחת אוכל
let hand
//יד לוקחת חומוס
for (let i = 0; i < 2; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/חומוס/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    document.querySelector("#main").appendChild(hand);
}
//יד לוקחת סלט
for (let i = 0; i < 3; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/סלט/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    document.querySelector("#main").appendChild(hand);
}
//יד לוקחת פלאפל
for (let i = 0; i < 3; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/פלאפל/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    document.querySelector("#main").appendChild(hand);
}
//יד לוקחת ציפס
for (let i = 0; i < 2; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/ציפס/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    document.querySelector("#main").appendChild(hand);
}
let arr0 = ["pictures/חומוס/0.png","pictures/סלט/0.png","pictures/פלאפל/0.png","pictures/ציפס/0.png"]
let arr_hummus = ["pictures/חומוס/0.png", "pictures/חומוס/1.png", "pictures/חומוס/2.png", "pictures/חומוס/3.png", "pictures/חומוס/4.png"];
let arr_salad = ["pictures/סלט/0.png", "pictures/סלט/1.png", "pictures/סלט/2.png", "pictures/סלט/3.png", "pictures/סלט/4.png"];
let arr_falafel = ["pictures/פלאפל/0.png", "pictures/פלאפל/1.png", "pictures/פלאפל/2.png", "pictures/פלאפל/3.png", "pictures/פלאפל/4.png"];
let arr_chips = ["pictures/ציפס/0.png", "pictures/ציפס/1.png", "pictures/ציפס/2.png", "pictures/ציפס/3.png", "pictures/ציפס/4.png"];
let a;
let aChild;
let b;

//יצירת מספרים רנדומליים לשלטים
let rChumus = Math.floor(Math.random() * 3) + 1
let rSalat = Math.floor(Math.random() * 3) + 1
let rFalafel = Math.floor(Math.random() * 3) + 1
let rChips = Math.floor(Math.random() * 3) + 1

let tt;
let ttX
//כשכל השלטים ריקים, אז ניצור מספרים רנדומליים חדשים
while (rChips == 0 && rChumus == 0 && rSalat == 0 && rFalafel == 0) {
    rChumus = Math.floor(Math.random() * 3) + 1
    rSalat = Math.floor(Math.random() * 3) + 1
    rFalafel = Math.floor(Math.random() * 3) + 1
    rChips = Math.floor(Math.random() * 3) + 1
}
//יצירת התמונות של האוכל במגשים
let div_to_food
let food_in_tray
for (let i = 1; i < 5; i++) {
    div_to_food = document.createElement("div");
    div_to_food.setAttribute("id", "d" + i);
    food_in_tray = document.createElement("img")
    food_in_tray.setAttribute("id", "food_in_tray")
    food_in_tray.setAttribute("src", arr0[i-1])
    div_to_food.appendChild(food_in_tray);
    document.querySelector("#main").appendChild(div_to_food);
}
//יצירת ה div לאנשים
let peoples
for (let i = 0; i < 4; i++) {
    peoples = document.createElement("div");
    peoples.setAttribute("id", "p" + i);
    document.querySelector("#main").appendChild(peoples);
}
//יצירת מד עצבים
let nerv
let one_nerv
for (let i = 0; i < 4; i++) {
    nerv = document.createElement("div");
    nerv.setAttribute("id", "a" + i);
    //ריבוע בודד במד עצבים
    for (let j = 4; j >= 0; j--) {
        one_nerv = document.createElement("div");
        one_nerv.setAttribute("class", "j" + j)
        nerv.appendChild(one_nerv);
    }
    document.querySelector("#main").appendChild(nerv);
}
//יצירת ה div לשלטים של המספרים
let number_div
for (let i = 0; i < 4; i++) {
    number_div = document.createElement("div");
    number_div.setAttribute("id", "n" + i);
    let text;
    switch (i) {
        case 0:
            text = rChumus;
            number_div.style.left = "31vw"
            number_div.style.top = "80vh"
            break;
        case 1:
            text = rSalat;
            number_div.style.left = "30vw"
            number_div.style.top = "69vh"
            break;
        case 2:
            text = rFalafel;
            number_div.style.left = "13vw"
            number_div.style.top = "78vh"
            break;
        case 3:
            text = rChips;
            number_div.style.left = "15vw"
            number_div.style.top = "66vh"
            break;
        default:
            break;
    }
    numR = document.createTextNode(text);
    number_div.appendChild(numR);
    document.querySelector("#main").appendChild(number_div);
}
//יצירת התמונה של איש התחזוקה
let person = document.createElement("img");
let open_person = document.createElement("img");
//כשהוא יושב
person.setAttribute("src", "pictures/a.png")
person.setAttribute("id", "person")
person.addEventListener("click", addFood)
document.querySelector("div").appendChild(person);
//כשהוא עומד ומגיש
open_person.setAttribute("src", "pictures/b.png")
open_person.setAttribute("id", "open_person")
document.querySelector("#main").appendChild(open_person);
//יצירת האוכל במגשים של איש התחזוקה
let food_person
for (let i = 0; i < 4; i++) {
    food_person = document.createElement("div")
    food_person.setAttribute("id", "o" + i);
    food_person.addEventListener("click", addOneFood)
    document.querySelector("#main").appendChild(food_person);
}
function pitaFunc() {
    event.target.removeEventListener("click", pitaFunc)
    funcPitaFunc(0)
    setTimeout(() => funcPitaFunc(1), 100);
    for (let i = 1; i < 5; i++) {
        document.querySelector("#d" + i).addEventListener("click", choose)
    }
}
function funcPitaFunc(x) {
    switch (x) {
        case 0:
            hand_take_pita.style.display = "block";
            hand_without_pita.style.display = "none";
            break;
        case 1:
            hand_take_pita.style.display = "none";
            hand_with_pita.style.display = "block";
            break;
        default:
            break;
    }
}
function addFood() {
    for (let i = 0; i < 4; i++) {
        document.querySelector("#o" + i).addEventListener("click", addOneFood)
    }
    event.target.style.display = "none"
    event.target.removeEventListener("click", addFood)
    open_person.style.display = "block";
    open_person.addEventListener("click", closeFood);
    let food;
    for (let i = 0; i < 4; i++) {
        document.querySelector("#o" + i).style.zIndex = 15;
    }
    let txt = "";
    let xxx = document.querySelector("#d1").children[0].src.slice(document.querySelector("#d1").children[0].src.length - 5, document.querySelector("#d1").children[0].src.length - 4)
    switch (xxx) {
        case "0":
            txt = "100%"
            break;
        case "1":
            txt = "75%"
            break;
        case "2":
            txt = "50%"
            break;
        case "3":
            txt = "25%"
            break;
        case "4":
            txt = "0%"
            break;
        default:
            break;
    }
    let achuz = document.createTextNode(txt);
    document.querySelector("#d1").style.textAlign = "center"
    document.querySelector("#d1").style.vlAlign = "middle"
    document.querySelector("#d1").appendChild(achuz)
}
function closeFood() {
    event.target.style.display = "none";
    event.target.removeEventListener("click", closeFood)
    person.style.display = "block"
    person.addEventListener("click", addFood)
    for (let i = 0; i < 4; i++) {
        document.querySelector("#o" + i).style.zIndex = -2;
    }
}
function addOneFood() {
    let temp = Number(event.target.id.slice(1, 2));
    let temp1 = document.querySelector("#d" + (Number(temp) + 1));
    temp1.addEventListener("click", choose)
    x = 0;
    y = 0;
    z = 0;
    w = 0;
    let temp2 = Number(temp1.children[0].src.slice(temp1.children[0].src.length - 5, temp1.children[0].src.length - 4));
    switch (temp) {
        case 0:
            for (let i = 0; i < arr_hummus.length; i++) {
                if (temp2 == i) {
                    if (i == 0) {
                        event.target.removeEventListener("click", addOneFood)
                    }
                    else {
                        temp1.children[0].src = arr_hummus[i - 1];
                    }

                    break;
                }
            }
            break;
        case 1:
            for (let i = 0; i < arr_salad.length; i++) {
                if (temp2 == i) {
                    if (i == 0) {
                        event.target.removeEventListener("click", addOneFood)
                    }
                    else {
                        temp1.children[0].src = arr_salad[i - 1];
                    }
                    break;
                }
            }
            break;
        case 2:
            for (let i = 0; i < arr_falafel.length; i++) {
                if (temp2 == i) {
                    if (i == 0) {
                        event.target.removeEventListener("click", addOneFood)
                    }
                    else {
                        temp1.children[0].src = arr_falafel[i - 1];
                    }
                    break;
                }
            }
            break;
        case 3:
            for (let i = 0; i < arr_chips.length; i++) {
                if (temp2 == i) {
                    if (i == 0) {
                        event.target.removeEventListener("click", addOneFood)
                    }
                    else {
                        temp1.children[0].src = arr_chips[i - 1];
                    }
                    break;
                }
            }
            break;
        default:
            break;
    }
}
let x = 0;
let y = 0;
let z = 0;
let w = 0;

function changeHant2(ty, num) {
    switch (num) {
        case 0:
            document.querySelectorAll(".h0")[ty].style.display = "block";
            document.querySelector("#hand").style.display = "none";
            break;
        case 1:
            document.querySelectorAll(".h1")[ty].style.display = "block";
            document.querySelectorAll(".h0")[ty].style.display = "none";
            break;
        case 2:
            document.querySelector("#hand").style.display = "block";
            document.querySelectorAll(".h1")[ty].style.display = "none";
            break;
        default:
            break;
    }
}
function changeHant3(ty, num) {
    switch (num) {
        case 0:
            document.querySelectorAll(".h0")[ty].style.display = "block";
            document.querySelector("#hand").style.display = "none";
            break;
        case 1:
            document.querySelectorAll(".h1")[ty].style.display = "block";
            document.querySelectorAll(".h0")[ty].style.display = "none";
            break;
        case 2:
            document.querySelectorAll(".h2")[ty - 1].style.display = "block";
            document.querySelectorAll(".h1")[ty].style.display = "none";
            break;
        case 3:
            document.querySelector("#hand").style.display = "block";
            document.querySelectorAll(".h2")[ty - 1].style.display = "none";
            break;
        default:
            break;
    }
}
let ani;
function choose() {

    let r;
    switch (event.target.parentElement.id.slice(1, 2)) {
        case "1":

            if (x >= arr_hummus.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arr_hummus[x];
                setTimeout(() => changeHant2(0, 0), 100);
                setTimeout(() => changeHant2(0, 1), 200);
                setTimeout(() => changeHant2(0, 2), 300);
                if (rChumus != 0) {
                    if (rChumus == 1) {
                        document.querySelector("#s0").style.display = "block";
                    }
                    rChumus--;
                    document.querySelector("#n0").innerHTML = rChumus;
                    score.innerHTML = Number(score.innerHTML) + 1;
                }
                else {
                    score.innerHTML = Number(score.innerHTML) - 1;
                }
                x++;
            }
            break;
        case "2":
            if (y >= arr_salad.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arr_salad[y];
                setTimeout(() => changeHant3(1, 0), 100);
                setTimeout(() => changeHant3(1, 1), 200);
                setTimeout(() => changeHant3(1, 2), 300);
                setTimeout(() => changeHant3(1, 3), 400);
                if (rSalat != 0) {
                    if (rSalat == 1) {
                        document.querySelector("#s1").style.display = "block";
                    }
                    rSalat--;
                    document.querySelector("#n1").innerHTML = rSalat;
                    score.innerHTML = Number(score.innerHTML) + 1;
                }
                else {
                    score.innerHTML = Number(score.innerHTML) - 1;
                }
                y++;
            }
            break;
        case "3":

            if (z >= arr_falafel.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arr_falafel[z];
                setTimeout(() => changeHant3(2, 0), 100);
                setTimeout(() => changeHant3(2, 1), 200);
                setTimeout(() => changeHant3(2, 2), 300);
                setTimeout(() => changeHant3(2, 3), 400);
                if (rFalafel != 0) {
                    if (rFalafel == 1) {
                        document.querySelector("#s2").style.display = "block";
                    }
                    rFalafel--;
                    document.querySelector("#n2").innerHTML = rFalafel;
                    score.innerHTML = Number(score.innerHTML) + 1;
                }
                else {
                    score.innerHTML = Number(score.innerHTML) - 1;
                }
                z++;
            }
            break
        case "4":
            if (w >= arr_chips.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arr_chips[w];
                setTimeout(() => changeHant2(3, 0), 100);
                setTimeout(() => changeHant2(3, 1), 200);
                setTimeout(() => changeHant2(3, 2), 300);
                if (rChips != 0) {
                    if (rChips == 1) {
                        document.querySelector("#s3").style.display = "block";
                    }
                    rChips--;
                    document.querySelector("#n3").innerHTML = rChips;
                    score.innerHTML = Number(score.innerHTML) + 1;
                }
                else {
                    score.innerHTML = Number(score.innerHTML) - 1;
                }
                w++;
            }
            break;
        default:
            break;
    }
    if ((rChips <= 0) && (rFalafel <= 0) && (rChumus <= 0) && (rSalat <= 0)) {
        for (let i = 0; i < 4; i++) {
            if (document.querySelector("#p" + i).children[0] != null) {
                document.querySelector("#p" + i).children[0].addEventListener("click", ready)
            }
        }
    }
}
let arrChosenPeople = [];

let arrPeople =
    [
        ["pictures/אנשים/0/0.png", "pictures/אנשים/0/1.png", "pictures/אנשים/0/2.png", "pictures/אנשים/0/3.png"],
        ["pictures/אנשים/1/0.png", "pictures/אנשים/1/1.png", "pictures/אנשים/1/2.png", "pictures/אנשים/1/3.png"],
        ["pictures/אנשים/2/0.png", "pictures/אנשים/2/1.png", "pictures/אנשים/2/2.png", "pictures/אנשים/2/3.png"],
        ["pictures/אנשים/3/0.png", "pictures/אנשים/3/1.png", "pictures/אנשים/3/2.png", "pictures/אנשים/3/3.png"],
        ["pictures/אנשים/4/0.png", "pictures/אנשים/4/1.png", "pictures/אנשים/4/2.png", "pictures/אנשים/4/3.png"],
        ["pictures/אנשים/5/0.png", "pictures/אנשים/5/1.png", "pictures/אנשים/5/2.png", "pictures/אנשים/5/3.png"]
    ];
let arrEmptyPeople = [0, 1, 2, 3, 4, 5];
let arrEmpty = [0, 1, 2, 3];
let rTime = (Math.random() * 5000) + 5000;
let t = setInterval("people()", rTime)
let arrInte = [];
let arrAniInte = [];
function people() {
    let r1person;
    let rperson;
    r1person = Math.floor(Math.random() * ((arrEmptyPeople.length) - 1))
    rperson = arrEmptyPeople[r1person];
    arrEmptyPeople[r1person] = arrEmptyPeople[arrEmptyPeople.length - 1]
    arrEmptyPeople.pop();
    let rplace;
    let place;
    if (arrEmpty.length == 0) {
        clearInterval(t);
    }
    else {
        rplace = Math.floor(Math.random() * ((arrEmpty.length) - 1))
        place = arrEmpty[rplace];
        arrEmpty[rplace] = arrEmpty[(arrEmpty.length) - 1]
        arrEmpty.pop();
        a = document.createElement("img");
        a.setAttribute("src", arrPeople[rperson][0]);
        a.style.position = "absolute"
        a.style.bottom = "0"
        a.style.left = "67vw"
        a.style.bottom = "27vh"
        if (rChips == 0 && rFalafel == 0 && rChumus == 0 && rSalat == 0) {
            a.addEventListener("click", ready)
        }
        document.querySelector("#main").appendChild(a)
        ani = setInterval(() => move(place, a), 1);
        let tempArr = [place, ani]
        arrAniInte.push(tempArr);
        nervious(rperson, place);
    }
}
function move(place, an) {
    let eyeCP1
    let eyeCP
    let leftValueVw = Math.ceil((parseFloat(window.getComputedStyle(document.querySelector("#p"+place)).getPropertyValue("left")) / window.innerWidth) * 100);
    if (an.style.left == leftValueVw+"vw") {
        for (let i = 0; i < arrAniInte.length; i++) {
            if (arrAniInte[i][0] == place) {
                eyeCP1 = [place, setInterval(() => eyeclosePFunc(an.src.slice(an.src.length - 7, an.src.length - 6), place), 300)];
                arrAniEys1.push(eyeCP1);
                eyeCP = [place, setInterval(() => eyePFunc(an.src.slice(an.src.length - 7, an.src.length - 6), place), 2700)];
                arrAniEys.push(eyeCP);
                clearInterval(arrAniInte[i][1]);
            }
        }
        document.querySelector("#p" + place).appendChild(an)
        an.style.bottom = "0"
        an.style.left = "0"
    }
    else {
        let temp = Number(an.style.left.slice(0, an.style.left.length - 2))
        temp = temp - 0.1;
        an.style.left = temp + "vw";
    }
}
function nervious(rperson, place) {
    let m = 0;
    let rNer = (Math.random() * 40000) + 60000;
    let num5 = rNer / 5;
    let eyeNECP1;
    let eyeNECP;
    tt = setInterval(() => nervBigDiv(place, m), num5)
    ttX = setInterval(function () {
        m++;
        if (m >= 3) {
            for (let i = 0; i < arrAniEys.length; i++) {
                if (arrAniEys[i][0] == place) {
                    clearInterval(arrAniEys[i][1])
                }
            }
            for (let i = 0; i < arrAniEys1.length; i++) {
                if (arrAniEys1[i][0] == place) {
                    clearInterval(arrAniEys1[i][1])
                }
            }
            eyeNECP1 = [place, setInterval(() => eyecloseNEPFunc(document.querySelector("#p" + place).children[0].src.slice(document.querySelector("#p" + place).children[0].src.length - 7, document.querySelector("#p" + place).children[0].src.length - 6), place), 500)];
            arrAniEysN1.push(eyeNECP1);
            eyeNECP = [place, setInterval(() => eyeNEPFunc(document.querySelector("#p" + place).children[0].src.slice(document.querySelector("#p" + place).children[0].src.length - 7, document.querySelector("#p" + place).children[0].src.length - 6), place), 300)];
            arrAniEysN.push(eyeNECP);
        }
        if (m == 6) {
            for (let i = 0; i < arrAniEys.length; i++) {
                clearInterval(arrAniEys[i][1]);
            }
            for (let i = 0; i < arrAniEys1.length; i++) {
                clearInterval(arrAniEys1[i][1]);
            }
            for (let i = 0; i < arrAniEysN.length; i++) {
                clearInterval(arrAniEysN[i][1]);
            }
            for (let i = 0; i < arrAniEysN1.length; i++) {
                clearInterval(arrAniEysN1[i][1]);
            }
            for (let i = 0; i < arrInte.length; i++) {
                clearInterval(arrInte[i][1])
                clearInterval(arrInte[i][2])
            }
            if (localStorage.getItem("c") == null) {
                localStorage.setItem("c", score.innerHTML);
            }
            else {
                if (Number(score.innerHTML) > Number(localStorage.getItem("c"))) {
                    localStorage.setItem("c", score.innerHTML);
                }
            }
            localStorage.setItem("now", score.innerHTML);
            clearInterval(t);
            let video = document.createElement("video");
            video.setAttribute("autoplay", "true")
            video.setAttribute("muted", "true")
            video.controls = false;
            let source = document.createElement("source");
            source.src = "pictures/סיום.mp4"
            source.type = "video/mp4"
            video.appendChild(source);
            video.style.position = "absolute"
            video.style.height = "98vh"
            video.style.marginLeft = "17.5vw"
            document.querySelector("body").removeChild(document.querySelector("body").children[0])
            document.body.appendChild(video)
            setTimeout("finish()", 5000)
        }
    }, num5);
    let temp = [place, tt, ttX];
    arrInte.push(temp);
}
function finish() {
    window.location.href = "finish.html";
}
function nervBigDiv(place, m) {
    switch (m) {
        case 0:
            document.querySelectorAll(".j0")[place].style.backgroundColor = "#339900"
            break;
        case 1:
            document.querySelectorAll(".j1")[place].style.backgroundColor = "#448800"
            break;
        case 2:
            document.querySelectorAll(".j2")[place].style.backgroundColor = "#715A00"
            break;
        case 3:
            document.querySelectorAll(".j3")[place].style.backgroundColor = "#933800"
            break;
        case 4:
            document.querySelectorAll(".j4")[place].style.backgroundColor = "#B51600"
            break;
        default:
            break;
    }
}
function rand4num() {
    rChumus = Math.floor(Math.random() * 3) + 1
    document.querySelector("#n0").innerHTML = rChumus;
    rSalat = Math.floor(Math.random() * 3) + 1
    document.querySelector("#n1").innerHTML = rSalat;
    rFalafel = Math.floor(Math.random() * 3) + 1
    document.querySelector("#n2").innerHTML = rFalafel;
    rChips = Math.floor(Math.random() * 3) + 1
    document.querySelector("#n3").innerHTML = rChips;
}
function YadMegish(x, y) {
    switch (x) {
        case "0":
            switch (y) {
                case 0:
                    document.querySelector("#hand_half").style.display = "block"
                    document.querySelector("#hand_half").style.width = "15vw"
                    document.querySelector("#hand_half").style.left = "25vw"
                    break;
                case 1:
                    document.querySelector("#hand_serve").style.width = "20vw"
                    document.querySelector("#hand_serve").style.display = "block"
                    document.querySelector("#hand_serve").style.left = "23vw"
                    document.querySelector("#hand_half").style.display = "none"
                    break;
                case 2:
                    hand_without_pita.style.display = "block"
                    document.querySelector("#hand_serve").style.display = "none"
                    break;
                default:
                    break;
            }
            break;
        case "1":
            switch (y) {
                case 0:
                    document.querySelector("#hand_half").style.display = "block"
                    document.querySelector("#hand_half").style.width = "15vw"
                    document.querySelector("#hand_half").style.left = "25vw"
                    break;
                case 1:
                    document.querySelector("#hand_serve").style.width = "20vw"
                    document.querySelector("#hand_serve").style.display = "block"
                    document.querySelector("#hand_serve").style.left = "23vw"
                    document.querySelector("#hand_half").style.display = "none"
                    break;
                case 2:
                    hand_without_pita.style.display = "block"
                    document.querySelector("#hand_serve").style.display = "none"
                    break;
                default:
                    break;
            }
            break;
        case "2":
            switch (y) {
                case 0:
                    document.querySelector("#hand_half").style.display = "block"
                    document.querySelector("#hand_half").style.width = "15vw"
                    document.querySelector("#hand_half").style.left = "45vw"
                    break;
                case 1:
                    document.querySelector("#hand_serve").style.width = "20vw"
                    document.querySelector("#hand_serve").style.display = "block"
                    document.querySelector("#hand_serve").style.left = "43vw"
                    document.querySelector("#hand_half").style.display = "none"
                    break;
                case 2:
                    hand_without_pita.style.display = "block"
                    document.querySelector("#hand_serve").style.display = "none"
                    break;
                default:
                    break;
            }
            break;
        case "3":
            switch (y) {
                case 0:
                    document.querySelector("#hand_half").style.display = "block"
                    document.querySelector("#hand_half").style.width = "15vw"
                    document.querySelector("#hand_half").style.left = "45vw"
                    break;
                case 1:
                    document.querySelector("#hand_serve").style.width = "20vw"
                    document.querySelector("#hand_serve").style.display = "block"
                    document.querySelector("#hand_serve").style.left = "43vw"
                    document.querySelector("#hand_half").style.display = "none"
                    break;
                case 2:
                    hand_without_pita.style.display = "block"
                    document.querySelector("#hand_serve").style.display = "none"
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

}
function ready() {
    for (let i = 0; i < arrAniEys.length; i++) {
        clearInterval(arrAniEys[i][1]);
    }
    for (let i = 0; i < arrAniEys1.length; i++) {
        clearInterval(arrAniEys1[i][1]);
    }
    for (let i = 0; i < arrAniEysN.length; i++) {
        clearInterval(arrAniEysN[i][1]);
    }
    for (let i = 0; i < arrAniEysN1.length; i++) {
        clearInterval(arrAniEysN1[i][1]);
    }
    for (let i = 0; i < 4; i++) {
        document.querySelector("#s" + i).style.display = "none"
    }
    score.innerHTML = Number(score.innerHTML) + 5;
    let temp = event.target.parentElement.id.slice(1, 2);
    let
        temp1 = event.target;
    let num = temp1.src.slice(temp1.src.length - 7, temp1.src.length - 6)
    arrEmpty.push(Number(temp))
    arrEmptyPeople.push(Number(num));
    if (arrEmpty.length == 1) {
        clearInterval(t);
        t = setInterval("people()", rTime)
    }
    hand_with_pita.style.display = "none"
    setTimeout(() => YadMegish(temp, 0), 100);
    setTimeout(() => YadMegish(temp, 1), 200);
    setTimeout(() => YadMegish(temp, 2), 300);
    setTimeout(() => new function () {
        temp1.src = "pictures/מרוצים/" + num + ".png";
        switch (temp) {
            case "0":
                temp1.style.left = "17vw"
                break;
            case "1":
                temp1.style.left = "27vw"
                break;
            case "2":
                temp1.style.left = "37vw"
                break;
            case "3":
                temp1.style.left = "45.8vw"
                break;
            default:
                break;
        }
        temp1.style.zIndex = "3";
        temp1.style.bottom = "27.5vh";
        document.querySelector("#main").appendChild(temp1);
        let intt = setInterval(() => remove(temp1, intt), 1)
    }, 400)
    pita.addEventListener("click", pitaFunc)
    for (let i = 1; i < 5; i++) {
        document.querySelector("#d" + i).removeEventListener("click", choose)
    }
    for (let i = 0; i < 4; i++) {
        if (document.querySelector("#p" + i).children[0] != null) {
            document.querySelector("#p" + i).children[0].removeEventListener("click", ready)
        }
    }
    for (let i = 0; i < arrChosenPeople.length; i++) {
        if (arrChosenPeople[i] == event.target.id.slice(1, 2)) {
            arrChosenPeople[i] = arrChosenPeople[arrChosenPeople.length - 1];
            arrChosenPeople.pop()
        }
    }
    for (let i = 0; i < 5; i++) {
        document.querySelector("#a" + event.target.parentElement.id.slice(1, 2)).children[i].style.backgroundColor = "#ffffff"
    }
    for (let i = 0; i < arrInte.length; i++) {
        if (arrInte[i][0] == event.target.parentElement.id.slice(1, 2)) {
            clearInterval(arrInte[i][1])
            clearInterval(arrInte[i][2])
            arrInte[i][0] = arrInte[arrInte.length - 1][0];
            arrInte[i][1] = arrInte[arrInte.length - 1][1];
            arrInte[i][2] = arrInte[arrInte.length - 1][2];
            arrInte.pop();
        }
    }
    rand4num();
}
function remove(an, inttt) {
    let tempp = Number(an.style.left.slice(0, an.style.left.length - 2))
    if (tempp < 67) {
        tempp = tempp + 0.1;
        an.style.left = tempp + "vw"
    }
    else {
        clearInterval(inttt);
        for (let i = 0; i < arrAniEys.length; i++) {
            if (arrAniEys[i][0] == an.parentElement.id.slice(1, 2)) {
                clearInterval(arrAniEys[i][1])
            }
        }
        for (let i = 0; i < arrAniEys1.length; i++) {
            if (arrAniEys1[i][0] == an.parentElement.id.slice(1, 2)) {
                clearInterval(arrAniEys1[i][1])
            }
        }
    }
}



let eyeCP1 = setInterval("eyecloseCPFunc()", 300);
let eyeCP = setInterval("eyeCPFunc()", 2700);
function eyeCPFunc() {
    person.src = "pictures/a1.png"
}
function eyecloseCPFunc() {
    person.src = "pictures/a.png"
}
let eyeOCP1 = setInterval("eyecloseOCPFunc()", 300);
let eyeOCP = setInterval("eyeOCPFunc()", 2700);
function eyeOCPFunc() {
    open_person.src = "pictures/b1.png"
}
function eyecloseOCPFunc() {
    open_person.src = "pictures/b.png"
}
function eyePFunc(id, place11) {
    if ((document.querySelector("#p" + place11).children[0]) && id) {
        document.querySelector("#p" + place11).children[0].src = arrPeople[id][1]
    }
}
function eyeclosePFunc(id, place11) {
    if ((document.querySelector("#p" + place11).children[0])) {
        document.querySelector("#p" + place11).children[0].src = arrPeople[id][0]
    }
}
function eyeNEPFunc(id, place11) {
    if ((document.querySelector("#p" + place11).children[0])) {
        document.querySelector("#p" + place11).children[0].src = arrPeople[Number(id)][2]
    }
}
function eyecloseNEPFunc(id, place11) {
    if ((document.querySelector("#p" + place11).children[0])) {
        document.querySelector("#p" + place11).children[0].src = arrPeople[Number(id)][3]
    }
}