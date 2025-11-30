<script>
    // import Navigation.svelte from lib folder
    import { Navigation } from "$lib"
</script>


<header>
    <!-- Navigation -->
    <Navigation />
</header>


<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: lightskyblue;
        color: white;
        padding: 1rem;
    }
    </style>