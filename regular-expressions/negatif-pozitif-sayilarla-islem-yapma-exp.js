const txt= ' Bazı parçacıkların yatay x ekseni üzerindeki konumu -12, -4, -3 ve -1 negatif yönde, 0 orijinde, 4 ve 8 pozitif yönde';

const points = /[-]*\d/g;   // [-]: başında - olanları al; *: sıfır veya daha fazla kez; \d: sayıları tek tek al

const matches = txt.match(points);

console.log(matches);