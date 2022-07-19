// Catch bloğu bir parametre alır. Catch bloğuna parametre olarak e, err veya error iletmek yaygındır. Bu parametre bir nesnedir ve isim
// ve mesaj anahtarlarına sahiptir. İsmi ve mesajı kullanalım.

try {

    let lastName = 'Cürebal';

    let fullName = fistName + ' ' + lastName;

} catch (err) {

    console.log('Name of the error', err.name);

    console.log('Error message', err.message);

} finally {

    console.log('In any case I will be executed');
};

// Name of the error ReferenceError
// Error message fistName is not defined
// In any case I will be executed