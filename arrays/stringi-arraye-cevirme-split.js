// split array' a dönüştürür
// split(',',3) virgülden ayırır 3 tane array oluşturur gerisini almaz


let js = 'JavaScript';

const charsInJavaScript = js.split(''); // harf harf parçaladık

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


let java = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

const charsInJava = java.split(','); // virgülle parçaladık

console.log(charsInJava);
//(7) ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']


let companies = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const companiesString = companies.split(' '); // boşluklardan parçaladık

console.log(companiesString);
// (13) ['I', 'love', 'teaching', 'and', 'empowering', 'people.', 'I', 'teach', 'HTML,', 'CSS,', 'JS,', 'React,', 'Python.']