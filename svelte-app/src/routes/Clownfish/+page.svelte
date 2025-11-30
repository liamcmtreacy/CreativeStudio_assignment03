<script>
        import {base} from '$app/paths';
        console.log("clownfish page loaded");
</script>
<h1>Clownfish</h1>
<div class = "grid01">

    <img id="CF" src="{base}/assets/clownfish.png" alt="Orange and white clownfish swimming">

    <table class="triviatable">
        <tbody>
        <tr><td>Clownfish are all born males. Once they become female, they cannot be male again.</td></tr>
        <tr><td>Clownfish eggs can be hatched anytime during the year.</td></tr>
        <tr><td>After the eggs are laid, the male clownfish guards them until they hatch.</td></tr>
        <tr><td>Clownfish communicate by making popping and clicking noises.</td></tr>
        <tr><td>Clownfish typically live for around 6–10 years.</td></tr>
        <tr><td>Clownfish are carnivores.</td></tr>
        </tbody>
    </table>

</div>

<a class="next-page" href="{base}/Crab">Next Page</a>
<a class="previous_page" href = "{base}/OceanLife">Previous Page</a>

<style>
 h1 {color: #ffffff; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;}

        .triviatable {
        width: 100%;
        font-family: "Courier New", monospace;
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin-left: -250px;        
        }

        .triviatable td {
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

        #CF {
    width: 300px;    
    height: 300px;             
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
    display: block;
}

    .grid01{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        background-color: #1c3abd;
        padding: 30px;
        border-radius: 25px;

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