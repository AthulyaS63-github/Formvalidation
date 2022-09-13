
$(document).ready(function(){
	$("#p1").on({
	mouseenter:function(){
    		$(this).css("background-color", "lightgray");
	},
	mouseleave: function(){
      		$(this).css("background-color", "lightblue");
    	}, 
    	click: function(){
      		$(this).css("background-color", "yellow");
    	}  
 	 });
	$("p").dblclick(function(){
	   $(this).hide();
	   
	});
	$("button").click(function(){
		alert("Thank you!");
		$("p").toggle();
         });
	$("input").focus(function(){
    		$(this).css("background-color", "yellow");
  	});
	 $("input").blur(function(){
    		$(this).css("background-color", "green");
  	});
});
       
     