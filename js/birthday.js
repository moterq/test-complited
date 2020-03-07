$('.dropdown-day').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu-day').slideToggle(300);
});
$('.dropdown-day').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu-day').slideUp(300);
});
$('.dropdown-day .dropdown-menu-day li').click(function () {
    $(this).parents('.dropdown-day').find('span').text($(this).text());
    $(this).parents('.dropdown-day').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu-day li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown-day').find('input').val() + '</strong>',
  msg = '<span class="msg"> ';
$('.msg').html(msg  + '</span>');
}); 

/////////////////////////////////////month

$('.dropdown-month').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu-month').slideToggle(300);
});
$('.dropdown-month').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu-month').slideUp(300);
});
$('.dropdown-month .dropdown-menu-month li').click(function () {
    $(this).parents('.dropdown-month').find('span').text($(this).text());
    $(this).parents('.dropdown-month').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu-month li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown-month').find('input').val() + '</strong>',
  msg = '<span class="msg"> ';
$('.msg').html(msg  + '</span>');
}); 

//////////////////////////////////year

$('.dropdown-year').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu-year').slideToggle(300);
});
$('.dropdown-year').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu-yearday').slideUp(300);
});
$('.dropdown-year .dropdown-menu-year li').click(function () {
    $(this).parents('.dropdown-year').find('span').text($(this).text());
    $(this).parents('.dropdown-year').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu-year li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown-year').find('input').val() + '</strong>',
  msg = '<span class="msg"> ';
$('.msg').html(msg  + '</span>');
}); 