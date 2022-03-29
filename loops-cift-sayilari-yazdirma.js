/* for(i=0; i<=100; i++){
    if (i%2==0){
        console.log(i)
    }
}


for (a=0; a<=100; a++){
    if (a%2==0){
    } else{
        (console.log(a))}
}


for (b=0; b<=100; b++){
    if (b/1==0 && b/b==0 ){
        (console.log(b))
    } 
      
}
 */
 //! 1 den 100 e kadar sayıları yazdır her sayıyı 1 den 100 e kadar bütün sayılarla böl kalanı (modu) 
 //! 2 kereden fazla sıfır çıkmayan sayıları yazdır


 let kontrol=0;
 for (sayi=0; sayi<=100; sayi++){

    for( let i=0; i<=100; i++)
    {
       
       if(sayi%i==0)
       {
       kontrol++;
       }
    }
       if(kontrol>=2)
       {
       console.log(`Girilen Sayı Asal Sayıdır... ${kontrol}`);
       }
       else
       {
       console.log(`!!! Girilen Sayı Asal değildir !!! ${kontrol}`);
       }

 }


 //! asal sayı bulma
 