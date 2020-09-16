<template>
    <div class="list-wrapper" ref="listwrapper">
        <ListComponent v-for="list in lists" v-bind:key="list.name" v-bind:list="list" :remove-list="removeList"/>

        <CreateListComponent v-bind:lists="lists" :after-creation-hook="scrollToNewList"/>
    </div>
</template>

<script>
    import ListComponent from "@/components/ListComponent";
    import CreateListComponent from "@/components/CreateListComponent";

    export default {
        components: {CreateListComponent, ListComponent},
        data() {
            return {
                lists: [
                    {
                        name: 'test',
                        cards: [
                            {id: 0, name: 'Mach mal was'},
                            {id: 1, name: 'Mach mal was anderes'},
                            {id: 2, name: 'Mach mal was'},
                            {id: 3, name: 'Mach mal was anderes'},
                            {id: 4, name: 'Mach mal was'},
                            {id: 5, name: 'Mach mal was anderes'},
                            {id: 6, name: 'Mach mal was'},
                            {id: 7, name: 'Mach mal was anderes'},
                            {id: 8, name: 'Mach mal was'},
                            {id: 9, name: 'Mach mal was anderes'},
                            {id: 10, name: 'Mach mal was'},
                            {id: 11, name: 'Mach mal was anderes'},
                            {id: 12, name: 'Mach mal was'},
                            {id: 13, name: 'Mach mal was anderes'},
                            {id: 14, name: 'Mach mal was'},
                            {id: 15, name: 'Mach mal was anderes'}
                        ]
                    },
                    {name: 'abcd', cards: []}
                ]
            };
        },
        methods: {
            removeList(list) {
                this.lists.splice(this.lists.indexOf(list), 1);
            },
            scrollToNewList() {
                this.$nextTick(() => {
                    // Scroll to new card
                    let el = this.$refs.listwrapper;
                    el.scrollLeft = el.scrollWidth;
                });
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .list-wrapper {
        width: unset;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 10px;
        overflow-y: hidden;
    }

    .list-wrapper .list {
        width: 300px;
        flex-shrink: 0;
        max-height: 100%;
        overflow-y: hidden;
        margin: 0 5px;
    }

    .list-wrapper .list > .md-card {
        max-height: 100%;

        display: flex;
        flex-direction: column;

        word-wrap: normal;
        overflow-wrap: anywhere;
    }

    .list-wrapper .list > .md-card .md-card-content {
        max-height: 100%;
        overflow-y: auto;
    }
</style>
