<template>
    <home-template>

        <span slot="slot-esquerdo">
            <card-menu-layout>
                <div class="row valign-wrapper">
                    <div class="col s4">
                        <img :src="usuario.image" :alt="usuario.name" class="circle responsive-img"> <!-- notice the "circle" class -->
                    </div>
                    <div class="col s8">
                        <span class="black-text">
                            <h5>{{usuario.name}}</h5>
                            Uma breve descrição sobre você.
                        </span>
                    </div>
                </div>
            </card-menu-layout>
            <card-menu-layout>
                <h4>Amigos</h4>
                <li>Maria</li>
                <li>Jilberto</li>
            </card-menu-layout>
        </span>

        <span slot="slot-direito">

            <publicar-conteudo-social />

            <card-social
                perfil="https://materializecss.com/images/yuna.jpg"
                nome="Maria Silva"
                data="17/09/2018 12:38">

                <card-conteudo-social
                    img="https://materializecss.com/images/sample-1.jpg"
                    titulo="Aqui vai um titulo"
                    texto="Essa foto foi tirada enquanto estava em Londres tomando café. Rsrsrs"/>

            </card-social>
        </span>


    </home-template>
</template>

<script>
import HomeTemplate from '@/templates/HomeTemplate'
import CardMenuLayout from '@/components/layouts/CardMenuLayout'
import CardSocial from '@/components/social/CardSocial'
import CardConteudoSocial from '@/components/social/CardConteudoSocial'
import PublicarConteudoSocial from '@/components/social/PublicarConteudoSocial'

export default {
    name: 'HomePage',
    components:{
        HomeTemplate,
        CardMenuLayout,
        CardSocial,
        CardConteudoSocial,
        PublicarConteudoSocial
    },
    created(){
		let is_logado = sessionStorage.getItem('usuario');
		if (is_logado) {
			this.usuario = JSON.parse(is_logado);
		}
	},
    data () {
        return {
            usuario: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
