<template>
    <md-card md-with-hover>
        <md-card-header>
            <template v-if="!showEditCard">
                <div class="md-body-2" @dblclick="showEditCard = true">{{ card.name }}</div>
            </template>
            <template v-else>
                <md-field>
                    <md-textarea v-model="card.name"></md-textarea>
                </md-field>
                <md-button class="md-raised md-primary" @click="showEditCard = false">Save</md-button>
                <md-button class="md-raised md-accent" @click="cancelEdit">Cancel</md-button>
            </template>
        </md-card-header>
    </md-card>
</template>
<script>
    export default {
        name: 'Card',
        props: {
            card: {},
        },
        data() {
            return {
                showEditCard: false,
                uneditedName: '',
            };
        },
        methods: {
            cancelEdit() {
                this.card.name = this.uneditedName;
                this.showEditCard = false;
            }
        },
        mounted() {
            this.uneditedName = this.card.name;
        }
    }
</script>
<style scoped>
    .md-card-header .md-field {
        padding-top: 0;
        margin: 0 0 8px;
    }

    .md-card-header .md-field .md-textarea {
        padding: 8px !important;
    }
</style>
