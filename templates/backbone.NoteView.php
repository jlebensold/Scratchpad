
<% if (status == 'read') { %>
<h2>
  <a href="#" class="draw <%= (selected) ? 'active' : '' %>"><%= title %></a>
</h2>
<small class="edit"><a href="#">edit</a></small>
<% } else { %>
  <input type="text" class="title" value="<%= title %>"/>
<% } %>
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
<div style="clear:both"></div>
