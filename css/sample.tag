<sample>
  <h3>Users</h3>
  <ul>
    <li each={ opts.userList }><button onclick="showUserProfile('{id}')">{ email }</button></li>
  </ul>

  <script>
  </script>

  <style scoped>
    :scope { font-size: 2rem }
    h3 { color: #444 }
    ul { color: #999 }
  </style>
</sample>
