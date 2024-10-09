<script>
    export let links = [
      { name: 'Pynecraft', href: '/Pynecraft/Main' },
      { name: 'Pynecraft Editor', href: '/Pynecraft/Editor' },
      { name: 'Pynecraft Server', href: '/Pynecraft/Server' }
    ];
    export let onLinkClick;
  </script>
  
  <aside class="sidebar">
    <h4 style="user-select:none; font-family:Arial, Helvetica, sans-serif; text-align:center; margin: 0px;margin-bottom:10px;">Pynecraft Products</h4>
    <nav>
      {#each links as link}
        <a type="button" class="nav-link" on:click={() => onLinkClick(link.href)}>
          {link.name}
        </a>
      {/each}
    </nav>
  </aside>
  
  <style>
    .sidebar {
      width: 200px;
      height: 100vh;
      background-color: #3a3a3a; /* Sidebar dark color */
      color: #e0e0e0; /* Sidebar text color */
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 20px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    }
  
    .nav-link {
      display: block;
      padding: 10px 20px;
      text-decoration: none;
      color: #e0e0e0; /* Light text */
      transition: background-color 0.3s;
      font-family: Arial, Helvetica, sans-serif;
      user-select: none;
    }
  
    .nav-link:hover {
      background-color: #555; /* Darker hover color */
    }
  </style>
  