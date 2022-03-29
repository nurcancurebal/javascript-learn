const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  
  for (let i=0; i<=10; i++){
      console.log('for ile =', countries[i])
    }       // for ile ekrana sırayla yazdırma
    



let a=0  

while (a<=10){
    console.log('while ile = ', countries[a])
    a++
}     // while ile ekrana sırayla yazdırma




let b= 0

do {
    console.log('do while ile = ', countries[b])
    b++
}while(b<=10)       // do while ile ekrana sırayla yazdırma




for (let i=0; i<=10; i++){
    countries.reverse()
    console.log('for ile tersden =', countries[i])
  }

  //! neden tersten yazarken değişik sıralama ile yazdı
  //! while ile tekrar reverse yaptığımda for ile çevirdiğim ülkeleri terkar çeviriyor bunu önlemek için
  //! reverse ile çevirdiğimiz ülkeleri farklı bir değişkene atayıp ana değişken olan countrieslerin hala aynı sıralamada kalmasını istiyorum



  let c=0 
while (c<=10){
    countries.reverse()
    console.log('while ile tersten = ', countries[c])
    c++
}



let d=0
do{
    countries.reverse()
    console.log('do while ile tersten = ', countries[d])
    d++
}while(d<=10)
