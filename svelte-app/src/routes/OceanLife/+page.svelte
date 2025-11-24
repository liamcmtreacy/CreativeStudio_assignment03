<script>
    import {onMount} from 'svelte';

    onMount(() => {
        console.log("Ocean Life Page Loaded Up");
    });
</script>

<h1> Welcome to Ocean Life</h1>
<p> Click on a link which you want to read about</p>

<div class = "grid05">

<nav>
    <ul>
        <li><a href="/Clownfish">Clownfish</a></li>
		<li><a href="/Crab">Crab</a></li>
        <li><a href="/Dolphin">Dolphin</a></li>
        <li><a href="/Lobster">Lobster</a></li> 
        <li><a href="/SeaSponge">Sea Sponge</a></li>
        <li><a href="/Squid">Squid</a></li>
        <li><a href="/Starfish">Starfish</a></li> 
    </ul>
</nav>
</div>


<a class="next-page" href="/Clownfish">Next Page</a>
<a class="previous_page" href="/About">Previous Page</a>

<style>
    h1 {
        color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    p {
        font-size: 18px;
        font-family: 'Courier New', Courier, monospace;
        color: #000000; 
        text-align: center;
    }

       .next-page {
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 18px;
        color: #ffffff;
        padding: 8px 14px;
        border-radius: 6px;
        background-color: #1270d4;
        text-decoration: none;
        transition: 0.2s ease-in-out;
    }

    .grid05{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;

    }

    .next-page:hover {
        background-color: #074e99;
    }
    /* Code is basically the same, except it goes to a previous page, and is on the opposite side of the page */
    .previous_page {
        position: fixed;
        bottom: 20px;
        left: 20px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 18px;
        color: #ffffff;
        padding: 8px 14px;
        border-radius: 6px;
      background-color: #1270d4;
        text-decoration: none;
        transition: 0.2s ease-in-out;
    }

    .previous_page:hover {
        background-color: #074e99;
    }
    
</style>
