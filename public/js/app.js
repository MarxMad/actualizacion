M.AutoInit();
var instance = M.Tabs.init(el, options);
$('.pushpin-demo-nav').each(function() {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});
var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});



