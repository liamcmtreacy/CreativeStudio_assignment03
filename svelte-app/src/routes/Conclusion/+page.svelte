<script>
    import {onMount} from 'svelte';

    onMount(() => {
        console.log("Conclusion Page Loaded Up");
    });
</script>

<h1> In Conclusion</h1>
<p> Thanks for reading my web zine, contact me at <a href = "mailto:info@example.com">Liamtreacy100@hotmail.com</a>.</p>

<a class="previous_page" href="/Starfish">Previous Page</a>

<style>
        h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}

        p { font-size: 18px;
            font-family: 'Courier New', Courier, monospace;
            color: #000000; 
            text-align: center;}
            
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
