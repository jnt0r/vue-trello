<template>
    <div class="list">
        <md-card md-with-hover>
            <md-card-actions class="card">
                <md-field md-inline md-clearable>
                    <label>List name</label>
                    <md-input v-model="newListName" v-on:keyup.enter="createList"></md-input>
                </md-field>
                <md-button class="md-primary md-icon-button" v-on:click="createList">
                    <md-icon>add</md-icon>
                </md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    export default {
        name: 'CreateListComponent',
        props: ['lists', 'afterCreationHook'],
        data() {
            return {
                newListName: '',
            }
        },
        methods: {
            createList() {
                if (this.newListName !== '' && this.lists.filter(l => l.name === name).length === 0) {
                    this.lists.push({name: this.newListName, cards: []});
                    this.newListName = '';
                    this.afterCreationHook();
                }
            }
        }
    }
</script>
<style scoped>
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .card > .md-field {
        flex: 1;
    }
</style>
