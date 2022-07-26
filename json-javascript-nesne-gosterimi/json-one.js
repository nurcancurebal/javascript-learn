// JSON, JavaScript Nesne Gösterimi anlamına gelir. JSON sözdizimi JavaScript nesne gösterimi söz diziminden türetilmiştir,
// ancak JSON biçimi yalnızca metin veya dizedir. JSON, depolamak ve taşımak için hafif bir veri biçimidir. JSON,
// çoğunlukla bir sunucudan bir istemciye veri gönderildiğinde kullanılır. JSON, XML'e kullanımı daha kolay bir alternatiftir.


{
    "users": [
        {
            "firstName": "Asabeneh",
            "lastName": "Yetayeh",
            "age": 250,
            "email": "asab@asb.com"
        },
        {
            "firstName": "Alex",
            "lastName": "James",
            "age": 25,
            "email": "alex@alex.com"
        },
        {
            "firstName": "Lidiya",
            "lastName": "Tekle",
            "age": 28,
            "email": "lidiya@lidiya.com"
        }
    ];
};

// Yukarıdaki JSON örneği, normal bir nesneden çok farklı değildir. O zaman, fark nedir? Aradaki fark, bir JSON nesnesinin
// anahtarının çift tırnaklı olması veya bir dize olması gerektiğidir. JavaScript Object ve JSON, JSON'u Object ve Object'i
// JSON olarak değiştirebileceğimize çok benzer.

// Yukarıdaki örneği daha ayrıntılı görelim, küme paranteziyle başlıyor. Kıvrımlı parantez içinde, bir değer dizisine sahip
// olan "users" anahtarı vardır. Dizinin içinde farklı nesnelerimiz var ve her nesnenin anahtarı var, her anahtarın çift
// tırnak işareti olması gerekiyor. Örneğin, sadece firstName yerine "firstName" kullanıyoruz, ancak nesnede çift tırnak
// işaretleri olmadan anahtarları kullanıyoruz. Bu, bir nesne ile bir JSON arasındaki en büyük farktır. JSON hakkında daha
// fazla örnek görelim.

{
    "Alex": {
        "email": "alex@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
                "age": 20,
                    "isLoggedIn": false,
                        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Redux",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
                "age": 25,
                    "isLoggedIn": false,
                        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
                "age": 30,
                    "isLoggedIn": true,
                        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
                "age": 20,
                    "isLoggedIn": false,
                        "points": 40
    },
    "John": {
        "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
                "age": 20,
                    "isLoggedIn": true,
                        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
                "age": 20,
                    "isLoggedIn": false,
                        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
                "age": 20,
                    "isLoggedIn": false,
                        "points": 40
    }
}

// TODO neden hata veriyor