const api_url= "https://catfact.ninja/fact"; 


$(document).ready(function() {
  $('#clicker').click(function() {
    console.log("Testing")
    $.ajax({
      dataType: "json",
      url: "https://catfact.ninja/fact",
      success: function(results) {
        console.log(results);
        $("#cat-fact").html(results['fact']);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  }); 

  $('#clicker-two').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(statement) {
        console.log(statement);
        $('#kittens').attr("src", statement["image"]);
        
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});