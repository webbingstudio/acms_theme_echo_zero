(function($){

$(function(){

  // プルダウンでページ移動
  // a-blog cmsのエントリー作成・アーカイブリスト
  $('select.js-select-href').on('change', function(e) {
    var href = $(this).val();
    if( href != "" ){
      window.location.href = href;
    }
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
