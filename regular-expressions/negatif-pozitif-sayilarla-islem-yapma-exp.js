const txt= ' Bazı parçacıkların yatay x ekseni üzerindeki konumu -12, -4, -3 ve -1 negatif yönde, 0 orijinde, 4 ve 8 pozitif yönde';

const points = /[-]*\d/g;   // [-]: başında - olanları al; *: sıfır veya daha fazla kez; \d: sayıları tek tek al

const matches = txt.match(points);

const sortedPoints = matches.sort();

console.log(sortedPoints);


// TODO
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12