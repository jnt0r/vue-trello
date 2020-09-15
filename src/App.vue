<template>
    <div id="app">
        <h1 class="md-headline">Trello Clon</h1>

        <Board style="flex: 1"></Board>
    </div>
</template>

<script>
    import Board from './components/Board.vue'

    export default {
        name: 'App',
        components: {
            Board
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-flow: column;
        height: 100vh;
        max-height: 100vh;
        overflow-y: hidden;
    }

    h1 {
        text-align: center;
    }

    Board {

    }
</style>
