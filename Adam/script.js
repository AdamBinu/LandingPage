$(function() {
  $(".skills-prog li .skills-bar").each(function(i) {
    var $bar = $(this).find(".bar");
    var percent = $(this).parent().data("percent");
    $bar.delay(i * 150).animate({
      width: percent + "%"
    }, 1000, "linear");
  });

  $(".skills-soft li svg").each(function(i) {
    var $circle = $(this).children(".cbar");
    var $text = $(this).siblings("small");
    var radius = $circle.attr("r");
    var circumference = 2 * Math.PI * radius;
    var percent = $(this).parent().data("percent");
    var offset = circumference * (1 - percent / 100);

    $circle.delay(i * 150).animate({
      strokeDashoffset: offset
    }, 1000, "linear");

    $text.prop("Counter", 0).delay(i * 150).animate({
      Counter: percent
    }, {
      duration: 1000,
      step: function(now) {
        $(this).text(Math.ceil(now) + "%");
      }
    });
  });
});
