var root = 'http://jsonplaceholder.typicode.com';

function makeApiRequest(path, handleSuccess, handleFailure) {
  $.ajax({
      dataType: "jsonp",
      url: root + path,
      method: 'GET'
    }).done(handleSuccess)
    .fail(handleFailure);
}

function listUsers(onSuccess) {
  makeApiRequest('/users', onSuccess, function() {
    console.error('something went wrong');
  })
}

function listPosts(userId, onSuccess) {
  var postsPath = '/posts?userId=' + userId;
  makeApiRequest(postsPath, onSuccess, function() {
    console.error('WTF');
  })
}

function listComments(postId, onSuccess) {
  makeApiRequest('/comments?postId=' + postId, onSuccess, function() {
    console.error('Yo');
  })
}

function listPostsAndComments(userId, onSuccess) {
  listPosts(userId, function(postList) {
    var postsWithComments = postList.map(function(post) {
      return {
        post: post,
        comments: []
      }
    });

    var howManyCommentListsIExpect = postsWithComments.length;
    var howManyCommentListsIHave = 0;

    postsWithComments.forEach(function(postWithComments) {
      listComments(postWithComments.post.id, function(commentList) {
        postWithComments.comments = commentList;

        howManyCommentListsIHave += 1;

        if (howManyCommentListsIHave === howManyCommentListsIExpect){
          onSuccess(postsWithComments);
        }
      });

    });
  });

}
//////////////////////////////////////////////////////////////////////////////////////////////////

// listUsers(function(userList) {
//     userList.forEach(function(user) {
//       listPostsAndComments(user.id, function(postsWithComments) {
//         console.log(user.id, postsWithComments);
//       })
//     })
//   });
