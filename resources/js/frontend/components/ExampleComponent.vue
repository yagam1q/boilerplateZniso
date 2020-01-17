<template>
    <div class="form-group row mt-2" style="padding-left: 1rem; padding-right: 1rem;">
        <div class="input-group mb-3" v-for="(input, index) in inputs">
            <div class="input-group-prepend">
                <label style="width:8rem"class="input-group-text" for="">{{label}}</label>
            </div>
            <input v-model="input.one" type="text" :name="name"  :placeholder="placeholder"
                class="form-control" id="">
            <button class="btn btn-danger w-25" @click="deleteRow(index)">Удалить</button>
        </div>
        <div class="col-12 mt-1" style="padding-left: 0; padding-right: 0;">
            <button @click="addRow" type="button" class="btn btn-success add_author" style="font-size: 14px;"><i class="fas fa-user-plus"></i>
            {{ authors }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {

        },
        data: function () {
        return{
            inputs: [],
        }
        },
        props: ['authors' , 'name' , 'label' , 'placeholder'],
        methods: {
        addRow() {
            this.inputs.push({
            one: ''
        })
        },
        deleteRow(index) {
            this.inputs.splice(index,1)
        }
    },

    }
</script>
