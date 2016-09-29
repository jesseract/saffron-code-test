function displayPosts() {
  var root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    url: root + '/posts',
    method: 'GET'
  }).then(function(data) {
    console.log(data);
    
  listResults(data);
    }
  );
}

function listResults(results) {
  var postsColumn = $("#postsColumn");

  for (var i = 0; i < results.length; i += 1) {
    var post = $('<div>');
    var result = results[i];
      
    var title = $('<p>');
    title.addClass("title");
    title.text("Title: " + result.title);
    post.append(title);
    
    var userId = $('<p>');
    userId.addClass("userId");
    userId.text("User ID: " + result.userId);
    post.append(userId);
    
    var body = $('<p>');
    body.addClass("body");
    body.text("Body: " + result.body);
    post.append(body);
    
    postsColumn.append(post);
  }
}

displayPosts();