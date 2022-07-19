// JavaScript gevşek yazılmış bir dildir. Bazı zamanlar, tanımsız bir değişkene erişmeye çalıştığınızda veya tanımsız bir işlevi
// çağırmaya çalıştığınızda bir çalışma zamanı hatası alırsınız.

// Python veya Java'ya benzeyen JavaScript, try-catch-finally bloğunu kullanarak çalışma zamanı hatalarını yakalamak için bir hata
// işleme mekanizması sağlar.

try {

    // hata verebilecek kod

} catch (err) {

    // hata oluşursa çalıştırılacak kod

} finally {

    // bir hata oluşup oluşmadığına bakılmaksızın yürütülecek kod

};

// try: try bloğunda hata oluşturabilecek şüpheli kodu sarın. try ifadesi, yürütülürken hatalara karşı test edilecek bir kod bloğu
// tanımlamamızı sağlar.

// catch: Bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. Catch bloğu size hata bilgisi verecek parametreler
// içerebilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları göstermek için kullanılır.

//nihayet(finally): nihayet blok, bir hata oluşmasından bağımsız olarak her zaman yürütülür. Nihayet bloğu, kalan görevi tamamlamak veya
// try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.