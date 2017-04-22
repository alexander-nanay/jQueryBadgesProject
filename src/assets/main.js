$(function() {
  var processData = function(data) {
    console.log(data.courses.completed);
    var badges = $("#badges");
    data.courses.completed.forEach(function(course) {
      badges.append(
        `<div class='course'>
          <h3>${course.title}</h3>
          <img src=${course.badge}></img>
          <a href=${course.url} target='_blank' class='btn btn-primary'>See Course</a>
        </div>`);
    });
  };

  $.ajax({
    url: "https://www.codeschool.com/users/alexnanay.json",
    dataType: "jsonp",
    success: processData
  })
});
