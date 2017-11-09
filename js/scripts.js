$(document).ready(function(){
	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	$(window.location.hash).modal('show');
	 $('a[data-toggle="modal"]').click(function(){
	     window.location.hash = $(this).data('target');
	 });

	 function revertToOriginalURL() {
	     var original = window.location.href.substr(0, window.location.href.indexOf('#'))
	     history.replaceState({}, document.title, original);
	 }

	 $('.modal').on('hidden.bs.modal', function () {
	     revertToOriginalURL();
	 });

	 $('.card').each(function(){
	 	var rand = Math.floor(Math.random()*360);
	 	$(this).css('border-color','hsl(' + rand + ',100%,50%)');
	 	$($(this).data('target')).children().children().css('border-color','hsl(' + rand + ',100%,50%)');
	 });

	 $('input.answer').on('change',function(){
	 	$('input[name="' + this.name + '"]').not(this).prop('checked',false);
	 });

	 var answers = [
	 	{ "id": "question_1",
	 	  "answer": "B" },
	 	{ "id": "question_2",
	 	  "answer": "false" },
	 	{ "id": "question_3",
	 	  "answer": "C" },
	 	{ "id": "question_4",
	 	  "answer": "D"},
	 	{ "id": "question_5",
	 	  "answer": "true"},
	 	{ "id": "question_6",
	 	  "answer": "false"},
	 	{ "id": "question_7",
	 	  "answer": "false"},
	 	{ "id": "question_8",
	 	  "answer": "false"}

	 ];
	 
	 $('button.answer').click(function(){
	 	$('fieldset.' + this.name).attr('disabled','disabled');
		$('fieldset.' + this.name + ' button').css('background-color','grey');
	 	var input = $(this).attr('value');
	 	for(var i = 0; i<answers.length; i++){
	 		if(answers[i].id == $(this).attr('name')){
	 			if(answers[i].answer == input){
	 				$(this).css('background-color','#a2fba2');
	 				$('.card-block.' + $(this).attr('name')).append('<p>Correct!</p>');
	 			} else {
	 				$(this).css('background-color','#FFD1D1')
	 				$('.card-block.' + $(this).attr('name')).append('<p>Incorrect! Correct answer: ' + answers[i].answer.toString() + '</p>');

	 			}
	 		}
	 	}
	 });
});
