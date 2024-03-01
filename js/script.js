// drawer menu
// ハンバーガーメニュー
$('.drawer-icon').on('click', function() {
	$(this).toggleClass('open');
	$('.drawer-nav').toggleClass('open');
});

// header スクロール 表示・非表示
const header = document.querySelector('.header'); //.headerを取得
let prevY = window.scrollY; // 現在のスクロール位置を取得

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  // 現在のスクロール位置が前回よりも上にある場合と下にある場合で処理を分岐
  if (currentY < prevY) { // 上にスクロールしてる場合
    header.classList.remove('hidden');
  } else {
  if (currentY > 150) { // 下にスクロールしてる場合 高さ150px
      header.classList.add('hidden');
    }
  }
  prevY = currentY;
});

// swiper hero
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});
