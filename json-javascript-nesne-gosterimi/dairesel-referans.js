let oda1 = {
    sayi: 23
};

let tanisma1 = {
    baslik: "Konferans",
    katilimcilar: [{ adi: "Ahmet" }, { adi: "Mehmet" }],
    yer: oda1 // tanışma1 oda1 i referans gösteriyor.
};

oda1.dolduruldu = tanisma1; // oda1 tanışma1 i referans gösteriyor.

console.log(oda1);
{/*
 <ref *1> {
  sayi: 23,
  dolduruldu: {
    baslik: 'Konferans',
    katilimcilar: [ [Object], [Object] ],
    yer: [Circular *1]
  }
} */}

console.log(tanisma1);
{/*
 <ref *1> {
  baslik: 'Konferans',
  katilimcilar: [ { adi: 'Ahmet' }, { adi: 'Mehmet' } ],
  yer: { sayi: 23, dolduruldu: [Circular *1] }
} */}