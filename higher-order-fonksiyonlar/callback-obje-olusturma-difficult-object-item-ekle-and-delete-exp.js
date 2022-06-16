// Callback: Fonksiyonun argumentlerinden bir function gönderip o fonctiyonu calıştırırsanız callback olmuş olur.
// Parametre olarak iletilen fonksiyonlara callback denir.

const userRepository = {

    data: [],

    create: function ({ username, password }) { // obje olarak gönderme, burayı pendingUsers'ın içinden aldı ( en aşağıdaki function gönderdi)

        const user = {        // yeni bir obje oluşturduk
            id: this.data.length + 1,
            username,
            password
        };

        this.data.push(user);   // datanın(array) içine user(yeni objeyi) pushluyoruz

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
        delete this.data[placeIndex];      // objeden itemi silme
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

        repository.create(item); // userRepository' nin içindeki create' tin içine itemi( pendingUsers' ın ilk itemini) gönderdik
    });

    console.log(repository.findOne(3));

    repository.deleteOne(2);

    console.log(repository.findAll());
};


// Kullanıcı kayıt işlemi başarılı!
// Kullanıcı kayıt işlemi başarılı!
// Kullanıcı kayıt işlemi başarılı!
// Kullanıcı kayıt işlemi başarılı!
// Kullanıcı kayıt işlemi başarılı!
// { id: 3, username: 'nurcan', password: '45678' }
// [
//   { id: 1, username: 'curebal', password: '12356' },
//   <1 empty item>,
//   { id: 3, username: 'nurcan', password: '45678' },
//   { id: 4, username: 'kanada', password: '56789' },
//   { id: 5, username: 'bal', password: '34568' }
// ]