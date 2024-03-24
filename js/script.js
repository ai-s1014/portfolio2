// drawer menu
// ハンバーガーメニュー
$('.drawer-icon').on('click', function() {
	$(this).toggleClass('open');
	$('.drawer-nav').toggleClass('open');
  $('.drawer-background').toggleClass('open');
});

// header スクロール 表示・非表示
// 画面をリサイズした際に作動
window.addEventListener("resize", function() {
  // 現在の画面幅を取得
  const screenWidth = window.innerWidth;

  // .header要素を取得
  const header = document.querySelector(".header");

  // 画面幅が641px以下かどうかをチェック
  if (window.innerWidth <= 641) {
    // 画面幅に応じてスクロール動作を設定
    let prevY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentY = window.scrollY;

      // 上にスクロールしている場合、ヘッダーを表示
      if (currentY < prevY) {
        header.classList.remove('hidden');
      } else {
        // 下にスクロールしていて、150pxを超えた場合、ヘッダーを非表示
        if (currentY > 150) {
          header.classList.add('hidden');
        }
      }

      prevY = currentY;
    });
  }
});


// swiper hero
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 500,
    

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

// アコーディオンメニュー
$('.accordion-title').click(function(){
  $(this).siblings('.accordion-menu').stop().slideToggle();
  $(this).toggleClass('active');
});

// wow
// 要素スクロール表示
window.addEventListener('scroll', function(e) {
  if( $(window).scrollTop() <= 50) {
      $('.wow').removeClass('animated');
      $('.wow').removeAttr('style');
      new WOW().init();
  }
});