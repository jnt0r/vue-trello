<template>
    <div class="list-wrapper">
        <ListComponent v-for="list in lists" v-bind:key="list.name" v-bind:list="list" :remove-list="removeList"/>

        <CreateListComponent :add-list="createList" />
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
                            {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'}, {name: 'Mach mal was'}, {name: 'Mach mal was anderes'},
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
            createList(name) {
                if (name !== '' && this.lists.filter(l => l.name === name).length === 0) {
                    this.lists.push({name: name, cards: []});
                }
            },
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
