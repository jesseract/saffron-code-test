<sample>
  <h3>Users</h3>
  <ul>
    <li each={ opts.userList }><a href="javascript:showUserProfile('{id}')">{ username }</a></li>
  </ul>

  <script>
  </script>

  <style scoped>
    :scope { font-size: 2rem }
    h3 { color: #444 }
    ul { color: #999 }
  </style>
</sample>
