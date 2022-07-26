const txt = ' Bazı parçacıkların yatay x ekseni üzerindeki konumu -12, -2, -4 ve -1 negatif yönde, 0 orijinde, 5 ve 2 pozitif yönde';

const points = /(?<=\s)[-\d]{1,3}/g;    // {1,3} : tam koordinat belirtmek için yazdık, koşulları kesinleştirmek için

const matches = txt.match(points).map(item => Number(item));

console.log("Points", matches);

const sortedPoints = matches.sort(function (a, b) {

    return a - b;
});

console.log("Sorted Points", sortedPoints);

const distance = (sortedPoints[0] * -1) + (sortedPoints[sortedPoints.length - 1]);

console.log("Distance", distance);