<template>
    <div class="list">
        <md-card md-with-hover class="list-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ list.name }}</div>
                </md-card-header-text>

                <md-menu md-size="big" md-direction="bottom-end">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item @click="removeList(list)">
                            <span>Delete</span>
                            <md-icon>delete</md-icon>
                        </md-menu-item>

                        <md-menu-item>
                            <span>Send a message</span>
                            <md-icon>message</md-icon>
                        </md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-card-header>

            <md-card-content ref="scrollablecontent">
                <draggable :list="list.cards" v-bind="dragOptions" group="cards" @start="drag=true" @end="drag=false"
                           :emptyInsertThreshold="100">
                    <!--                    <transition-group type="transition" name="flip-list" >-->
                    <Card v-for="card in list.cards" :key="card.id" :card="card"/>
                    <!--                    </transition-group>-->
                </draggable>
            </md-card-content>

            <md-card-actions>
                <md-field md-inline md-clearable>
                    <label>Task name</label>
                    <md-input v-model="newTaskName" v-on:keyup.enter="createTask"></md-input>
                </md-field>
                <md-button class="md-primary md-icon-button" v-on:click="createTask">
                    <md-icon>add</md-icon>
                </md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    import draggable from 'vuedraggable';
    import Card from "@/components/Card";

    export default {
        name: 'ListComponent',
        components: {Card, draggable},
        props: ['list', 'removeList'],
        data() {
            return {
                newTaskName: '',
                dragOptions: {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost",
                    dragClass: "drag",
                    chosenClass: "chosen",
                },
            }
        },
        methods: {
            createTask() {
                if (this.newTaskName !== '') {
                    this.list.cards.push({name: this.newTaskName, id: 999});
                    this.newTaskName = '';

                    this.$nextTick(() => {
                        // Scroll to new card
                        let el = this.$refs.scrollablecontent.$el;
                        el.scrollTop = el.scrollHeight;
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .flip-list-move {
        transition: transform 0s;
    }

    .list .chosen {
        opacity: 1 !important;
        /*background: yellow !important;*/
        cursor: pointer !important;
    }

    .list .ghost:before {
        content: '';
        position: absolute;;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #555 !important;
    }

    .list .drag {
        opacity: 1 !important;
        cursor: pointer;
        /*background: blue !important;*/
    }
</style>
