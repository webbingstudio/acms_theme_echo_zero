(function($){

$(function(){



}); // end document.ready

})(jQuery); // end jquery


ACMS.Ready(function(){

/* autoheight */
ACMS.Config.autoHeightRArray = [
  {
    mark: '.summary',
    config: {
      style: 'height',
      element: '',
      offset: 0,
      parent: '.row',
      list: 'div[class*="col"]'
    }
  },
  {
    mark: '.card',
    config: {
      style: 'height',
      element: 'a',
      offset: 0,
      parent: '.row',
      list: 'div[class*="col"]'
    }
  }
];

}); // end ACMS.ready
