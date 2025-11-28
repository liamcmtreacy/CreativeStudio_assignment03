<script>
    import {onMount} from 'svelte';
	import Page from '../+page.svelte';

    onMount(() => {
        console.log("Conclusion Page Loaded Up");
    });
</script>
<div class = "grid09">
    <h1> In Conclusion</h1>
<p> Thanks for reading my web zine, if you are interesting in getting in contact me at, sned me an email at Liamtreacy100@hotmail.com</p>

<h2> References</h2>
<table class = "referTable">
    <tbody>
<tr><td> https://www.nationalgeographic.com/animals/fish/facts/clownfish </td></tr>
<tr><td> https://www.barrierreef.org/the-reef/animals/clownfish </td></tr>
<tr><td> https://www.sophieallport.com/blogs/lifestyle/10-clawsome-crab-facts-we-love</td></tr>
<tr><td> https://uk.whales.org/whales-dolphins/facts-about-dolphins/</td></tr>
<tr><td> https://www.woodmans.com/100-lobster-facts/</td></tr>
<tr><td> https://www.uw360.asia/17-fascinating-facts-about-sea-sponges/ </td></tr>
<tr><td> https://xperiaupclose.com/7-fascinating-facts-about-squids-that-will-surprise-your-kids/ </td></tr>
<tr><td> https://www.pacificbeachcoalition.org/sea-star-fun-facts/</td></tr>
</tbody>
</table>
</div>


<a class="previous_page" href="/Starfish">Previous Page</a>

<style>
        h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}

           h2 {color: #ffffff; 
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}

        p { font-size: 18px;
            font-family: 'Courier New', Courier, monospace;
            color: #ffffff; 
            font-weight: bold;
            text-align: center;}
            
            .grid09{
        display: flex;;
        flex-direction: column;
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;
        width: 75%;
        align-items: center;
        margin: 30px auto;
/* Had to make some changes to this grid, it was being odd, but got it working */
    }

      .referTable {
        font-weight: bold;
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        color: white;
        /*randomly fixes problem, not sure why */        
        }

        .referTable td {
        padding: 12px 0;       
        padding-right: 150px;  
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
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
