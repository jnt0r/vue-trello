<template>
    <div class="list-wrapper">
        <ListComponent v-for="list in lists" v-bind:key="list.name" v-bind:list="list" :remove-list="removeList"/>

        <div class="list">
            <md-card md-with-hover>
                <md-card-content class="card">
                    <md-field>
                        <label>List name</label>
                        <md-input v-model="newListName" v-on:keyup.enter="createList"></md-input>
                    </md-field>
                    <md-button class="md-primary md-icon-button" v-on:click="createList">
                        <md-icon>add</md-icon>
                    </md-button>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
    import ListComponent from "@/components/ListComponent";

    export default {
        components: {ListComponent},
        data() {
            return {
                newListName: '',
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
            createList() {
                if (this.newListName !== '' && this.lists.filter(l => l.name === this.newListName).length === 0) {
                    this.lists.push({name: this.newListName, cards: []});

                    this.newListName = '';
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

    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .card > .md-field {
        flex: 1;
    }
</style>
