$(document).ready(function(){

	// function to show dropdown menu 
	$("#recipeMenuContainer").on('click', function(evt){
	    $("#recipeDropDown").slideDown(100);
	    evt.stopPropagation();
	})

	$(document).on('click', function(evt){
    	if(!$(evt.target).is('#recipeDropDown')){
        	$('#recipeDropDown').slideUp(100);
    	}
	});
});