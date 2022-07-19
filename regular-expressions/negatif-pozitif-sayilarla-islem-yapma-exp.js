const txt = ' Bazı parçacıkların yatay x ekseni üzerindeki konumu -12, -2, -4 ve -1 negatif yönde, 0 orijinde, 5 ve 2 pozitif yönde';

const points = /(?<=\s)[-\d]{1,3}/g;   // [-]: başında - olanları al; *: sıfır veya daha fazla kez; \d: sayıları tek tek al

const matches = txt.match(points).map(item => Number(item));

console.log("Points",matches);

const sortedPoints = matches.sort(function (a, b) {
    return a - b;
});

console.log("Sorted Points",sortedPoints);

const distance = (sortedPoints[0] * -1) + (sortedPoints[sortedPoints.length - 1]);

console.log("Distance",distance);


// TODO