<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <link rel="icon" href="{base}/logo.png" />
</svelte:head>

<nav>
  <ul>
    <li><a href="{base}/">Home</a></li>
    <li><a href="{base}/About">About Page</a></li>
    <li><a href="{base}/OceanLife">Ocean Life</a></li>
    <li><a href="{base}/Conclusion">Conclusion</a></li>
  </ul>
</nav>

<slot />

<style>
  nav ul {
    list-style: none;
    padding: 5;
    padding-bottom: 10px;
    margin: 0;
    background-color: rgb(11, 80, 130);
    display: flex;
    justify-content: center;
  }

  nav ul li {
    margin: 0 150px;
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
  }

  nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  nav ul li a:hover {
    color: #8c8c8c;
  }
</style>
