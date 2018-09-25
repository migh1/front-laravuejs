<template>

    <home-template>
        <span slot="slot-esquerdo">
            <div class="row">
                <div class="col s12">
                    <div class="file-field input-field">
                        <img class="responsive-img" :src="usuario.image" alt="">
                        <div class="btn">
                            <span>Foto de Perfil</span>
                            <input type="file" v-on:change="checkImage">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>
                </div>
            </div>
        </span>
        <span slot="slot-direito">
            <span>
                <div class="row">
                    <div class="col s12">
                        <h2>Editar Perfil</h2>
                    </div>

                    <div class="col s12">
                        <div class="input-field">
                            <input type="text" name="name" class="validate" v-model="name">
                            <label>Nome*</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="email" name="email" class="validate" v-model="email">
                            <label>Email*</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="password" name="password" class="validate" v-model="password">
                            <label>Senha*</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="password" name="password_confirmation" class="validate" v-model="password_confirmation">
                            <label>Repetir Senha*</label>
                        </div>
                    </div>
                    <div class="col s6">
                        <br>
                        <router-link to="/" class="btn orange col s12">Cancelar</router-link>
                    </div>
                    <div class="col s6">
                        <br>
                        <button type="button" class="btn col s12" v-on:click="perfil()">Salvar</button>
                    </div>
                </div>
            </span>
        </span>
    </home-template>

</template>

<script>
import HomeTemplate from '@/templates/HomeTemplate'
import axios from 'axios'

export default {
    name: 'CadastroPage',
    components:{
        HomeTemplate,
        axios
    },
    methods: {
        checkImage(e){
            let arquivo = e.target.files || e.dataTransfer.files;
            if (!arquivo.length) {
                return;
            }
            let reader = new FileReader();
            reader.onloadend = (e) => {
                this.image = e.target.result
            };
            reader.readAsDataURL(arquivo[0]);
        },
        perfil(){
            axios.put('https://api-laravuejs.herokuapp.com/perfil', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                image: this.image
            }, {
                'headers': {
                    'Authorization': 'Bearer ' + this.usuario.token
                }
            })
            .then(response => {
                if (response.data.token) {
                    //update successful
                    // this.usuario = response.data;
                    sessionStorage.setItem('usuario', JSON.stringify(response.data));
                    alert('Informações atualizadas.');
                    location.reload(); //para atualizar a nav
                } else {
                    //email ou senha inválido
                    let erros = '';
                    for(let erro of Object.values(response.data)){
                        erros += erro + ' ';
                    }
                    alert(erros);
                }
            })
            .catch(e => {
                this.errors.push(e);
                alert('Erro! Tente novamente mais tarde');
            })
        }
    },
    beforeCreate(){
		let is_logado = sessionStorage.getItem('usuario');
		if (!is_logado) {
			this.$router.push('/login');
		}
        $(function() {
            M.updateTextFields();
        });
	},
	created(){
		let is_logado = sessionStorage.getItem('usuario');
		if (is_logado) {
			this.usuario = JSON.parse(is_logado);
            this.name = this.usuario.name;
            this.email = this.usuario.email;
		}
	},
    data () {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            usuario: '',
            image: ''
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
