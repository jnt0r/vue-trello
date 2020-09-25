<template>
    <md-card md-with-hover
            @mouseenter.native="isHover = true"
            @mouseleave.native="isHover = false"
             :class="{'disable-dragging': showEditCard}">
        <md-card-header>
            <template v-if="!showEditCard">
                <md-card-header-text>
                    <div class="md-body-2" @dblclick="showEditCard = true">{{ card.name }}
                    </div>
                </md-card-header-text>
                <md-button class="md-icon-button" v-show="isHover" @click="deleteCard(card)">
                    <md-icon>delete</md-icon>
                </md-button>
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
            deleteCard: {},
        },
        data() {
            return {
                showEditCard: false,
                uneditedName: '',
                isHover: false,
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
<style lang="scss" scoped>
    .md-card-header {
        .md-field {
            padding-top: 0;
            margin: 0 0 8px;

            .md-textarea {
                padding: 8px !important;
            }
        }

        .md-icon-button {
            width: 24px;
            min-width: 24px;
            height: 24px;
        }
    }
</style>
