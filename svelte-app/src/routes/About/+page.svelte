<script>
    import {onMount} from 'svelte';
    import {base} from '$app/paths';

    onMount(() => {
        console.log("About Page Loaded Up");
    });
</script>
<div class = "gridBlue">
<h1> So what is this page about?</h1>
<p> This web zine has been created for a college assignment, I have always had an interest in the Ocean
    and wanted to create a site about it, and some creatures and aspects of it which I find interesting.

    I hope you enjoy what you see!
</p>
</div>

<a class="next-page" href="{base}/OceanLife">Next Page</a>
<a class ="previous_page" href ="{base}">Previous Page</a>

<style>
           h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}

        p { font-size: 18px;
            font-family: 'Courier New', Courier, monospace;
            color: #ffffff; 
            font-weight: bold;
            text-align: center;}
            
            .gridBlue{
        display: flex;;
        flex-direction: column;
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;
        width: 75%;
        align-items: center;
        margin: 30px auto;
/* code from conclusion */
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