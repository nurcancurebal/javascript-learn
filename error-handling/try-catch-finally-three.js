try {
    let lastName = 'Cürebal';

    let fullName = firstName + ' ' + lastName;

} catch (err) {

    console.error(err);     // consol.log() veya console.error() kullanabiliriz

} finally {

    console.log('In any case I will be executed');
};

// ReferenceError: firstName is not defined
// In any case I will be executed