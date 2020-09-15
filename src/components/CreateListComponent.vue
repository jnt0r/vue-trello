<template>
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
</template>
<script>
    export default {
        name: 'CreateListComponent',
        props: ['addList'],
        data() {
            return {
                newListName: '',
            }
        },
        methods: {
            createList() {
                if (this.newListName !== '') {
                    this.addList(this.newListName);
                    this.newListName = '';
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
