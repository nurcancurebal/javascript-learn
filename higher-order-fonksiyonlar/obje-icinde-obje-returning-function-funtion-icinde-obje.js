const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];


const statistics = statisticsCalculater(ages);


console.log('Count:', statistics.count());
console.log('Sum:', statistics.sum());
console.log('Min:', statistics.min());
console.log('Max:', statistics.max());
console.log('Range:', statistics.range());
console.log('Mean:', statistics.mean());
console.log('Median:', statistics.median());
console.log('Mode:', statistics.mode());
console.log('Variance:', statistics.variance());
console.log('Standard Deviation: ', statistics.std());



statistics.describe()   // burası console.loga basmadan çalışıyor ekrana bütün değerleri yazdırıyor bu şekliyle, clg functionun içinde yazıyor


function statisticsCalculater(array) {

    return {

        count: function () {

            return array.length;
        },

        sum: function () {

            return array.reduce((store, prev) => {

                return store + prev;
            });
        },

        min: function () {

            return Math.min(...array);
        },

        max: function () {

            return Math.max(...array);
        },

        range: function () {

            return Math.max(...array) - Math.min(...array);
        },

        mean: function () {

            return Math.floor(this.sum() / this.count());
        },

        median: function () {

            const data = array.sort().filter((item, index, array) => {

                if (Math.floor(array.length / 2) == index) { // index 0' dan başladığı için floor kullanıyoruz

                    return item;
                }
            });
            return Number(data);
        },

        mode: function () {

            let result = {};

            array.forEach(function (item) {

                if (!result[item]) {

                    result[item] = 1

                } else {

                    result[item]++
                }
            });

            const arrayEntries = Object.entries(result)

            const mapValues = arrayEntries.map(function (item) {

                return item[1];
            });

            const maxValue = Math.max(...mapValues);

            const findItem = arrayEntries.find(function (item) {

                return item[1] == maxValue;
            });

            return `(${findItem[0]}, ${findItem[1]})`;
        },

        variance: function () {

            const arrayMap = array.map(function (item) {

                let extraction = item - this.mean();

                const square = extraction * extraction;

                return square;

            }, this);

            const total = arrayMap.reduce((store, prev) => {

                return store + prev;
            });

            return total / (this.count() - 1);
        },

        std: function () {

            return Math.sqrt(this.variance());
        },

        describe: function () { // ! Objenin icersindekileri bulur ve çalıştırır.

            delete this.describe;

            Object.entries(this).forEach(function (item) {

                const name = item[0][0].toUpperCase() + item[0].slice(1) + ": ";

                console.log(name, this[item[0]]());

            }, this);
        }
    };
};