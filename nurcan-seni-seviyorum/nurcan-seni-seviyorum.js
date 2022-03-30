 const adi = "Nurcan Cürebal";
 const fill = "Seni Seviyorum"
 const mesaj = `# ${adi} ${fill} #`


 startRun()

 async function startRun(){
     for (let index = 0; index <= mesaj.length; index++) {
         await new Promise(r => setTimeout(r, 100));
         const messageControl = mesaj.slice(0, index).length <= 1

         if(!messageControl && index >= 3) console.log(mesaj.slice(0, index))
     }

     endRun()
 }

 async function endRun(){
     for (let index = mesaj.length; index >= 1; index--) {
         await new Promise(r => setTimeout(r, 100));

       const messageControl = mesaj.slice(0, index).length <= 1

         if(!messageControl && index != mesaj.length) console.log(mesaj.slice(0, index))
     }

     startRun()
 }