let $xButton = $('#adder');


$("#skills").on("click", "button", function(){ //fades out li 
  $(this).closest("li").fadeOut(1000, function(){

  })
}


)



$("#adder").on("click",function(evt){ //adds to the li
 // first append asks to add a text box to the li and appends a button inside 
  $("#list").append(`<li>${$("#addedLists").val()}<button>x<button></button></li> `); 

  //backticks allow to call Temperate literals ` injecting javascript into a string’
} ) 

$("#addedLists").on("keypress",function(){ //adds to the li
 
  


} )   

