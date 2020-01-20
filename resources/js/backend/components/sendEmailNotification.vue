<template>
    <div>
        <div class="row py-3 alert alert-secondary">
            <div class="col-4">{{text}}</div>
            <div class="col-4">
                <select :name="name" class="form-control">
                    <option v-for="item in inventory" :value="item" :key="item.id">
                        {{ item.name }}
                    </option>
<!--                    <option value="{{options.name}}"></option>-->
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
                    {name: 'asd', id: '1'},
                    this.options
                ]
            }
        },
        props: {
            name: {
                type: String
            },
            options: {
                type: Object,
                default: function () {
                    return this.options
                }
            },
            text: {
                type: String
            }
        },
    }
</script>
