<template>
	<span>
		<header>
			<nav-bar-layout logo="FeiciBuque" url="/" cor="blue darken-1">
				<span slot="navmenu">
					<li><router-link to="/login">Entrar</router-link></li>
					<li><router-link to="/cadastro">Cadastre-se</router-link></li>
				</span>
				<span slot="navmenu-responsive">
					<li><router-link to="/login">Entrar</router-link></li>
					<li><router-link to="/cadastro">Cadastre-se</router-link></li>
				</span>
			</nav-bar-layout>
		</header>

		<main>
			<div class="container">
				<div class="row">
					<div class="col s6 valign-wrapper">
						<slot name="slot-esquerdo"/>
					</div>
					<div class="col s6">
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

export default {
	name: 'InicialTemplate',
	components:{
		NavBarLayout,
		FooterLayout
	},
	created(){
		let is_logado = sessionStorage.getItem('usuario');
		if (is_logado) {
			this.$router.push('/');
		}
	}
}
</script>

<style>

</style>
