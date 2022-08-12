let age = '18';

switch (age) {

    case 18:
        console.log("Yaş number 18"); // agede tutulan değer sayı değil karakterdir!!!
        break;

    case "18":
        console.log("Yaş string 18");
        break;

    default:
        console.log("Değer yukarıda bulunan koşullara uymamakta");
}

// ekran çıktısı: Yaş string 18