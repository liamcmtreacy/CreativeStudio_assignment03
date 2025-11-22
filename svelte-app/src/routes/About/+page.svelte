<script>
    import {onMount} from 'svelte';

    onMount(() => {
        console.log("About Page Loaded Up");
    });
</script>

<h1> So what is this page about?</h1>
<p> This web zine has been created for a college assignment, I have always had an interest in the Ocean
    and wanted to create a site about it, and some creatures and aspects of it which I find interesting.
</p>

<a class="next-page" href="/OceanLife">Next Page</a>

<style>
        h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}

        p { font-size: 18px;
            font-family: 'Courier New', Courier, monospace;
            color: #000000; 
            text-align: center;}

            
          .next-page {
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 18px;
        color: #ffffff;
        padding: 8px 14px;
        border-radius: 6px;
        background-color: #5aa1ed;
        text-decoration: none;
        transition: 0.2s ease-in-out;
    }

    .next-page:hover {
        background-color: #2d79c9;
    }
</style>