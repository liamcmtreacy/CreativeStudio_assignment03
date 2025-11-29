<h1>Welcome to my Ocean Zine</h1>
<div class = "startingGrid">
<img id="OC" src="/assets/oceanTitle.png" alt="Drawing of Red Crab">
<p>This site is best suited to be read on a computer</p>
</div>
<a class="next-page" href="/About">Next Page</a>

<style>
 h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}
        
.startingGrid{
        display: grid;
        grid-template-columns: 1fr; /*forces text to be under image */
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;
    }

        #OC{ width: 600px;         
    height: auto; /* image looks weird without auto */
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
    display: block;
}

        p {
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        align-self: center;
        color: white;     
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
</style>