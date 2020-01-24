<template>
    <div>
        <div :class="stl">
            <div class="col-4">{{text}}</div>
            <div class="col-4">
                <select :name="name" class="form-control" @change="disabled">
                    <option v-for="(item, index) in inventory" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="col-4">
                <button id="" type="button" class="btn btn-success" :disabled="disableded == 1" @click="send"><i class="fas fa-envelope-open"></i> Отправить e-mail уведомление</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {

        },
        data: function () {
            return {
                disableded: true,
                inventory:
                    this.inv
                ,
                obj: '',
            }
        },
        props: {
            name: {
                type: String
            },
            inv: {
                type: Array
            },
            text: {
                type: String
            },
            stl : {
                type: String
            },
        },
        methods: {
            disabled: function () {
                this.disableded = false;
                this.obj = this.text;
            },
            send: function(event){
                // this.object
                console.log(this.obj);
                // console.log(event.target.options[event.target.options.selectedIndex].text);
            },
            ff: function(e){
                // object: { event.target.options[event.target.options.selectedIndex].text };
                // console.log(object);
            }
        }

    }
</script>
