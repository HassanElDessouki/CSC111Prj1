AleppoPicsArry = ["./Cities/Aleppo/1.jpg", "./Cities/Aleppo/2.jpg", "./Cities/Aleppo/3.jpg", "./Cities/Aleppo/4.jpg", "./Cities/Aleppo/5.jpg", "./Cities/Aleppo/6.jpg"]
DamascusPicsArry = ["./Cities/Damascus/1.jpg", "./Cities/Damascus/2.jpg", "./Cities/Damascus/3.jpg", "./Cities/Damascus/4.jpg", "./Cities/Damascus/5.jpg", "./Cities/Damascus/6.jpg"]
LatakiaPicsArry = ["./Cities/Latakia/1.jpg", "./Cities/Latakia/2.jpg", "./Cities/Latakia/3.jpg", "./Cities/Latakia/4.jpg", "./Cities/Latakia/5.jpg", "./Cities/Latakia/6.jpg"]
TartusPicsArry = ["./Cities/Tartus/1.jpg", "./Cities/Tartus/2.jpg", "./Cities/Tartus/3.jpg", "./Cities/Tartus/4.jpg"]

let oldNum;

function randomPic(min, max){
    let number;
    do {
        number = Math.floor(Math.random() * (max - min + 1)) + min
    }
    while (number === oldNum);

    oldNum = number;
    return number;
}

function AleppoPics() {
    l = randomPic(0,2)
    picture = document.getElementById("aleppopics");
    picture.src = AleppoPicsArry[l]
}

function DamascusPics() {
    l = randomPic(0,5)
    picture = document.getElementById("damascuspics");
    picture.src = DamascusPicsArry[l]
}

function LatakiaPics() {
    l = randomPic(0,5)
    picture = document.getElementById("latakiapics");
    picture.src = LatakiaPicsArry[l]
}

function TartusPics() {
    l = randomPic(0,3)
    picture = document.getElementById("tartuspics");
    picture.src = TartusPicsArry[l]
}

setInterval(function() {
    AleppoPics();
    DamascusPics();
    LatakiaPics();
    TartusPics();
}, 3000);
