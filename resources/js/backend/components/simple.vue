<template>
<div>
<button type="button" @click="alert" class="btn btn-success">Принять</button>
</div>
</template>

<script>
    export default {
        mounted() {

        },
        data: function () {
        return{
            input: [],
            alert : function() {
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

                })

            }
        }
        },
        props: ['authors' , 'name' , 'label' , 'placeholder'],
    }
</script>
