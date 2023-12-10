// console.log("run");

$('#button').click(function(){
    $('.view').hide();
})

$('#button-view').click(function(){
    $('.view').show();
})
// ==========

$(document).ready(function () {
    $('#about, #price, #details').hide();
    $('#home').show();
})

$('.item-home').click(function(){
    $('#about, #price, #details').hide();
    $('#home').show();
})

$('.item-about').click(function(){
    $('#home, #price, #details').hide();
    $('#about').show();
})

$('.item-price').click(function(){
    $('#home, #about, #details').hide();
    $('#price').show();
})

$('.item-detail').click(function(){
    $('#home, #about, #price').hide();
    $('#details').show();
})

