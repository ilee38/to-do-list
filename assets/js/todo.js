//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");	//we can do it in one line by defining a css class instead
   /*
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	}else{
		$(this).css({		//use the brackets to select the object
		color: "gray",					//in an object, always use the camel notation
		textDecoration: "line-through"	//to select, in this case the "text-decoration" property
	});									//or any dash-separated css property.	
	
	//rather than doing it as 2 steps, do it with the object as above:
	//$(this).css("color", "gray");
	//$(this).css("text-decoration", "line-through");
	}
	*/
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){	//$(this).parent() gives the parent element of $(this)
		$(this).remove();						//in this case the li of the span
	});
	event.stopPropagation();	//add this jQery method to avoid "bubbling" effect
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){		//13 is the code for the Enter key
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");	//remove text from input box
		//create new li and add to ul. The .append() method will take a line of html and append it to the end
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});