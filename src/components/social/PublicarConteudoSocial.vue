<template>
    <div class="row">
        <div class="col s12">
            <div class="input-field">
                <textarea v-model="conteudo" class="materialize-textarea"></textarea>
                <label>O que está acontecendo?</label>
            </div>
        </div>
        <div class="col s12">
            <button v-if="conteudo" type="button" class="btn col s4 offset-s8 m2 offset-m10 waves-effect">Publicar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PublicarConteudoSocial',
    props: [],
    data () {
        return {
            conteudo: ''
        }
    }
}
</script>

<style lang="css">
</style>
