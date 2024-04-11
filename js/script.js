// drawer menu
// ハンバーガーメニュー
$('.drawer-icon').on('click', function() {
	$(this).toggleClass('open');
	$('.drawer-nav').toggleClass('open');
  $('.drawer-background').toggleClass('open');
  $('.header-sp').toggleClass('open');
});

// header スクロール表示非表示
// drawer-iconがクリックされたかどうかのフラグ
let iconClicked = false;

// drawer-icon要素を取得
const drawerIcon = document.querySelector('.drawer-icon');
// ドロワーアイコンのクリックイベントを設定
drawerIcon.addEventListener('click', function() {
  iconClicked = !iconClicked; // フラグを反転させる
});

// スクロールイベント
function headerScroll() {
  if (iconClicked) {
    // drawer-iconがクリックされた場合は何もしない
    return;
  }
  // 現在のスクロール量を取得
  const currentY = window.scrollY;
  // header要素を取得
  const header = document.querySelector('.header');

  if (currentY < prevY) {
    // 上にスクロールしたらheader要素のhiddenクラスを削除
    header.classList.remove('hidden');
  } else if (currentY > 150) {
    // 下に150px以上スクロールしたらheader要素にhiddenクラスを付与
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  prevY = currentY;
}

// 初期化
let prevY = window.scrollY;
window.addEventListener('scroll', headerScroll);

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