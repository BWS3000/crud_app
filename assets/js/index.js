$("#add_user").submit(function(event) {
  alert("Data submitted!");
})

$("#update_user").submit(function(event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function(n, i){
    data[n['name']] = n['value']
  })

  var request = {
    "url" : `http://localhost:3000/api/users/${data.id}`,
    "method" : 'PUT',
    "data" : data
  }

  $.ajax(request).done(function(response){
    alert("Data has been updated!");
  })
})

if(window.location.pathname== "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.clock(function() {
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/users/${id}`,
      "method" : 'DELETE',
    }

    if(confirm("Confirm that you want to delete this record.")) {
      $.ajax(request).done(function(response){
        alert("Data has been deleted!");
        location.reload();
      })
    }

  })
}
