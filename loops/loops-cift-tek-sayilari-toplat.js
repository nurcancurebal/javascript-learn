let totalevens= 0
let totalodds= 0

for (let i=0; i<=100; i++ ){
    if (i%2==0){
        totalevens+=i
    }
    else{
        totalodds+=i
    }
}

console.log(`çift sayıların toplamı ${totalevens}`)
console.log(`tek sayıların toplamı ${totalodds}`)