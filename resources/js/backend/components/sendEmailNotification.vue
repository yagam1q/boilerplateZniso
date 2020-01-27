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
                <button id="" :article_id="article_id" :author_id="author_id" :sts="sts" type="button" class="btn btn-success" :disabled="disableded == 1" @click="send"><i class="fas fa-envelope-open"></i> Отправить e-mail уведомление</button>
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
            article_id : '',
            author_id: '',
            type_id: '',
            sts: '',
        },
        methods: {
            disabled: function () {
                if(this.sts != 3){
                    this.disableded = false;
                    this.obj = this.text;
                }

            },
            send: function(event){
                Swal.fire({
                position: 'top-end',
                type: 'info',
                title: 'Пытаемся отправить письмо.',
                showConfirmButton: false,
                timer: 1500
                }),
                this.disableded = true,
                axios.post('/api/update/article/1', {
                    theme: this.obj,
                    article_id: this.article_id,
                    author_id: this.author_id,
                    type_id: this.type_id,
                })
                .then(function (response) {
                    console.log(response);

                    Swal.fire({
                        title: response.data,
                        type: 'success'
                    });
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire({
                        title: response,
                        type: 'error'
                    });
                });
            }
        }
        }
</script>
