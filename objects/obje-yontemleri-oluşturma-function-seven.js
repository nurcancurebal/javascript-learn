const person = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {      // bu bir object method' dur
        return `${this.firstName} ${this.lastName}`; // burada this objenin kendisi demek oluyor
    }
};

console.log(person.getFullName());
  // Nurcan Cürebal