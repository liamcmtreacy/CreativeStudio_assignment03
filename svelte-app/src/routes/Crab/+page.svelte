<script>
import {base} from '$app/paths';
console.log("crab page loaded");
</script>

<h1>Crabs</h1>

<div class = "grid02">
    <img id="CF" src="{base}/assets/crab.png" alt="Drawing of Red Crab">

     <table class="triviatable02">
        <tbody>
        <tr><td>The smallest Crab is the pea crab, which measures 0.27 - 0.47 inches long.</td></tr>
        <tr><td>A group of crabs is called a cast.</td></tr>
        <tr><td>Crabs can walk forward, however they are rather slow, so they walk sideways as it is faster.</td></tr>
        <tr><td>Crabs have 10 feet.</td></tr>
        <tr><td>The japanese spider crab can live for over 100 years.</td></tr>
        <tr><td>Some crabs can see 360 degrees around them, due to their eyes being on their stalks.</td></tr>
        </tbody>
    </table>
</div>


<a class="next-page" href="{base}/Dolphin">Next Page</a>
<a class="previous_page" href="{base}/Clownfish">Previous Page</a>

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

    #CF{ width: 300px;         
    height: 300px;         
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
    display: block;
}

  .triviatable02 {
        font-weight: bold;
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        color: white;
        margin-left: -250px;        
        }

        .triviatable02 td {
        padding: 12px 0;       
        padding-right: 150px;  
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        }

     .grid02{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;

    }
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