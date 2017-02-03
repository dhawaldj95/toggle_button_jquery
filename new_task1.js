$(document).ready(function () {
   
    $("#button").click(function () {

        if($('#slideOne').is(':checked') == false)
        {
            console.log("it is false");
            $("#slideOne").prop("checked",true);
            $("#button").animate({left: '50px'});
            // $("#button").removeClass("left");
            // $("button").addClass("right");
            return false;
        }
    	
        if($("#slideOne").is(':checked') == true)
        {
            console.log("it is true");
            $("#slideOne").prop("checked",false);
            $("#button").animate({left: '7px'});
            // $("#button").removeClass("right");
            // $("#button").addClass("left");
            return false;
        }
     
    });


     $("#tag").click(function () {

        if($('#slideOne').is(':checked') == false)
        {
            console.log("it is false");
            $("#slideOne").prop("checked",true);
            $("#button").animate({left: '50px'});
            // $("#button").removeClass("left");
            // $("button").addClass("right");
            return false;
        }
        
        if($("#slideOne").is(':checked') == true)
        {
            console.log("it is true");
            $("#slideOne").prop("checked",false);
            $("#button").animate({left: '7px'});
            // $("#button").removeClass("right");
            // $("#button").addClass("left");
            return false;
        }
     
    });
  
});