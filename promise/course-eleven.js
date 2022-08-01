
index = 0
while (index < 200000) {
    main()
    index++
}

async function main() {

    let a = 30;

    let b;


    setTimeout(() => {
        b = 15;
    }, 4000);

    await new Promise((r) => setTimeout(() => r(), 1000)); 
    await new Promise((r) => setTimeout(() => r(), 1000)); 
    await new Promise((r) => setTimeout(() => r(), 1000)); 
    await new Promise((r) => setTimeout(() => r(), 980)); 

    console.log(b + a);

}