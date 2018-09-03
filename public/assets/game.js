$(document).ready(function () {
  	let addedDiamond, 
  		reverseCount,
  		counter;
	function randOrder() {
	    return (Math.round(Math.random())); 
	} 
	$('.cell').sort(randOrder).slice(0, 8).addClass('diamond hidden');

	//Adding Arrows
	$('.diamond').parent().prev().children().addClass('arrowRightBlock');
	$('.diamond').parent().next().children().addClass('arrowLeftBlock');

	$('.arrowLeftBlock').on('click', function(){
		$(this).addClass('arrowLeft').removeClass('.arrowLeftBlock');
	});
	$('.arrowRightBlock').on('click', function(){
		$(this).addClass('arrowRight').removeClass('.arrowRightBlock');
	});

	//initially loaded unknown class
	$('.diamondsweeper-board td div').addClass('unknown');
	$('.cell').on('click', function(){
		$(this).hasClass('diamond')?$(this).removeClass('unknown'):$(this).removeClass('unknown');
	});

	reverseCount = $('.diamond').length;
	counter = 0;

	$(document).on('click', '.diamond', function(){
		reverseCount--;
		switch(reverseCount){
			case 0:
				alert('Welcome! you finished your game and redierecting to some freebies.');
				window.location.href = "https://freebiemom.com/sweepstakes/gymboree-surprize-surprize-instant-win-game/";
				break;
			case 1:
				alert('1 more to found');
				break;
			case 2:
				alert('2 more to found');
				break;
			case 3:
				alert('3 more to found');
				break;
			case 4:
				alert('4 more to found');
				break;
			case 5:
				alert('5 more to found');
				break;
			case 6:
				alert('6 more to found');
				break;
			case 7:
				alert('7 more to found');
		};
		counter++;
		$('.messages > span').text(counter);
		$(this).addClass('diamondClicked').removeClass('diamond');
		$(this).parent().prev().children().removeClass('arrowRightBlock arrowRight arrowLeftBlock arrowLeft').addClass('empty');
		$(this).parent().next().children().removeClass('arrowRightBlock arrowRight arrowLeftBlock arrowLeft').addClass('empty');
		$(this).removeClass('arrowRightBlock arrowRight arrowLeftBlock arrowLeft');
	});
	//alert($('.diamond').length);
	$(document).on('click', '.empty', function(){
		$(this).removeClass('arrowRight arrowLeft');
	});
	
	document.getElementsByClassName("hidden").addEventListener("click", function(event){
	    event.preventDefault()
	});
});