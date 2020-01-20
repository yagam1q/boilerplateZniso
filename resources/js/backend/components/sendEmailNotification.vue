<template>
    <div>
        <div :class="stl">
            <div class="col-4">{{text}}</div>
            <div class="col-4">
                <select :name="name" class="form-control">
                    <option v-for="item in inventory" :value="item.id">

                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="col-4">
                <button id="btn_otkaz" type="button" class="btn btn-success" disabled><i class="fas fa-envelope-open"></i> Отправить e-mail уведомление</button>
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
                input: [],
                inventory: [
                    {name: 'Выбрать', id: '0'},
                    this.inventory
                ]
            }
        },
        props: {
            name: {
                type: String
            },
            inventory: {
                type: Object
            },
            text: {
                type: String
            },
            stl : {
                type: String
            },
        },

    }
</script>
