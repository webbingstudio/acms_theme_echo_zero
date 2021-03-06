(function($){

$(function(){

  // プルダウンでページ移動
  // a-blog cmsのエントリー作成・アーカイブリスト
  $('select.js-select-location').on('change', function(e) {
    var href = $(this).val();
    if( href != "" ){
      window.location.href = href;
    }
  });

  // メインビジュアル
  $('.mainvisual .js-slick').slick({
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    dots: true
  });

  $('.offcanvas-right').hiraku({
      btn: '#offcanvas-btn-right',
      fixedHeader: '.header-menu-btn',
      direction: 'right'
  });

}); // end document.ready

})(jQuery); // end jquery


ACMS.Ready(function(){

/* autoheight */
ACMS.Config.autoHeightRArray = [
  {
    mark: '.summary',
    config: {
      style: 'height',
      element: '.summary-inner',
      offset: 0,
      parent: '.row',
      list: 'div[class*="col"]'
    }
  },
  {
    mark: '.card',
    config: {
      style: 'height',
      element: '.card-inner',
      offset: 0,
      parent: '.row',
      list: 'div[class*="col"]'
    }
  }
];

}); // end ACMS.ready
