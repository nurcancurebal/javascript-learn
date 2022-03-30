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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  console.log(countries.length, webTechs.length ) // 11 7
  console.log(countries[0], countries[5], countries[10]) //Albania Finland Kenya
  console.log(webTechs[0],webTechs[3],webTechs[6]) //HTML React MongoDB
 


  let mixedDataTypes=['nurcan', 27, true, 'erdinç', 'bal', 'cat']
  console.log(mixedDataTypes.length)  // 6


  let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

   console.log(itCompanies.length) // 7
  console.log(itCompanies[0], itCompanies[3], itCompanies[6]) //Facebook Apple Amazon
  console.log(itCompanies[0], itCompanies[1],  itCompanies[2],  itCompanies[3],  itCompanies[4],  itCompanies[5], itCompanies[6]) 
     // Facebook Google Microsoft Apple IBM Oracle Amazon (yan yana yazıyor)
     // aynı console.logun içinde yan yana yazar alt alta yazması için hepsine console.log açmak gerekir 
     

  console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(),itCompanies[2].toUpperCase(),itCompanies[3].toUpperCase(),itCompanies[4].toUpperCase(),itCompanies[5].toUpperCase(),itCompanies[6].toUpperCase())
//FACEBOOK GOOGLE MICROSOFT APPLE IBM ORACLE AMAZON
 

 let newitCompanies=itCompanies.pop()

  console.log(itCompanies.join(', '), 'and', newitCompanies, ' are big IT companies.')
  //Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon  are big IT companies.