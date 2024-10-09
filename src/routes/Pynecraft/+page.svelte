<script>
  import Sidebar from '$lib/Sidebar.svelte';
  let currentUrl = '/Pynecraft/Main'; // Default URL for the iframe

  function handleLinkClick(url) {
    currentUrl = url;
  }
</script>

<div class="layout">
  <Sidebar onLinkClick={handleLinkClick} />
  <main class="content">
    <iframe src={currentUrl} class="iframe-content" title="Pynecraft iFrame"></iframe>
  </main>
</div>

<style>
  /* Layout and Content Styles */
  .layout {
    display: flex;
  }

  .content {
    margin-left: 200px; /* Adjust this value based on your sidebar width */
    flex-grow: 1;
    background-color: #121212; /* Dark background */
    color: #e0e0e0; /* Light text color */
  }

  .iframe-content {
    width: calc(100% - 200px);
    height: 100vh;
    border: none;
    position: absolute;
    top: 0%;
    left: 200px;
    right: 0%;
    bottom: 0%;
    background: #1e1e1e; /* Dark iframe background */
    color: #e0e0e0; /* Light text for iframe */
  }
</style>
