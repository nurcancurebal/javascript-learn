/* Tarayıcı taraflı kodların diğer bir yararı ise kullanıcıya progresss bar(ilerleme çubuğu) tarzında görselleri sunabilmesidir. Tarayıcı genelde “tekrar boyama” kod tekrarlandıktan sonra ( repainting) işlemi yaptığından.

Bundan dolayı diyelim ki çok büyük işler yapan bir fonksiyon olsa bile, dökümanda bulunan değişiklik bu işlem tamamlandıktan sonra gerçekleşir.

ÖrneğiN:

<div id="progress"></div>

<script>
  let i = 0;

  function count() {

    for(let j = 0; j < 1e6; j++) {

      i++;

       anlık i değerini dive yazdır. <div>
       ( innerHTML ile ilgili daha sonraki bölümlerde konuşulacaktır.)
      progress.innerHTML = i;
    }
  }

  count();
</script>
Bunu çalıştıdığınızda i'nin değişikliği tüm sayma işlemi bittikten sonra görünür hale gelir.

eğer bunu setTimeout ile parçalara bölecek olursak bu defa daha güzel bir şekilde görünecektir.

<div id="progress"></div>

<script>
  let i = 0;

  function count() {

     yoğun işin bir bölümü (*)
    do {

      i++;

      progress.innerHTML = i;

    } while (i % 1e3 != 0);

    if (i < 1e9) {

      setTimeout(count, 0);
    }
  }

  count();
</script>
Artık <div> i nin yükselen değerini gösterecektir. */