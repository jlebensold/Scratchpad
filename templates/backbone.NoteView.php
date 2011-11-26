<h2>
<% if (status == 'read') { %>
  <%= title %> <small class="edit"><a href="#">edit</a></small>
<% } else { %>
  <input type="text" class="title" value="<%= title %>"/>
<% } %>
</h2>
<p>
<% if (status == 'read') { %>
  <%= description %>
<% } else { %>
  <textarea class="description" value="<%= description %>"/>
  <br/>
  <button class="btn success save">save</button>
<% } %>
</p>

