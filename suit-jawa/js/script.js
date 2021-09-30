let komputer = document.getElementsByTagName('img')[0];

let human_choosen = document.querySelectorAll('.human-choosen');

let h1 = document.getElementsByTagName('h1')[0];

function getPilihanUser(i) {   
    if( i === 0 ) return "gajah";
    if( i === 1 ) return "manusia";
    return "semut";
}

function getPilihanKomputer() {
    let computer = Math.random()*10;

    switch (true) {
        case computer <= 3: return "manusia";
        case computer <= 7: return "gajah";
        default: return "semut";
    }
}

function getResult( manusia, komputer ) {
    if( komputer === manusia ) return "SERI!";
    if( komputer === "manusia" ) {
        if( manusia === "semut") return "KALAH!";
        return "MENANG";
    }
    if( komputer === "gajah" ) {
        if( manusia === "semut") return "MENANG";
        return "KALAH";
    }
    if( komputer === "semut" ) {
        if( manusia === "gajah") return "KALAH";
        return "MENANG";
    }
}

for (let i = 0; i < human_choosen.length; i++) {
    human_choosen[i].addEventListener('click', function () {
        let pilihan_user = getPilihanUser(i);
        let pilihan_komputer = getPilihanKomputer();
        komputer.setAttribute('src', `img/${pilihan_komputer}.png`);
        let hasil = getResult( pilihan_user, pilihan_komputer);
        h1.innerHTML = hasil;
    });
}