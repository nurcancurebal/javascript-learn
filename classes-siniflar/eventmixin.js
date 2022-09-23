/* -> EventMixin
Artık gerçek olaylar için mixin yapabiliriz.

Çoğu objenin en önemli özelliği olaylar(event) çalışabilmesidir.

Bir obje önemli bir olay olduğunda “olay” yaratacak metoda sahip olmalıdır. Diğer objeler ise böyle bir olayı “dinlemeli”'dir.

Bir olay isme sahip olmalıdır, bunun ile birlikte ek verileri de barındırabilir.

Örneğin user objesi kullanıcı giriş yapacağı zaman "login" olayını oluşturabilir. Diğer bir calendar objesi ise bu olayı alıp giriş yapan kullanıcı için takvimi doldurabilir.

Veya bir menu "select" adında menüden seçim yapıldığında oluşturulan bir olay yaratabilir, diğer objeler bilgi alabilir ve bu olaya göre işlem yapabilir.

Olaylar “bilgileri paylaşmak” için bir yöntemdir. Bunlar her sınıfta kullanışlı olabilir, bir örnek yapalım: */

let eventMixin = {
    /**
     * Olaya kayıt olma, kullanımı:
     *  menu.on('select', function(item) { ... }
    */
    on(eventName, handler) { // eventName: 'select' , handler: value => console.log("Value selected: " + value)

        if (!this._eventHandlers) this._eventHandlers = {}; // _eventHandlers ın içine boş obje oluşturduk

        if (!this._eventHandlers[eventName]) { // _eventHandlers ın içinde eventName yoksa

            this._eventHandlers[eventName] = []; // _eventHandlers: { select: [] }
        }

        this._eventHandlers[eventName].push(handler); // { select: [value => console.log("Value selected: " + value)]}
    },

    /**
     * Olaydan kaydı silme, kullanımı:
     *  menu.off('select', handler)
     */
    off(eventName, handler) {

        let handlers = this._eventHandlers && this._eventHandlers[eventName];

        if (!handlers) return;

        for (let i = 0; i < handlers.length; i++) {

            if (handlers[i] == handler) {

                handlers.splice(i--, 1);
            }
        }
    },

    /**
     * Olay yarat ve buna veri ekle
     *  this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) { // eventName: 'select' , args: ['123']

        if (!this._eventHandlers || !this._eventHandlers[eventName]) {

            return; // Bu olayın ismi ile başka kotarıcı yok.
        }

        // kotarıcıyı çağır.
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args)); // this: Menu {_eventHandlers: {...}} , args: ['123']
    }
};

/* Burada 3 tane metod var:

1. .on(eventName, handler) handler(kotarıcı)'da belirtilen isimle bir olay çalışırsa kotarıcıyı ata. Kotarıcılar _eventHandlers özelliğinde saklanır.
2. .off(eventName, handler) – kotarıcı listesinden fonksiyon siler.
3. .trigger(eventName, ...args) – olay yaratır; tüm kotarıcılar çağırılır ve args bunlara argüman olarak iletilir.
Kullanım: */

// Sınıf yap
class Menu {

    choose(value) {

        this.trigger("select", value);
    }
}
// mixin ekle
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// seçildiğinde kotarıcıyı çağır.
menu.on("select", value => console.log("Value selected: " + value)); // Value selected: 123

// olayı çalıştır ->  Value selected: 123 gösterilir
menu.choose("123");

/* Artık kullanıcının seçimine farklılık gösteren bir kodumuz var ise bunu menu.on(...) ile kullanabiliriz.

eventMix böyle bir davranışa istediğimiz kadar sınıfa eklenebilir bunu yaparken de kalıtım zincirine dokunulmamış olur. */ // TODO tekrar et