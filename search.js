function changeButtonText(text) {
  // Change the text of the search button
  document.querySelector('button[type="submit"]').innerHTML = text;
}

<script>
  function goToPage(page) {
    window.location.href = 'https://koalaxpanda.000webhostapp.com/playstationAPI/vendor/feed.php?list=' + page;
  }
</script>

function getData() {
  // Change the text of the search button to "Loading..."
  changeButtonText("Loading...");

  // Retrieve the value of the input field
  var title = document.getElementById("title").value;

  // Make the AJAX request
  $.ajax({
    url: "https://koalaxpanda.000webhostapp.com/playstationAPI/vendor/get_data2.php",
    type: "GET",
    data: { title: title },
    success: function(response) {
      // Update the response div with the AJAX response
      $("#response").html(response);

      // Change the text of the search button back to "Search"
      changeButtonText("Search");
    },
     error: function(response) {
      // Update the response div with the AJAX response
      $("#response").html(response);

      // Change the text of the search button back to "Search"
      changeButtonText("Search");
    }
  });

  return false; // Prevent the form from submitting and refreshing the page
}




function getpsData() {
  $.ajax({
    url: "https://koalaxpanda.000webhostapp.com/playstationAPI/vendor/psplus.php",
    type: "GET",
    success: function(psresponse) {
      $("#response").html(psresponse);
    }
  });
}



