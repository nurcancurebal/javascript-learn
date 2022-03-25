const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Ethiopia',
    'Denmark',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

 let countriesOne = countries.includes('Ethiopia')
 console.log(countriesOne)

 let control = countries.indexOf('Ethiopia')
 console.log(control)

 console.log(countriesOne ? countries[control].toUpperCase() : countries.push('Ethiopia'))

 //! true ise hepsini yazdırıp ayrıca ethiopia yı büyük yazdırabilir miyiz.