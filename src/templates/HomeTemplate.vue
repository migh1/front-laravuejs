<template>
	<span>
		<header>
			<nav-bar-layout logo="FeiciBuque" url="/" cor="blue darken-1">
				<span slot="navmenu">
					<li><router-link to="/perfil">{{usuario.name}}</router-link></li>
					<li v-on:click="sair()"><a>Sair</a></li>
				</span>
				<span slot="navmenu-responsive">
					<li><router-link to="/perfil">{{usuario.name}}</router-link></li>
					<li v-on:click="sair()"><a>Sair</a></li>
				</span>
			</nav-bar-layout>
		</header>

		<main>
			<div class="container">
				<div class="row">
					<div class="col s4">
						<slot name="slot-esquerdo"/>
					</div>
					<div class="col s8">
						<slot name="slot-direito"/>
					</div>
				</div>
			</div>
		</main>

		<footer-layout cor="blue darken-1" logo="Lucas Migliorini de Araújo" descricao="Teste de descrição" ano="2018">
			<li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
			<li><a class="grey-text text-lighten-3" href="#!">Casa</a></li>
			<li><a class="grey-text text-lighten-3" href="#!">House</a></li>
			<li><a class="grey-text text-lighten-3" href="#!">Lar</a></li>
		</footer-layout>


	</span>
</template>

<script>
import NavBarLayout from '@/components/layouts/NavBarLayout'
import FooterLayout from '@/components/layouts/FooterLayout'
import CardSocial from '@/components/social/CardSocial'

export default {
	name: 'HomeTemplate',
	components:{
		NavBarLayout,
		FooterLayout,
		CardSocial
	},
	methods: {
		sair(){
			sessionStorage.clear();
			this.$router.push('/login');
		}
	},
	data(){
		return {
			usuario: ''
		}
	},
	beforeCreate(){
		let is_logado = sessionStorage.getItem('usuario');
		if (!is_logado) {
			this.$router.push('/login');
		}
	},
	created(){
		let is_logado = sessionStorage.getItem('usuario');
		if (is_logado) {
			this.usuario = JSON.parse(is_logado);
		}
	}
}
</script>

<style>

</style>
