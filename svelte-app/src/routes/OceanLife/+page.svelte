<script>
    import {onMount} from 'svelte';

    onMount(() => {
        console.log("Ocean Life Page Loaded Up");
    });
</script>

<h1> Welcome to Ocean Life</h1>
<p> Click on a link which you want to read about</p>

<style>
        h1 {color: #5aa1ed; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        border-bottom: #5aa1ed;}

        p { font-size: 18px;
            font-family: 'Courier New', Courier, monospace;
            text-align: center;}
</style>