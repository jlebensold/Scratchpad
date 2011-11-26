<h2>
<% if (status == 'read') { %>
  <a href="#" class="draw <%= (selected) ? 'active' : '' %>"><%= title %></a> <small class="edit"><a href="#">edit</a></small>
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
  <button class="btn success save">save</button>&nbsp; <button class="btn delete danger">delete</button>
<% } %>
</p>
<div class="pad"></div>
