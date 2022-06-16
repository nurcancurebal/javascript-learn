const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria', 'Argentina'];


let oneCharacter = [];

let output = '';

const countriesMap = countries.map(function (country) {

    let  countrySplit = country.split("")[0];
    
    if ( oneCharacter.includes(countrySplit)) {
        
        output += `${oneCharacter}: ${country} aynı`;

        return    

    }else{

        oneCharacter.push(countrySplit);
        
        output += `${oneCharacter}: ${country}`;

        return 
    }
});

console.log(output);


// f: finland, fiji, france
// d: denmark

//TODO