let arrAniEys1=[];
let arrAniEys=[];
let arrAniEysN1=[];
let arrAniEysN=[];
let phone= document.createElement("img");
phone.setAttribute("src","pictures/טלפון.png")
phone.style.position="absolute"
phone.style.zIndex="3";
phone.style.bottom="5.5vh";
phone.style.left="57.1vw";
document.querySelector("#main").appendChild(phone);
let nikud=document.createElement("div")
nikud.style.position="absolute"
nikud.style.left="6vw"
nikud.style.width="5vw"
nikud.style.height="4vw"
nikud.style.top="2.5vw"
nikud.style.fontSize="22px"
nikud.style.textAlign="center"
nikud.style.fontWeight = "800"
nikud.style.fontFamily = "Segoe UI"
let nikudT=document.createTextNode("0");
nikud.appendChild(nikudT);
nikud.style.backgroundColor="#FFFFCD"
document.querySelector("#main").appendChild(nikud);
let pita= document.createElement("img");
pita.setAttribute("src","pictures/ערמת פתות.png")
pita.style.position="absolute"
pita.style.zIndex="4";
pita.style.bottom="14.9vh";
pita.style.left="51vw";
pita.addEventListener("click",pitaFunc)
document.querySelector("#main").appendChild(pita);
let pitabli= document.createElement("img");
pitabli.setAttribute("src","pictures/יד בלי פיתה.png")
pitabli.style.position="absolute"
pitabli.style.zIndex="4";
pitabli.style.bottom="0vh";
pitabli.style.left="57vw";
document.querySelector("#main").appendChild(pitabli);
let pitahalf= document.createElement("img");
pitahalf.setAttribute("src","pictures/יד באמצע לקחת פיתה.png")
pitahalf.style.position="absolute"
pitahalf.style.zIndex="4";
pitahalf.style.bottom="0vh";
pitahalf.style.right="-60.5vw";
pitahalf.style.display="none";
document.querySelector("#main").appendChild(pitahalf);
let pitawith= document.createElement("img");
pitawith.setAttribute("src","pictures/יד עם פיתה.png")
pitawith.style.position="absolute"
pitawith.style.zIndex="4";
pitawith.style.bottom="0vh";
pitawith.style.left="48vw";
pitawith.style.display="none";
document.querySelector("#main").appendChild(pitawith);
let single;
for (let i = 0; i < 4; i++) {
    single= document.createElement("img");
    single.setAttribute("src","pictures/בודד/"+i+".png")
    single.setAttribute("id","s"+i)
    single.style.position="absolute"
    single.style.zIndex="4";
    single.style.display="none";
    switch (i) {
        case 0:
            single.style.left="48vw";
            single.style.bottom="11vh";
            single.style.width="18vw";
            break;
        case 1:
            single.style.left="52vw";
            single.style.bottom="12vh";
            single.style.width="10vw";
            break;
        case 2:
            single.style.left="55vw";
            single.style.bottom="14.5vh";
            single.style.width="10vw";
            break;
        case 3:
            single.style.left="45vw";
            single.style.bottom="13vh";
            single.style.width="12vw";
            break;
        default:
            break;
    }
    document.querySelector("#main").appendChild(single);
}
let hand= document.createElement("img");
hand.setAttribute("src", "pictures/יד לוקחת.png")
hand.style.position = "absolute";
hand.setAttribute("id", "hand");
hand.style.bottom = "0";
hand.style.left ="0vw";
hand.style.bottom="0vw";
hand.style.zIndex="5"
document.querySelector("#main").appendChild(hand);
let handkazar= document.createElement("img");
handkazar.setAttribute("src", "pictures/יד מגישה/0.png")
handkazar.style.position = "absolute";
handkazar.setAttribute("id","k0");
handkazar.style.bottom = "0";
handkazar.style.zIndex="5"
handkazar.style.height="20vh"
handkazar.style.display="none"
document.querySelector("#main").appendChild(handkazar);
let handaroch= document.createElement("img");
handaroch.setAttribute("src", "pictures/יד מגישה/0.png")
handaroch.style.position = "absolute";
handaroch.setAttribute("id", "k1");
handaroch.style.bottom = "0";
handaroch.style.zIndex="5"
handaroch.style.display="none"
document.querySelector("#main").appendChild(handaroch);
//יד לוקחת חומוס
for (let i = 0; i < 2; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/חומוס/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    hand.style.display = "none";
    hand.style.position = "absolute";
    hand.style.bottom = "0";
    hand.style.zIndex="5"
    document.querySelector("#main").appendChild(hand);
}
//יד לוקחת סלט
for (let i = 0; i < 3; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/סלט/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    hand.style.display = "none";
    hand.style.position = "absolute";
    hand.style.bottom = "0";
    hand.style.zIndex="5"
    document.querySelector("#main").appendChild(hand);
}
//יד לוקחת פלאפל
for (let i = 0; i < 3; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/פלאפל/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    hand.style.display = "none";
    hand.style.position = "absolute";
    hand.style.bottom = "0vh";
    hand.style.zIndex="5"
    document.querySelector("#main").appendChild(hand);
}
//יד לוקחת ציפס
for (let i = 0; i < 2; i++) {
    hand = document.createElement("img");
    hand.setAttribute("src", "pictures/יד לוקחת/ציפס/" + i + ".png")
    hand.setAttribute("class", "h" + i);
    hand.style.display = "none";
    hand.style.position = "absolute";
    hand.style.bottom = "0";
    hand.style.zIndex="5"
    document.querySelector("#main").appendChild(hand);
}
let arrChumus = ["pictures/חומוס/0.png", "pictures/חומוס/1.png", "pictures/חומוס/2.png", "pictures/חומוס/3.png", "pictures/חומוס/4.png"];
let arrSalat = ["pictures/סלט/0.png", "pictures/סלט/1.png", "pictures/סלט/2.png", "pictures/סלט/3.png", "pictures/סלט/4.png"];
let arrFalafel = ["pictures/פלאפל/0.png", "pictures/פלאפל/1.png", "pictures/פלאפל/2.png", "pictures/פלאפל/3.png", "pictures/פלאפל/4.png"];
let arrChips = ["pictures/ציפס/0.png", "pictures/ציפס/1.png", "pictures/ציפס/2.png", "pictures/ציפס/3.png", "pictures/ציפס/4.png"];
let a;
let aChild;
let b;

let rChumus = Math.floor(Math.random() * 3)+1
let rSalat = Math.floor(Math.random() * 3)+1
let rFalafel = Math.floor(Math.random() * 3)+1
let rChips = Math.floor(Math.random() * 3)+1
let tt;
let ttX
while (rChips == 0 && rChumus == 0 && rSalat == 0 && rFalafel == 0) {
    rChumus = Math.floor(Math.random() * 3)+1
    rSalat = Math.floor(Math.random() * 3)+1
    rFalafel = Math.floor(Math.random() * 3)+1
    rChips = Math.floor(Math.random() * 3)+1
}
for (let i = 1; i < 5; i++) {
    a = document.createElement("div");
    a.style.position = "absolute"
    aChild = document.createElement("img")
    aChild.style.width = "100%"
    aChild.style.height = "100%"
    aChild.style.bottom = "0";
    switch (i) {
        case 1:
            a.style.left = "33.7vw"
            a.style.bottom = "0.8vh"
            a.style.width = "15vw";
            aChild.setAttribute("src", arrChumus[0])
            break;
        case 2:
            a.style.left = "33.7vw"
            a.style.bottom = "15vh"
            a.style.width = "13vw";
            aChild.setAttribute("src", arrSalat[0])
            aChild.style.position = "absolute"
            break;
        case 3:
            a.style.left = "15vw"
            a.style.bottom = "1vh"
            a.style.width = "18vw";
            aChild.setAttribute("src", arrFalafel[0])
            break;
        case 4:
            a.style.left = "18vw"
            a.style.bottom = "14.7vh"
            a.style.width = "13vw";
            aChild.setAttribute("src", arrChips[0])
            aChild.style.position = "absolute"
            break;
        default:
            break;
    }
    a.appendChild(aChild);
    a.style.height = "10vh";
    a.style.zIndex = "3";
    a.setAttribute("id", "d" + i);
    document.querySelector("#main").appendChild(a);
}
for (let i = 0; i < 4; i++) {
    a = document.createElement("div");
    a.style.position = "absolute";
    switch (i) {
        case 0:
            a.style.left = "17vw"
            a.style.top = "17vw"
            break;
        case 1:
            a.style.left = "27vw"
            a.style.top = "17vw"
            break;
        case 2:
            a.style.left = "37vw"
            a.style.top = "16.5vw"
            break;
        case 3:
            a.style.left = "45.8vw"
            a.style.top = "16.15vw"
            break;
        default:
            break;
    }
    
    a.style.width = "12vw";
    a.style.height = "35vh";
    a.style.zIndex = "3";
    a.setAttribute("id", "p" + i);
    document.querySelector("#main").appendChild(a);
}
for (let i = 0; i < 4; i++) {
    a = document.createElement("div");
    a.style.position = "absolute";
    a.style.border = "2px solid black"
    a.style.width = "1.3vw";
    a.style.height = "15vh";
    a.style.top = "1vh";
    a.setAttribute("id", "a" + i);
    a.style.backgroundColor = "white";
    for (let j = 4; j >= 0; j--) {
        aChild = document.createElement("div");
        aChild.style.border = "1px solid black"
        aChild.style.width = a.style.width;
        aChild.style.height = "2.8vh";
        aChild.setAttribute("class", "j" + j)
        a.appendChild(aChild);
    }
    switch (i) {
        case 0:
            a.style.left = "20vw"
            break;
        case 1:
            a.style.left = "30vw"
            break;
        case 2:
            a.style.left = "40vw"
            break;
        case 3:
            a.style.left = "50vw"
            break;
        case 4:
            a.style.left = "78vw"
            break;
        default:
            break;
    }
    document.querySelector("#main").appendChild(a);
}
for (let i = 0; i < 4; i++) {
    a = document.createElement("div");
    a.style.position = "absolute";
    a.style.width = "5vw";
    a.style.textAlign = "center"
    a.style.height = "5vh";
    a.style.zIndex = "3";
    a.style.fontWeight = "800"
    a.style.fontFamily = "Segoe UI"
    a.style.fontSize = "24px"
    switch (i) {
        case 0:
            a.style.left = "31vw"
            a.style.top = "80vh"
            break;
        case 1:
            a.style.left = "30vw"
            a.style.top = "69vh"
            break;
        case 2:
            a.style.left = "13vw"
            a.style.top = "78vh"
            break;
        case 3:
            a.style.left = "15vw"
            a.style.top = "66vh"
            break;
        default:
            break;
    }
    a.setAttribute("id", "n" + i);
    let text;
    switch (i) {
        case 0:
            text = rChumus;
            break;
        case 1:
            text = rSalat;
            break;
        case 2:
            text = rFalafel;
            break;
        case 3:
            text = rChips;
            break;
        default:
            break;
    }
    b = document.createTextNode(text);
    a.appendChild(b);
    document.querySelector("#main").appendChild(a);
}
let openPerson = document.createElement("img");
let person = document.createElement("img");
person.setAttribute("src", "pictures/a.png")
person.style.position = "absolute"
person.style.top = "47.2vh"
person.style.left = "3.2vw"
person.addEventListener("click", addFood)
document.querySelector("div").appendChild(person);
openPerson.setAttribute("src", "pictures/b.png")
openPerson.style.position = "absolute"
openPerson.style.top = "20vh"
openPerson.style.left = "1.4vw"
openPerson.style.zIndex = "10"
openPerson.style.display = "none"
document.querySelector("#main").appendChild(openPerson);
for (let i = 0; i < 4; i++) {
    a = document.createElement("div")
    a.style.width = "3vw"
    a.style.height = "12vh"
    a.style.position = "absolute"
    a.style.zIndex = "-2"
    a.setAttribute("id", "o" + i);
    a.addEventListener("click", addOneFood)
    switch (i) {
        case 0:
            a.style.top = "48vh"
            a.style.left = "26.5vw"
            break;
        case 1:
            a.style.top = "60vh"
            a.style.left = "16vw"
            break;
        case 2:
            a.style.top = "52vh"
            a.style.left = "23vw"
            break;
        case 3:
            a.style.top = "57vh"
            a.style.left = "20vw"
            break;

        default:
            break;
    }
    document.querySelector("#main").appendChild(a);
}
function pitaFunc()
{
    event.target.removeEventListener("click",pitaFunc)
    funcPitaFunc(0)
    setTimeout(() => funcPitaFunc(1), 100);
    for (let i = 1; i < 5; i++) {
        document.querySelector("#d"+i).addEventListener("click",choose)
    }
}
function funcPitaFunc(x)
{
    switch (x) {
        case 0:
            pitahalf.style.display = "block";
            pitabli.style.display = "none";
            break;
        case 1:
            pitahalf.style.display = "none";
            pitawith.style.display = "block";
            break;
        default:
            break;
    }
}
function addFood() {
    for (let i = 0; i < 4; i++) {
       document.querySelector("#o"+i).addEventListener("click",addOneFood) 
    }
    event.target.style.display = "none"
    event.target.removeEventListener("click", addFood)
    openPerson.style.display = "block";
    openPerson.addEventListener("click", closeFood);
    let food;
    for (let i = 0; i < 4; i++) {
        document.querySelector("#o" + i).style.zIndex = 15;
    }
    let txt="";
    let xxx=document.querySelector("#d1").children[0].src.slice(document.querySelector("#d1").children[0].src.length-5,document.querySelector("#d1").children[0].src.length-4)
    switch (xxx) {
        case "0":
            txt="100%"
            break;
        case "1":
            txt="75%"
            break;
        case "2":
            txt="50%"
            break;
        case "3":
            txt="25%"
            break;
        case "4":
            txt="0%"
            break;
        default:
            break;
    }
    let achuz=document.createTextNode(txt);
    document.querySelector("#d1").style.textAlign="center"
    document.querySelector("#d1").style.vlAlign="middle"
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
    x=0;
    y=0;
    z=0;
    w=0;
    let temp2 = Number(temp1.children[0].src.slice(temp1.children[0].src.length - 5, temp1.children[0].src.length - 4));
    switch (temp) {
        case 0:
            for (let i = 0; i < arrChumus.length; i++) {
                if (temp2 == i) {
                    if (i==0) {
                        event.target.removeEventListener("click",addOneFood)
                    }
                    else{
                        temp1.children[0].src = arrChumus[i - 1];
                    }
                    
                    break;
                }
            }
            break;
        case 1:
            for (let i = 0; i < arrSalat.length; i++) {
                if (temp2 == i) {
                    if (i==0) {
                        event.target.removeEventListener("click",addOneFood)
                    }
                    else{
                        temp1.children[0].src = arrSalat[i - 1];
                    }
                    break;
                }
            }
            break;
        case 2:
            for (let i = 0; i < arrFalafel.length; i++) {
                if (temp2 == i) {
                    if (i==0) {
                        event.target.removeEventListener("click",addOneFood)
                    }
                    else{
                        temp1.children[0].src = arrFalafel[i - 1];
                    }
                    break;
                }
            }
            break;
        case 3:
            for (let i = 0; i < arrChips.length; i++) {
                if (temp2 == i) {
                    if (i==0) {
                        event.target.removeEventListener("click",addOneFood)
                    }
                    else{
                        temp1.children[0].src = arrChips[i - 1];
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
function choose() 
{
    
    let r;
    switch (event.target.parentElement.id.slice(1, 2)) {
        case "1":

            if (x >= arrChumus.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arrChumus[x];
                setTimeout(() => changeHant2(0, 0), 100);
                setTimeout(() => changeHant2(0, 1), 200);
                setTimeout(() => changeHant2(0, 2), 300);
                if (rChumus != 0) 
                {
                    if (rChumus==1) {
                        document.querySelector("#s0").style.display="block";
                    }
                    rChumus--;
                    document.querySelector("#n0").innerHTML = rChumus;
                    nikud.innerHTML=Number(nikud.innerHTML)+1;
                }
                else
                {
                    nikud.innerHTML=Number(nikud.innerHTML)-1;
                }
                x++;
            }
            break;
        case "2":
            if (y >= arrSalat.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arrSalat[y];
                setTimeout(() => changeHant3(1, 0), 100);
                setTimeout(() => changeHant3(1, 1), 200);
                setTimeout(() => changeHant3(1, 2), 300);
                setTimeout(() => changeHant3(1, 3), 400);
                if (rSalat != 0) {
                    if (rSalat==1) {
                        document.querySelector("#s1").style.display="block";
                    }
                    rSalat--;
                    document.querySelector("#n1").innerHTML = rSalat;
                    nikud.innerHTML=Number(nikud.innerHTML)+1;
                }
                else
                {
                    nikud.innerHTML=Number(nikud.innerHTML)-1;
                }
                y++;
            }
            break;
        case "3":

            if (z >= arrFalafel.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arrFalafel[z];
                setTimeout(() => changeHant3(2, 0), 100);
                setTimeout(() => changeHant3(2, 1), 200);
                setTimeout(() => changeHant3(2, 2), 300);
                setTimeout(() => changeHant3(2, 3), 400);
                if (rFalafel != 0) {
                    if (rFalafel==1) {
                        document.querySelector("#s2").style.display="block";
                    }
                    rFalafel--;
                    document.querySelector("#n2").innerHTML = rFalafel;
                    nikud.innerHTML=Number(nikud.innerHTML)+1;
                }
                else
                {
                    nikud.innerHTML=Number(nikud.innerHTML)-1;
                }
                z++;
            }
            break
        case "4":
            if (w >= arrChips.length) {
                event.target.parentElement.removeEventListener("click", choose);
            }
            else {
                (event.target).src = arrChips[w];
                setTimeout(() => changeHant2(3, 0), 100);
                setTimeout(() => changeHant2(3, 1), 200);
                setTimeout(() => changeHant2(3, 2), 300);
                if (rChips != 0) {
                    if (rChips==1) {
                        document.querySelector("#s3").style.display="block";
                    }
                    rChips--;
                    document.querySelector("#n3").innerHTML = rChips;
                    nikud.innerHTML=Number(nikud.innerHTML)+1;
                }
                else
                {
                    nikud.innerHTML=Number(nikud.innerHTML)-1;
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
        ["pictures/אנשים/0/0.png","pictures/אנשים/0/1.png","pictures/אנשים/0/2.png","pictures/אנשים/0/3.png"],
        ["pictures/אנשים/1/0.png","pictures/אנשים/1/1.png","pictures/אנשים/1/2.png","pictures/אנשים/1/3.png"],
        ["pictures/אנשים/2/0.png","pictures/אנשים/2/1.png","pictures/אנשים/2/2.png","pictures/אנשים/2/3.png"],
        ["pictures/אנשים/3/0.png","pictures/אנשים/3/1.png","pictures/אנשים/3/2.png","pictures/אנשים/3/3.png"],
        ["pictures/אנשים/4/0.png","pictures/אנשים/4/1.png","pictures/אנשים/4/2.png","pictures/אנשים/4/3.png"],
        ["pictures/אנשים/5/0.png","pictures/אנשים/5/1.png","pictures/אנשים/5/2.png","pictures/אנשים/5/3.png"]  
    ];
let arrEmptyPeople=[0,1,2,3,4,5]; 
let arrEmpty = [0,1,2,3];   
let rTime = (Math.random() * 5000) + 5000;
let t = setInterval("people()",rTime)
let arrInte = [];
let arrAniInte=[];
function people() {
    let r1person;
    let rperson;
    r1person = Math.floor(Math.random() * ((arrEmptyPeople.length)-1))
    rperson=arrEmptyPeople[r1person];
    arrEmptyPeople[r1person]=arrEmptyPeople[arrEmptyPeople.length-1]
    arrEmptyPeople.pop();
    let rplace;
    let place;
    if (arrEmpty.length==0) 
    {
        clearInterval(t);
    }
    else
    {
        rplace = Math.floor(Math.random() * ((arrEmpty.length)-1))
        place=arrEmpty[rplace];
        arrEmpty[rplace]=arrEmpty[(arrEmpty.length)-1]
        arrEmpty.pop();
        a = document.createElement("img");
        a.setAttribute("src", arrPeople[rperson][0]);
        a.style.position = "absolute"
        a.style.bottom = "0"
        a.style.left = "67vw"
        a.style.bottom = "27vh"
        if (rChips == 0 && rFalafel == 0 && rChumus == 0 && rSalat == 0) 
        {
            a.addEventListener("click", ready)
        }
        document.querySelector("#main").appendChild(a)
        ani=setInterval(()=>move(place,a),1);
        let tempArr=[place,ani]
        arrAniInte.push(tempArr);
        nervious(rperson, place);
    }
}
function move(place,an) {
    let eyeCP1
    let eyeCP
    if(an.style.left==document.querySelector("#p"+place).style.left)
    {
        for (let i = 0; i < arrAniInte.length; i++) {
            if(arrAniInte[i][0]==place)
            {
                
                eyeCP1=[place,setInterval(()=>eyeclosePFunc(an.src.slice(an.src.length-7,an.src.length-6),place),300)];
                arrAniEys1.push(eyeCP1);
                eyeCP=[place,setInterval(()=>eyePFunc(an.src.slice(an.src.length-7,an.src.length-6),place),2700)];
                arrAniEys.push(eyeCP);
                clearInterval(arrAniInte[i][1]);
            }
        }
        document.querySelector("#p"+place).appendChild(an)
        an.style.bottom="0"
        an.style.left="0"
    }
    else{
        let temp=Number(an.style.left.slice(0,an.style.left.length-2))
        temp=temp-0.1;
        an.style.left=temp+"vw";
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
        if(m>=3)
        {
            for (let i = 0; i < arrAniEys.length; i++) {
                if(arrAniEys[i][0]==place)
                {
                    clearInterval(arrAniEys[i][1])
                }
            }
            for (let i = 0; i < arrAniEys1.length; i++) {
                if(arrAniEys1[i][0]==place)
                {
                    clearInterval(arrAniEys1[i][1])
                }
            }
            eyeNECP1=[place,setInterval(()=>eyecloseNEPFunc(document.querySelector("#p"+place).children[0].src.slice(document.querySelector("#p"+place).children[0].src.length-7,document.querySelector("#p"+place).children[0].src.length-6),place),500)];
            arrAniEysN1.push(eyeNECP1);
            eyeNECP=[place,setInterval(()=>eyeNEPFunc(document.querySelector("#p"+place).children[0].src.slice(document.querySelector("#p"+place).children[0].src.length-7,document.querySelector("#p"+place).children[0].src.length-6),place),300)];
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
            if(localStorage.getItem("c")==null)
            {
                localStorage.setItem("c",nikud.innerHTML);
            }
            else{
                if(Number(nikud.innerHTML)>Number(localStorage.getItem("c")))
                {
                    localStorage.setItem("c",nikud.innerHTML);
                }
            }
            localStorage.setItem("now",nikud.innerHTML);
            clearInterval(t);
            let video=document.createElement("video");
            video.setAttribute("autoplay","true")
            video.setAttribute("muted","true")
            video.controls=false;
            let source=document.createElement("source");
            source.src="pictures/סיום.mp4"
            source.type="video/mp4"
            video.appendChild(source);
            video.style.position="absolute"
            video.style.height="98vh"
            video.style.marginLeft="17.5vw"
            document.querySelector("body").removeChild(document.querySelector("body").children[0])
            document.body.appendChild(video)
            setTimeout("finish()",5000)
        }
    }, num5);
    let temp = [place, tt, ttX];
    arrInte.push(temp);
}
function finish()
{
    window.location.href="finish.html";
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
    rChumus = Math.floor(Math.random() * 3)+1
    document.querySelector("#n0").innerHTML = rChumus;
    rSalat = Math.floor(Math.random() * 3)+1
    document.querySelector("#n1").innerHTML = rSalat;
    rFalafel = Math.floor(Math.random() * 3)+1
    document.querySelector("#n2").innerHTML = rFalafel;
    rChips = Math.floor(Math.random() * 3)+1
    document.querySelector("#n3").innerHTML = rChips;
}
function YadMegish(x,y) 
{
    switch (x) {
        case "0":
        switch (y) {
            case 0:                      
                document.querySelector("#k0").style.display="block"                        
                document.querySelector("#k0").style.width="15vw"                        
                document.querySelector("#k0").style.left="25vw"                        
                break;
            case 1:
                document.querySelector("#k1").style.width="20vw"                        
                document.querySelector("#k1").style.display="block"
                document.querySelector("#k1").style.left="23vw"                        
                document.querySelector("#k0").style.display="none"
                break;
            case 2:
                pitabli.style.display="block"
                document.querySelector("#k1").style.display="none"
                break;
            default:
                break;
        }
            break;
        case "1":
        switch (y) {
            case 0:                      
                document.querySelector("#k0").style.display="block"                        
                document.querySelector("#k0").style.width="15vw"                        
                document.querySelector("#k0").style.left="25vw"                        
                break;
            case 1:
                document.querySelector("#k1").style.width="20vw"                        
                document.querySelector("#k1").style.display="block"
                document.querySelector("#k1").style.left="23vw"                        
                document.querySelector("#k0").style.display="none"
                break;
            case 2:
                pitabli.style.display="block"
                document.querySelector("#k1").style.display="none"
                break;
            default:
                break;
        }
            break;
        case "2":
        switch (y) {
            case 0:                      
                document.querySelector("#k0").style.display="block"                        
                document.querySelector("#k0").style.width="15vw"                        
                document.querySelector("#k0").style.left="45vw"                        
                break;
            case 1:
                document.querySelector("#k1").style.width="20vw"                        
                document.querySelector("#k1").style.display="block"
                document.querySelector("#k1").style.left="43vw"                        
                document.querySelector("#k0").style.display="none"
                break;
            case 2:
                pitabli.style.display="block"
                document.querySelector("#k1").style.display="none"
                break;
            default:
                break;
        }
            break;
        case "3":
        switch (y) {
            case 0:                      
                document.querySelector("#k0").style.display="block"                        
                document.querySelector("#k0").style.width="15vw"                        
                document.querySelector("#k0").style.left="45vw"                        
                break;
            case 1:
                document.querySelector("#k1").style.width="20vw"                        
                document.querySelector("#k1").style.display="block"
                document.querySelector("#k1").style.left="43vw"                        
                document.querySelector("#k0").style.display="none"
                break;
            case 2:
                pitabli.style.display="block"
                document.querySelector("#k1").style.display="none"
                break;
            default:
                break;
        }
            break;
        default:
            break;
    }
    
}
function ready() 
{
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
        document.querySelector("#s"+i).style.display="none"
    }
    nikud.innerHTML=Number(nikud.innerHTML)+5;
    let temp=event.target.parentElement.id.slice(1,2);
    let 
    temp1=event.target;
    let num=temp1.src.slice(temp1.src.length-7,temp1.src.length-6)
    arrEmpty.push(Number(temp))
    arrEmptyPeople.push(Number(num));
    if(arrEmpty.length==1){
        clearInterval(t);
        t = setInterval("people()", rTime)
    }
    pitawith.style.display="none"
    setTimeout(() => YadMegish(temp, 0), 100);
    setTimeout(() => YadMegish(temp, 1), 200);
    setTimeout(() => YadMegish(temp, 2), 300);
    setTimeout(()=>new function(){
        temp1.src="pictures/מרוצים/"+num+".png";
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
        let intt=setInterval(()=>remove(temp1,intt),1)
    },400)
    pita.addEventListener("click",pitaFunc)
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
function remove(an,inttt) {
    let tempp=Number(an.style.left.slice(0,an.style.left.length-2))
    if(tempp<67){
        tempp=tempp+0.1;
        an.style.left=tempp+"vw"
    }
    else{
        clearInterval(inttt);
        for (let i = 0; i < arrAniEys.length; i++) {
            if(arrAniEys[i][0]==an.parentElement.id.slice(1,2))
            {
                clearInterval(arrAniEys[i][1])
            }
        }
        for (let i = 0; i < arrAniEys1.length; i++) {
            if(arrAniEys1[i][0]==an.parentElement.id.slice(1,2))
            {
                clearInterval(arrAniEys1[i][1])
            }
        }
    }
}



let eyeCP1=setInterval("eyecloseCPFunc()",300);
let eyeCP=setInterval("eyeCPFunc()",2700);
function eyeCPFunc() {
    person.src="pictures/a1.png"
}
function eyecloseCPFunc() {
    person.src="pictures/a.png"
}
let eyeOCP1=setInterval("eyecloseOCPFunc()",300);
let eyeOCP=setInterval("eyeOCPFunc()",2700);
function eyeOCPFunc() {
    openPerson.src="pictures/b1.png"
}
function eyecloseOCPFunc() {
    openPerson.src="pictures/b.png"
}
function eyePFunc(id,place11) {
    if((document.querySelector("#p"+place11).children[0])&&id)
    {
        document.querySelector("#p"+place11).children[0].src=arrPeople[id][1]
    }
}
function eyeclosePFunc(id,place11) {
    if((document.querySelector("#p"+place11).children[0]))
    {
        document.querySelector("#p"+place11).children[0].src=arrPeople[id][0]
    }
}
function eyeNEPFunc(id,place11) {
    if((document.querySelector("#p"+place11).children[0]))
    {
        document.querySelector("#p"+place11).children[0].src=arrPeople[Number(id)][2]
    }
}
function eyecloseNEPFunc(id,place11) {
    if((document.querySelector("#p"+place11).children[0]))
    {
        document.querySelector("#p"+place11).children[0].src=arrPeople[Number(id)][3]
    }
}