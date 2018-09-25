<template>
    <div class="row">
        <div class="col s12">
            <div class="card">
                <div class="card-content">

                    <div class="row valign-wrapper">
                        <div class="col s1">
                            <img :src="perfil" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                        </div>
                        <div class="col s11">
                            <span class="black-text">
                                <strong>{{nome || 'Maria'}}</strong> - <small>{{data || '10/10/2010 12:12'}}</small>
                            </span>
                        </div>
                    </div>

                    <slot></slot>

                </div>
                <div class="card-action">
                    <i class="material-icons">favorite_border</i>
                    <i class="material-icons">insert_comment</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardSocial',
    props: ['nome', 'perfil', 'data'],
    data () {
        return {

        }
    }
}
</script>

<style lang="css">
</style>
