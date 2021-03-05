
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      console.log("change devour")
      var id = $(this).data("id");
      var newDevour = $(this).data("new");
      console.log(newDevour)
    var newDevourState = {
      devour: newDevour
    };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("reload")
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#br").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/new-burger", {
        type: "POST",
        data: newBurger,
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});