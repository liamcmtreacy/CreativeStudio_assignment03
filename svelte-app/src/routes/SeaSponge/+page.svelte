<h1>Sea Sponge</h1>

<a class="next-page" href="/Squid">Next Page</a>
<a class="previous_page" href = "/Lobster">Previous Page</a>

<div class = "grid06">
      <img id="CF" src="/assets/seaSponge.png" alt="Drawing of Sea Sponge with holes">
     <table class="triviatable05">
        <tbody>
        <tr><td>Sea Sponges can reproduce sexually and asexually.</td></tr>
        <tr><td>Sea Sponges were once used for medicinal reasons, due to their high amount of Iodine.</td></tr>
        <tr><td>Sea Sponges are found in every ocean in the world.</td></tr>
        <tr><td>Sea Sponges have small hairs which help them move through the water</td></tr>
        <tr><td>There is some sea sponges which are believed to be 5000 years old.</td></tr>
        <tr><td>Scientists are currently experimenting with Sea Sponges as a treatment for cancer.</td></tr>
        </tbody>
    </table>
</div>

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

    .grid06{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;

    }

     .triviatable05 {
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        color: white;
        font-weight: bold;
        margin-left: -250px;        
        }

        .triviatable05 td {
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