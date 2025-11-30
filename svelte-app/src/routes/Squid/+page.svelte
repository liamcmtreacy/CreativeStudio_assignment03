<script>
import {base} from '$app/paths';
console.log("squid page loaded");
</script>

<h1>Squid</h1>

<div class = "grid07">
    <img id="CF" src="{base}/assets/squid.png" alt="Grey drawing of squid">

         <table class="triviatable06">
        <tbody>
        <tr><td>Squids have 3 hearts.</td></tr>
        <tr><td>Squid Ink contains a compound which damages a predators sense of smell.</td></tr>
        <tr><td>Squid's brains are shaped like donuts.</td></tr>
        <tr><td>Squidward Tentacles is an octopus, not a squid.</td></tr>
        <tr><td>Squid Ink is used for medicine in Spain and Italy.</td></tr>
        <tr><td>Scientists are currently experimenting with Sea Sponges as a treatment for cancer.</td></tr>
        </tbody>
    </table>
</div>

<a class="next-page" href="{base}/Starfish">Next Page</a>
<a class ="previous_page" href = "{base}/SeaSponge">Previous Page</a>

<style>
 h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
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
        background-color: #1270d4;
        text-decoration: none;
        transition: 0.2s ease-in-out;
    }

     .triviatable06 {
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        color: white;
        font-weight: bold;
        margin-left: -250px;        
        }

        .triviatable06 td {
        padding: 12px 0;       
        padding-right: 150px;  
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
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

    #CF{ width: 300px;         
    height: 300px;         
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
    display: block;
}

    .grid07{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;

    }

    .previous_page:hover {
        background-color: #074e99;
    }
</style>