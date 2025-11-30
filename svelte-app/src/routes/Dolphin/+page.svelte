<script>
import {base} from '$app/paths';
console.log("dolphin page loaded");
</script>
<h1>Dolphin</h1>

<div class = "grid03">
    <img id="CF" src="{base}/assets/dolphin.png" alt="Dolphin drawing">
       <table class="triviatable03">
        <tbody>
        <tr><td>There are 42 species of Dolphins.</td></tr>
        <tr><td>Dolphins do not chew, they break food down and then swallow.</td></tr>
        <tr><td>Dolphins eat Squids, Crabs and Fish.</td></tr>
        <tr><td>Dolphins are pregnant for 9-16 months.</td></tr>
        <tr><td>Dolphins are mammals, and must leave the water to breathe air.</td></tr>
        <tr><td>Doplhins have conical shaped teeth.</td></tr>
        </tbody>
    </table>
</div>

<a class="next-page" href="{base}/Lobster">Next Page</a>
<a class="previous_page" href = "{base}/Crab">Previous Page</a>

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

     .triviatable03 {
        font-weight: bold;
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        color: white;
        margin-left: -250px;        
        }

        .triviatable03 td {
        padding: 12px 0;       
        padding-right: 150px;  
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        }


    #CF{ width: 300px;         
    height: 300px;         
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
    display: block;
}

    .grid03{
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