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

 let countriesOne=countries.includes('Ethiopia')
 let big= countries['Ethiopia'].toUpperCase() // yalnızca ethiopia nın olduğu satırı büyülteceğim

 console.log(countriesOne ? big : countries.push('Ethiopia'))

 //! Ethiopia var ise yalnızca Ethiopia yı büyülterek ekrana yazdırabilir miyiz Ethiopia nın olduğu indisi nasıl yakalayabilirz