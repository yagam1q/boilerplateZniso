<template>
  <div>
      <input type="button" @click="alertDisplay" class="btn btn-success" value="Принять публикацию в печать" :article_id="article_id" >
  </div>
</template>


<script>
    export default {
        mounted() {


        },
        props: ['article_id'],
        data: function () {
            return{
                a_id: this.article_id,
                input: [],
            }
        },

            methods: {
                alertDisplay() {
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
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                                } else {
                                Swal.fire('Cancelled', 'Your file is still intact', 'info')
                            }
                        })
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
