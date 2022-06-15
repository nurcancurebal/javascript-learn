// Callback: Fonksiyonun argumentlerinden bir function gönderip o fonctiyonu calıştırırsanız callback olmuş olur.
// Parametre olarak iletilen fonksiyonlara callback denir.

const userRepository = {

    data: [],

    create: function ({ username, password }) {

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
        return this.data.find(function (item) {

            return item.id == id
        });
    },

    deleteOne(id) {
        const placeIndex = this.data.findIndex(item => item.id == id);
        delete this.data[placeIndex];
    }
};

main({
    pendingUsers: [
        { username: "curebal", password: "12356" },
        { username: "erdinç", password: "34678" },
        { username: "nurcan", password: "45678" },
        { username: "kanada", password: "56789" },
        { username: "bal", password: "34568" },

    ]
}, userRepository); //! userRepository callback fonksiyonudur.

function main(data, repository) {

    data.pendingUsers.forEach(item => {
        repository.create(item);
    });

    console.log(repository.findOne(3));

    repository.deleteOne(2);

    console.log(repository.findAll());
};