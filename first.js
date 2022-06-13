console.log("Dalida 's programming teams")
let team={
    yelaman:{
        raiting: 835,
        country: "KZ",
        age: 19,
        kbtu: true
    },
    gabdulgaziz: {
        raiting: 1225,
        counry: "KZ",
        age: 18,
        kbtu: true
    },
    tourist: {
        raiting: 3732,
        country: "BY",
        age: 27,
        kbtu: false
    }
}

for (let member in team){
    if (team[member].raiting < 1000){
        console.log(`${member} is a bad programmer`)
    }
    else if (team[member].raiting < 3000){
        console.log(`${member} is a good programmer`)
    }
    else {
        console.log(`${member} is a great programmer`)
    }
}
let cnt = 0
let kbtuNums = 0
const kbtuIs = "THE BEST"
while (cnt < team.length) {
    if (team[cnt].kbtu == true) {
        kbtuNums = kbtuNums + 1;
    }
    cnt++;
}
console.log(`${cnt} kbtu studets in total`)
console.log(`KBTU IS ${kbtusIs}`)

function ageIs19(age) {
    return age == 19 ? true: false;
}

let cnLess = (cn, ln) => {
    cn != ln
}
let cn = 0
const ln = team.length
do {
    if (ageIs19) {
        console.log("Oh yeah, you are shal")
    }
    cn++;
}
while (cnLess(cn,ln)) 

let secondTeam = ["Alikhan", "Zhanel", "Um_nik"]

let Alikhan = secondTeam.filter(name => name === "Alikhan");

function mar(name){
    console.log(`${name} is from Second team`)
}

let secTeam = secondTeam.map((name) => mar(name))

const greeting = ["Hello,", ...secondTeam, "good luck at the contest"]

let undefine;
let Null = null;
