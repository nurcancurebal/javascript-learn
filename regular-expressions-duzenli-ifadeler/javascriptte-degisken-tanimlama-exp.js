is_valid_variable('first_name'); // True
is_valid_variable('firstname'); // True
is_valid_variable('firstname10'); // True
is_valid_variable('firstname$'); // True
is_valid_variable('first-name'); // False
is_valid_variable('1first_name'); // False
is_valid_variable('first name'); // False
is_valid_variable('10firstname'); // False



function is_valid_variable(varible) {

    const pattern = /^[_$A-z][_$\dA-Za-z]+$/;

    const matches = varible.match(pattern);

    if (varible.startsWith(matches)) {

        console.log("True");

    } else {

        console.log("False");
    }
};