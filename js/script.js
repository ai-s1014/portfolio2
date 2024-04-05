// drawer menu
// ハンバーガーメニュー
$('.drawer-icon').on('click', function() {
	$(this).toggleClass('open');
	$('.drawer-nav').toggleClass('open');
  $('.drawer-background').toggleClass('open');
  $('.header-sp').toggleClass('open');


});

// .header-spが開いたときにスクロールイベントを無効化
$('.header-sp').on('click', function() {
  // スクロールイベントのリスナーを削除
  window.removeEventListener('scroll', handleScroll);
});

// スクロールイベントの処理
function handleScroll() {
  const currentY = window.scrollY;
  const header = document.querySelector('.header');

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
}

// 初期値の設定
let prevY = window.scrollY;
window.addEventListener('scroll', handleScroll);


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