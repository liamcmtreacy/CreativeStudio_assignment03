<script>
    import {onMount} from 'svelte';

    onMount(() => {
        console.log("Ocean Life Page Loaded Up");
    });
</script>

<h1> Welcome to Ocean Life</h1>
<p> Click on a link which you want to read about</p>

<div class="grid05">
    <ul class="clickableList">
        <li>
            <a href="/Clownfish">
                <img src="/assets/clownfish.png" alt="clownfish doodle">
                <p>Learn all about Clownfish by clicking here</p>
            </a>
        </li>

        <li>
            <a href="/Crab">
                <img src="/assets/crab.png" alt="crab doodle">
                <p>Learn about the Crab by clicking here</p>
            </a>
        </li>

        <li>
            <a href="/Dolphin">
                <img src="/assets/dolphin.png" alt="dolphin doodle">
                <p>Learn about the Dolphin by clicking here</p>
            </a>
        </li>

        <li>
            <a href="/Lobster">
                <img src="/assets/lobster.png" alt="lobster doodle">
                <p>Learn about Lobsters by clicking here</p>
            </a>
        </li>

        <li>
            <a href="/SeaSponge">
                <img src="/assets/seaSponge.png" alt="drawing of Sea Sponge">
                <p>Learn about Sea Sponges by clicking here</p>
            </a>
        </li>

        <li>
            <a href="/Squid">
                <img src="/assets/squid.png" alt="Squid Drawing">
                <p>Learn about Squid by clicking here</p>
            </a>
        </li>

        <li>
            <a href="/Starfish">
                <img src="/assets/starfish.png" alt="starfish doodle">
                <p>Learn about Starfish by clicking here</p>
            </a>
        </li>
    </ul>
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

    /* big fat list of styling for the ocean link */

    .clickableList {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    .clickableList li {
    margin-bottom: 20px;
    }

    .clickableList li a {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid white;
    font-weight: bold;
    border-radius: 12px;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    }

    p {
        font-weight: bold;
        color: white;
    }

    .clickableList li a:hover {
    background: rgba(255, 255, 255, 0.25);
    }

    .clickableList li a img {
    width: 120px;
    height: 120px;
    border: 2px solid white;
    border-radius: 10px;
    object-fit: cover;
    }

    .clickableList li a p {
    margin: 0;
    font-size: 20px;
    color: white;
    font-family: "Courier New", monospace;
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
