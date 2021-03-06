<template>
    <div class="list-wrapper" ref="listwrapper">
        <draggable :list="lists" v-bind="dragOptions" group="lists" @start="drag=true" @end="drag=false"
                   :emptyInsertThreshold="100" class="draggable-lists-wrapper">
            <ListComponent v-for="list in lists" :key="list.name" :list="list" :remove-list="removeList"/>
        </draggable>

        <CreateListComponent :lists="lists" :after-creation-hook="scrollToNewList"/>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';

    import ListComponent from "@/components/ListComponent";
    import CreateListComponent from "@/components/CreateListComponent";

    export default {
        components: {draggable, CreateListComponent, ListComponent},
        data() {
            return {
                dragOptions: {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost",
                    dragClass: "drag",
                    chosenClass: "chosen",
                    direction: 'horizontal',
                },
                lists: [
                    {
                        id: 0,
                        name: 'List 1',
                        cards: [
                            {id: 0, name: 'Do something'},
                            {id: 1, name: 'Do something else'},
                            {id: 2, name: 'Finish work'},
                            {id: 3, name: 'Write documentation'},
                            {id: 4, name: 'Calculate costs'},
                            {id: 5, name: 'Update dependencies'},
                            {id: 6, name: 'Recalculate costs'},
                            {id: 7, name: 'Do some other work'},

                        ]
                    },
                    {
                        id: 1,
                        name: 'List 2',
                        cards: [
                            {id: 16, name: 'Some other card'},
                            {id: 17, name: 'Random text'},
                            {id: 18, name: 'Think about something'},
                            {id: 19, name: 'Another one'},
                        ]
                    },
                    {id: 2, name: 'List 3', cards: []},
                    {id: 3, name: 'List 4', cards: []},
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
<style lang="scss">
    .list-wrapper {
        width: unset;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 10px;
        overflow-y: hidden;

        .list {
            width: 300px;
            flex-shrink: 0;
            max-height: 100%;
            overflow-y: hidden;
            margin: 0 5px;

            & > .md-card {
                max-height: 100%;

                display: flex;
                flex-direction: column;

                word-wrap: normal;
                overflow-wrap: anywhere;

                .md-card-content {
                    max-height: 100%;
                    overflow-y: auto;
                    padding-bottom: 0;
                }
            }

            .md-card-actions .md-field {
                margin: 0;
                padding-top: 0;
                min-height: 32px;

                label {
                    top: 7px;
                }

                button {
                    top: 0;
                }
            }
        }
    }

    .draggable-lists-wrapper {
        display: flex;
        flex-direction: row;

        .chosen > .md-card {
            opacity: 1 !important;
            cursor: pointer !important;
        }

        .ghost > .md-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            background: #555 !important;
        }

        .drag .md-card {
            opacity: 1 !important;
            cursor: pointer;
        }
    }
</style>
