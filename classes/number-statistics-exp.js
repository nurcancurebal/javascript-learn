class Statistics {
    constructor() {

        this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
    };

    count() {

        return this.ages.length;
    };

    sum() {

        return this.ages.reduce((store, prev) => {

            return store + prev;
        });
    };

    min() {

        return Math.min(...this.ages);
    };

    max() {

        return Math.max(...this.ages);
    };

    range() {

        return this.max() - this.min();
    };

    mean() {

        return Math.round(this.sum() / this.count());
    };

    median() {

        const result = this.ages.sort().filter((item, index, array) => {

            if (Math.floor(array.length / 2) == index) {

                return item;
            };
        });

        return Number(result);
    };

    mode() {

        const obj = {};

        this.ages.forEach(array => {

            if (!obj[array]) {

                obj[array] = 1;

            } else {

                obj[array]++;
            }
        });

        const arrayEntries = Object.entries(obj);

        const arrayMap = arrayEntries.map((item) => {

            return item[1];
        });

        const arrayMax = Math.max(...arrayMap);

        const arrayFind = arrayEntries.find((item) => {

            return item[1] == arrayMax;
        });

        return `(${arrayFind})`;
    };

    variance() {

        const agesMap = this.ages.map(item => {

            const itemMean = item - this.mean();

            const square = itemMean * itemMean;

            return square;
        });

        const total = agesMap.reduce((store, preve) => store + preve);

        return total / this.count();
    };

    std() {

        return (Math.sqrt(this.variance())).toFixed(1);
    };

    freqDist() {

        const obj = {};

        this.ages.forEach(function (item) {

            if (!obj[item]) {

                obj[item] = 1;

            } else {

                obj[item]++;
            }
        });

        const objEntries = Object.entries(obj);

        const result = objEntries.map(function (item) {

            const frekans = (item[1] * 100 / this.count()).toFixed(1);

            const numbers = item[0];

            return `(${frekans}, ${numbers})`;
        }, this);

        return result;
    };
};

const statistics = new Statistics();

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
console.log('Frequency Distribution: ', statistics.freqDist());