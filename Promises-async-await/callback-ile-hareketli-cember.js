/* -> Callback ile hareketli çember
Animasyonlu Daire görevinde hareketli bir şekilde büyüyen bir çember görünmektedir.

Diyelim ki sadece çember değil, bunun içinde mesaj da olsun. Mesaj animasyon tamamlandıktan sonra ( çemberin en büyük halinde ) görünmelidir. Aksi halde çirkin görünecektir.

Görevin çözümünde, showCircle(cx, cy, radius) çemberi çizmektedir, fakat hazır olup olmadığına dair hiçbir bilgi vermemektedir.

Yeni bir callback argümanı ekle: showCircle(cx, cy, radius, callback) animasyon tamamlandığında çağırılmalıdır. callback çemberin <div>'ini argüman olarak almalı.

Örneğin:

showCircle(150, 150, 100, div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
}); */

<!DOCTYPE html>
<html>

{/* <head>
  <meta charset="utf-8">
  <style>
    .message-ball {
      font-size: 20px;
      line-height: 200px;
      text-align: center;
    }
    .circle {
      transition-property: width, height, margin-left, margin-top;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    } */}
{/*   </style>
</head>

<body>

  <button onclick="go()">Click me</button>

  <script> */}

  function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    }, 0);
  }
{/*   </script>


</body>
</html> */}

// TODO html css öğrenince örneğe bak</html>