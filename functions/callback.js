// Callback Nedir? - Fonksiyonun argumentlerinden bir function gönderip o fonsiyonu calıştırırsanız callback olmuş olur.


// ! Exaple 1
console.log(mainTwo(exapleCallback));

function mainTwo(func) {

    return func();
};

function exapleCallback() {

    return "Hello, World!";
};

// ! Exaple 2

const UserRepository = {

    data: [],

    create({ username, password }) {

        const user = {
            id: this.data.length + 1,
            username,
            password
        };

        this.data.push(user);

        console.log("Kullanıcı kayıt işlemi başarılı!");
    },

    findAll() {
        return this.data;
    },

    findOne(id) {
        return this.data.find(item => item.id == id);
    },

    deleteOne(id) {

        const placeIndex = this.data.findIndex(item => item.id == id);
        delete this.data[placeIndex];
    }
};

main({
    pendingUsers: [
        { username: "curebal", password: "12356" },
        { username: "ncc", password: "12356" },
        { username: "nurcan", password: "12356" },
        { username: "tiktok", password: "12356" },
        { username: "bal", password: "12356" },

    ]
}, UserRepository);

function main(data, repository) {

    data.pendingUsers.forEach(item => {
        repository.create(item);
    });

    console.log(repository.findOne(3));

    repository.deleteOne(2);

    console.log(repository.findAll());
};