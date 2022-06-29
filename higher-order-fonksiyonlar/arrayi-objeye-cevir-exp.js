// her harfin kendi içinde kaç kere kullanıldığını yazacak

const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria'];


const objectCountries = countries.map(function (country) {

    return { country, letters: countingLetters(country) };

    function countingLetters(value) {

        value = value.toLowerCase();

        value = value.split("");

        const letters = {};

        value.forEach(function (char) {

            // DAHA KISA : !letters[char] ? letters[char] = 1 : letters[char] += 1;

            if (!letters[char]) { // objenin içine key ekleme bu şekilde yapılır.

                letters[char] = 1;

            } else {

                letters[char] += 1;
            }
        });

        return letters;
    };
});

console.log(objectCountries);


// [
//     {
//       country: 'Germany',
//       letters: { g: 1, e: 1, r: 1, m: 1, a: 1, n: 1, y: 1 }
//     },
//     {
//       country: 'Denmark',
//       letters: { d: 1, e: 1, n: 1, m: 1, a: 1, r: 1, k: 1 }
//     },
//     { country: 'Swiss', letters: { s: 3, w: 1, i: 1 } },
//     {
//       country: 'Finland',
//       letters: { f: 1, i: 1, n: 2, l: 1, a: 1, d: 1 }
//     },
//     {
//       country: 'Norway',
//       letters: { n: 1, o: 1, r: 1, w: 1, a: 1, y: 1 }
//     },
//     {
//       country: 'Australia',
//       letters: { a: 3, u: 1, s: 1, t: 1, r: 1, l: 1, i: 1 }
//     },
//     { country: 'Sweden', letters: { s: 1, w: 1, e: 2, d: 1, n: 1 } },
//     {
//       country: 'Holland',
//       letters: { h: 1, o: 1, l: 2, a: 1, n: 1, d: 1 }
//     },
//     {
//       country: 'Austria',
//       letters: { a: 2, u: 1, s: 1, t: 1, r: 1, i: 1 }
//     }
//   ]