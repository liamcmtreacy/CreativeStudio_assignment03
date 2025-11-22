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
        padding: 5;
        margin: 0;
		background-color: rgb(11, 80, 130);
        display: flex;
        justify-content: center;
    }
    
    nav ul li { /* i spaced out the words more because i thought they looked off too close together */
        margin: 0 100px;
    }
    
	 nav ul li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    nav ul li a:hover {
    color: #8c8c8c;        
}

	</style>