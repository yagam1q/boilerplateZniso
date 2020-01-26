<template>
  <div>
      <input id="disabled_btn" type="button" @click="alertDisplay" class="btn btn-success" value="Принять публикацию в печать" :article_id="article_id" :status="status">
  </div>
</template>


<script>
    export default {
        mounted() {


        },
        props: ['article_id' , 'status'],
        data: function () {
            return{
                a_id: this.article_id,
                status: this.status,
            }
        },

            methods: {
                alertDisplay() {
                    if(this.status != 3 ){
                        console.log(this.status);
                    Swal.fire({
                        title: '<strong><u>Вы уверены, </u></strong>',
                    type: 'question',
                    html:
                        'что хотите принять статью ?',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: true,
                    confirmButtonText:
                        'Да, я уверен!',
                    confirmButtonAriaLabel: 'Да, я уверен!',
                    cancelButtonText:
                        'Нет',
                    cancelButtonAriaLabel: 'Нет!',
                    }).then((result) => {
                            if(result.value) {

                                axios.get('//blog.test/api/articles-update/' + this.a_id )
                                .then(function (response) {
                                    console.log(response);
                                    Swal.fire({
                                        title: response.data,
                                        type: 'success'
                                    });
                                    $('#disabled_btn').prop('disabled' , true);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                                } else {
                                Swal.fire('Отмена!', 'Статья не будет опубликована.', 'info')
                            }
                        })}
                        else{
                            Swal.fire({
                                        title: 'Статья уже опубликована',
                                        type: 'error'
                                    });
                        }
                    },
                update : function() {
                axios.get('//blog.test/api/articles-update/' + this.a_id )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
    }
</script>
