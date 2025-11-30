<script>
import {base} from '$app/paths';
console.log("lobster page loaded");
</script>

<h1>Lobster</h1>

<div class = "grid04">
    <img id="CF" src="{base}/assets/lobster.png" alt="Red Lobster drawing">
     <table class="triviatable04">
        <tbody>
        <tr><td>Lobsters are only red when they are cooked, live lobsters are usually dark green - brown.</td></tr>
        <tr><td>Lobsters turn to cannibalism if food is scarce.</td></tr>
        <tr><td>Lobster's blood is clear.</td></tr>
        <tr><td>It’s not illegal to hunt lobsters at night with a flashlight, but the limit you can take is seven.</td></tr>
        <tr><td>Lobsters were originally seen as poor man's food.</td></tr>
        <tr><td>Lobsters have teeth inside their stomach.</td></tr>
        </tbody>
    </table>
    
</div>

<a class="next-page" href="{base}/SeaSponge">Next Page</a>
<a class="previous_page" href = "{base}/Dolphin">Previous Page</a>

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

    #CF{ width: 300px;         
    height: 300px;         
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
    display: block;
}

 .triviatable04 {
        width: 100%;
        font-family: "Courier New", monospace;
        font-weight: bold;
        font-size: 20px;
        color: white;
        margin-left: -250px;        
        }

        .triviatable04 td {
        padding: 12px 0;       
        padding-right: 150px;  
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        }


    .next-page:hover {
        background-color: #074e99;
    }

    .grid04{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;
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