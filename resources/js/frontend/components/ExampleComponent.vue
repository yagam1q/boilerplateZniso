<template>
    <div class="form-group row">
        <div class="input-group mb-3 col-9" v-for="(input, index) in inputs">
            <div class="input-group-prepend">
                <label style="width:8rem" class="input-group-text" for="auth1">Автор (ы)</label>
            </div>
            <input v-model="input.one" type="text" name="authors[]" placeholder="Фамилия Имя Отчество"
                class="form-control" id="auth1">
            <button class="btn btn-danger w-25" @click="deleteRow(index)">Удалить</button>
        </div>
        <div class="col-3">
            <button @click="addRow" type="button" class="btn btn-success add_author" style="font-size: 14px;"><i class="fas fa-user-plus"></i>
                Добавить еще</button>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: function () {
        return{
            inputs: []
        }
        },
        methods: {
        addRow() {
            this.inputs.push({
            one: ''
        })
        },
        deleteRow(index) {
            this.inputs.splice(index,1)
        }
    }
    }
</script>
