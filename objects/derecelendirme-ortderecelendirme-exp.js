// Ürünler arrayinin üç elemanı vardır ve her birinin altı özelliği vardır. a. Ürünü derecelendiren RateProduct adında bir fonksiyon
// oluşturun b. Bir ürünün ortalama derecelendirmesini hesaplayan ortalamaRating adlı bir fonksiyon oluşturun.
// likeProduct adlı bir fonksiyon oluşturun.Bu fonksiyon beğenilmeyen ürünü beğenmeye, beğenildiyse beğenmeyi kaldırmaya yardımcı olacaktır
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

function rateProduct() {

    
    
}

//TODO