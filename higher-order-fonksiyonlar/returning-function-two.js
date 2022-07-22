// Daha yüksek dereceli fonksiyonlar, fonksiyonu bir değer olarak döndürür​

const a = s1 => {

    const b = s2 => {

        const c = s3 => {

            return s1 + s2 + s3; // c fonksiyonunun çıktısı
        };

        return c; // b fonksiyonunun çıktısı
    };

    return b; // a fonksiyonunun çıktısı
};

console.log(a(5)(10)(20));