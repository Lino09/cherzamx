var main = function() {

  $('.selector').on("click", (event) => {
    $(event.currentTarget).siblings().slideToggle();
  });

  $('.infobox').on("mouseleave", (event) => {
    $('.selector').siblings().slideUp();
  });





};

$(document).ready(main);
