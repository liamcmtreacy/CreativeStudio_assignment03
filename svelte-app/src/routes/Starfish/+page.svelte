<script>
import {base} from '$app/paths';
console.log("starfish page loaded");
</script>
<h1>Starfish</h1>

<div class = "grid08">
    <img id="CF" src="{base}/assets/starfish.png" alt="Drawing of Starfish">

         <table class="triviatable07">
        <tbody>
        <tr><td>Starfish do not have blood or even a brain.</td></tr>
        <tr><td>Starfish are actually called Sea Stars.</td></tr>
        <tr><td>Starfish cannot survive in fresh water.</td></tr>
        <tr><td>THere is 2000 species of Sea Star.</td></tr>
        <tr><td>Starfish have the ability to regenerate their limbs.</td></tr>
        <tr><td>There is a species of Sea Star called The Sun Star, which can grow up to 40 arms.</td></tr>
        </tbody>
    </table>

</div>

<a class="next-page" href="{base}/Conclusion">Next Page</a>
<a class="previous_page" href="{base}/Squid">Previous Page</a>

<style>
 h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}

        .triviatable07 {
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin-left: -250px;        
        }

        .triviatable07 td {
        padding: 12px 0;       
        padding-right: 150px;  
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
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

    #CF{ width: 350px;         
    height: 350px;         
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
    display: block;
}

    .grid08{
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