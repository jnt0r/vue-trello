<template>
    <div class="list-wrapper" ref="listwrapper">
        <ListComponent v-for="list in lists" :key="list.name" :list="list" :remove-list="removeList"/>

        <CreateListComponent :lists="lists" :after-creation-hook="scrollToNewList"/>
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
                        id: 0,
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

                        ]
                    },
                    {
                        id: 1,
                        name: 'abcd', cards: [
                            {id: 16, name: 'Karte1'},
                            {id: 17, name: 'Bin Karte 2'},
                            {id: 18, name: 'Noch ne Karte'},
                            {id: 19, name: 'Irgendwas anderes'},
                        ]
                    },
                    {id: 2, name: 'abcd12', cards: []},
                    {id: 3, name: 'abcd44', cards: []},
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
