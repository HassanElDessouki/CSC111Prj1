// Valleys
SkarduPicsArry = ["./Skardu/Shangrila_resort_skardu.jpg", "./Skardu/7-1568965493.jpg", "./Skardu/skardu1-1.jpg"]
KalashPicsArry = ["./Kalash/1.jpg", "./Kalash/2.jpg", "./Kalash/3.jpg", "./Kalash/4.jpg", "./Kalash/5.jpg", "./Kalash/6.jpg"]
HunzaPicsArry = ["./Hunza/1.jpg", "./Hunza/2.jpg", "./Hunza/3.jpg", "./Hunza/4.jpg", "./Hunza/5.jpg", "./Hunza/6.jpg",]

// Mountains
K2PicsArry = ["./Mountains/k2/1.jpg", "./Mountains/k2/2.jpg", "./Mountains/k2/3.jpg", "./Mountains/k2/4.jpg", "./Mountains/k2/5.jpg", "./Mountains/k2/6.jpg"]
RakaposhiPicsArry = ["./Mountains/Rakaposhi/1.jpg", "./Mountains/Rakaposhi/2.jpg", "./Mountains/Rakaposhi/3.jpg", "./Mountains/Rakaposhi/4.jpg", "./Mountains/Rakaposhi/5.jpg", "./Mountains/Rakaposhi/6.jpg"]
TirichPicsArry = ["./Mountains/Tirich Mir/1.jpg", "./Mountains/Tirich Mir/2.jpg", "./Mountains/Tirich Mir/3.jpg", "./Mountains/Tirich Mir/4.jpg", "./Mountains/Tirich Mir/5.jpg", "./Mountains/Tirich Mir/6.jpg"]

// Cities
LahorePicsArry = ["./Lahore/1.jpg", "./Lahore/2.jpg", "./Lahore/3.jpg", "./Lahore/4.jpg", "./Lahore/5.jpg", "./Lahore/6.jpg"]
IslamabadPicsArry = ["./Islamabad/1.jpg", "./Islamabad/2.jpg", "./Islamabad/3.jpg", "./Islamabad/4.jpg", "./Islamabad/5.jpg", "./Islamabad/6.jpg",]
PeshawarPicsArry = ["./Peshawar/1.jpg", "./Peshawar/2.jpg", "./Peshawar/3.jpg", "./Peshawar/4.jpg", "./Peshawar/5.jpg", "./Peshawar/6.jpg",]



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

// Vallyes Image Update Functions

function SkarduPics() {
    l = randomPic(0,2)
    picture = document.getElementById("skardupics");
    picture.src = SkarduPicsArry[l]
}

function KalashPics() {
    l = randomPic(0,5)
    picture = document.getElementById("kalashpics");
    picture.src = KalashPicsArry[l]
}

function HunzaPics() {
    l = randomPic(0,5)
    picture = document.getElementById("hunzapics");
    picture.src = HunzaPicsArry[l]
}

// Mountains Image Update Functions
function K2Pics() {
    l = randomPic(0,5)
    picture = document.getElementById("k2pics");
    picture.src = K2PicsArry[l]
}

function RakaposhiPics() {
    l = randomPic(0,5)
    picture = document.getElementById("rakaposhipics");
    picture.src = RakaposhiPicsArry[l]
}

function TirichPics() {
    l = randomPic(0,5)
    picture = document.getElementById("tirichmirpics");
    picture.src = TirichPicsArry[l]
}

// Cities Image Update Functions
function LahorePics() {
    l = randomPic(0,5)
    picture = document.getElementById("lahorepics");
    picture.src = LahorePicsArry[l]
}

function IslamabadPics() {
    l = randomPic(0,5)
    picture = document.getElementById("islamabadpics");
    picture.src = IslamabadPicsArry[l]
}

function PeshawarPics() {
    l = randomPic(0,5)
    picture = document.getElementById("peshawarpics");
    picture.src = PeshawarPicsArry[l]
}



setInterval(function() {
    // Valleys
    SkarduPics();
    KalashPics();
    HunzaPics();

    // Mountains
    K2Pics();
    RakaposhiPics();
    TirichPics();

    // Cities
    LahorePics();
    IslamabadPics();
    PeshawarPics();
}, 3000);
