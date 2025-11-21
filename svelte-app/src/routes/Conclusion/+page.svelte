<script>
    import {onMount} from 'svelte';

    onMount(() => {
        console.log("Conclusion Page Loaded Up");
    });
</script>

<h1> In Conclusion</h1>
<p> Thanks for reading my web zine, contact me at <a href = "mailto:info@example.com">Liamtreacy100@hotmail.com</a>.</p>

<style>
    h1 {color: aquamarine;}
    p {font-size: 18px;}
    a {color: #007bff; text-decoration: none;}
    a:hover {text-decoration: underline;}
</style>