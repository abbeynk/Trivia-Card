$(document).ready(() =>{
$('.hint-box').on('click', () => {
 $('.hint').slideToggle(800)
});
$('.wrong-answer-one').on('click', () => {
 $('.wrong-answer-one').fadeOut('slow')
 $('.frown').show();
});
$('.wrong-answer-one').fadeOut('slow')
 $('.wrong-answer-two').fadeOut('fast')
 $('.frown').show();
});
 $('.wrong-answer-three').on('click', () => {
 $('.wrong-answer-three').fadeOut('')
 $('.frown').show();
 });

  $('.correct-answer').on('click', () => {
 $('.frown').hide();
 $('.smiley').show();
 $('.wrong-answer-one').fadeOut('slow')
 $('.wrong-answer-two').fadeOut('slow')
$('.wrong-answer-three').fadeOut('slow')
 });
