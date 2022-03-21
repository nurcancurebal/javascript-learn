let num= 3
if (num>0){
    console.log(`${num} is a pozitif number` )
} // num değişkeni 0 dan küçük olur ise çalışmaz, her hangi bir çıktı vermez

let num2= -2
if (num2>0){
    console.log(`${num2} is a pozitif number `)
}
else{
    console.log( `${num2} is a negative number`)
}

//  2' den fazla koşula ihtiyacımız olursa else if kullanırız


/* 
switch(caseValue){
    case 1:
      // code
      break
    case 2:
     // code
     break
    case 3:
     // code
     break
    default:
     // code
  } */


  let weather = 'yagmurlu'
  
  switch(weather){
      case 'gunesli':
          console.log('hava güneşli')
          break

       case 'bulutlu':
            console.log('ceketini al')
            break

        default:
            console.log('yağmurluk giy')

  } //21:37