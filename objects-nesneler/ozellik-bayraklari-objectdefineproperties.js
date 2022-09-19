/* -> Object.defineProperties
Object.defineProperties(obj, descriptors) metodu birçok metodun tek bir seferde tanımlanmasını sağlar. */

Object.defineProperties(obj, {
    
    prop1: descriptor1,
    prop2: descriptor2
    // ...
});

Object.defineProperties(user, {

    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});

// Öyleyse, birçok özelliği tek bir seferde tanımlayabiliriz.