$(document).ready(function() {
  
  //Employee attendance status widget Json request
  let urlEmployee = "data/employees.json";
  $.getJSON(urlEmployee, function(response) {
    let statusHTML = '<ul class="bulleted">';
    $.each(response, function(index, employee) {
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    }); //end .each function
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); //end getJSON
  
  //Meeting room status widget Json request
  let urlRoom = "data/rooms.json";
  $.getJSON(urlRoom, function(status) {
    let statusHTML = '<ul class="rooms">';
    $.each(status, function(index, rooms) {
      if (rooms.available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += rooms.room + '</li>';
    }); //end .each function
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML);
  }); //end getJSON
  
}); //end ready