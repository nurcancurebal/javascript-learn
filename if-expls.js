let girdi = "Cumartesi";

girdi = girdi.toLowerCase();

const days = [
    "pazartesi",
    "salı",
    "çarşamba",
    "perşembe",
    "cuma",
    "cumartesi",
    "pazar"
];

const dizininKonumu = days.findIndex(item => item == girdi);

if (dizininKonumu <= 4) {
    console.log("İş Günü.")
} else if (dizininKonumu >= 4) {
    console.log("Tatil Günü.")
} else {
    console.log("Gün bulunamadı.")
}

