$(document).ready(function() {
//	$('input').css{
//		'width': '200px',
//		'margin-left': '50px',
//		'text-align': 'center',
//	});
	$('#form').submit(function() {
				
		if(($('#name').val() == '') || ($('#surname').val() == '')) {
			alert('Uzupełnij wymagane pola');
			return false;
		}
	});
	
	$('#name').tooltip({
		content: 'Wprowadź imię'
	});
	
	$('input').click(function(){
		if($(this).val() == '') {
			$(this).blur(function() {
				$(this).css({
					'border': '2px solid red'
				});
			});
		}
	});
	
	$('input').focus(function() {
		$(this).css({
			'border': '2px solid #29b6cf',
			'background': '#fffedd'
		});
	});
	
	$('#date').datepicker({
		dayNamesMin: ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', ],
		monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
		dateFormat: 'dd-mm-yy',
		duration: 2000,
		prevText: 'Poprzedni',
		nextText: ' Następny',
		showAnim: 'fold',
		weekHeader: 'W'
	}).css({
		'color': 'green'
	});
});
