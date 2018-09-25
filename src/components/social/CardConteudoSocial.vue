<template>
    <span>
        <div v-if="img" class="card-image">
            <img :src="img" />
            <span class="card-title">{{titulo || 'Titulo do Cartão'}}</span>
        </div>

        <div v-if="texto" class="card-content">
            <p>{{texto}}</p>
        </div>
    </span>
</template>

<script>
export default {
    name: 'CardConteudoSocial',
    props: ['img', 'titulo', 'texto'],
    data () {
        return {

        }
    }
}
</script>

<style lang="css">
</style>
