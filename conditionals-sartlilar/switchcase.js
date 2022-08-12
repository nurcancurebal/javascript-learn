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
} 
*/

// “switch” karşılaştırma için, sıkı karşılaştırmayı === kullanır.

let weather = 'yagmurlu';

switch (weather) {

    case 'gunesli':
        console.log('hava güneşli');
        break;

    case 'bulutlu':
        console.log('ceketini al');
        break;

    default:
        console.log('yağmurluk giy');

};