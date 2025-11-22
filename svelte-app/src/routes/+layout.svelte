<script>
    
</script>


<nav>
    <ul>
        <li><a href="/">Home</a></li>
		<li><a href="/About">About Page</a></li>
        <li><a href="/OceanLife">Ocean Life</a></li>
        <li><a href="/Conclusion">Conclusion</a></li> 
    </ul>
</nav>

<slot />

<style>
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
		background-color: rgb(11, 80, 130);
        display: flex;
        justify-content: center;
    }
    
    nav ul li {
        margin: 0 15px;
    }
    
    nav ul li a {
        text-decoration: none;
		font-weight: bold;
        color: rgb(255, 255, 255);
	}

	</style>