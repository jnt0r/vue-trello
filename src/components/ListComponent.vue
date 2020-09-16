<template>
    <div class="list">
        <md-card md-with-hover>
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{ list.name }}</div>
                    <!--                    <div class="md-subhead">Subtitle here</div>-->
                </md-card-header-text>

                <md-menu md-size="big" md-direction="bottom-end">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item @click="removeList">
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
                <md-card v-for="card in list.cards" v-bind:key="card.id" md-with-hover>
                    <md-card-header>
                        <div class="md-body-2">{{ card.name }}</div>
                    </md-card-header>
                </md-card>
            </md-card-content>

            <md-card-actions>
                <md-field md-inline>
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
    export default {
        name: 'ListComponent',
        props: ['list', 'removeList'],
        data() {
            return {
                newTaskName: ''
            }
        },
        methods: {
            createTask() {
                if (this.newTaskName !== '') {
                    this.list.cards.push({name: this.newTaskName});
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
