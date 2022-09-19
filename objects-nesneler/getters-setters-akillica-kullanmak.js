/* -> Akıllıca getters/setters kullanmak
Getter/Setter “gerçek” özelliklerin üzerinde daha iyi kontrol amacıyla kurulabilir.

Örneğin, user gibi çok kısa isimler için name özelliğini _name içerisinde tutabilirsiniz. Sonrasında atamaları setter’da filteleyebilirsiniz: */

let user = {

    get name() {
        return this._name;
    },

    set name(value) {

        if (value.length < 4) {

            console.log("İsim çok kısa, en az 4 karakter olmalıdır."); // İsim çok kısa, en az 4 karakter olmalıdır.
            return;
        }

        this._name = value;
    }
};

user.name = "Pete";

console.log(user.name); // Pete

user.name = "";

/* Teknik olarak, dışarıdan hala user._name ile erişilebilir. Fakat genel bir kural olarak "_" ile başlayan özellikler içte kullanılan değişkenlerdir ve dışarıdan hiçbir zaman erişilmemelidir. */