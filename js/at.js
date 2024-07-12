$(function(){
$('.at ing:gt(0)').hide();
setInterval(function(){
    $('.at :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.at');
}, 3000);
})
