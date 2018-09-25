<template>

    <inicial-template>
        <span slot="slot-esquerdo">
            <div class="row">
                <div class="col s12">
                    <img class="responsive-img" src="http://www.mercadoecommerce.com.br/wp-content/uploads/2014/06/mercado-ecommerce-qual-rede-social-escolher-capa.jpg" alt="">
                </div>
            </div>
        </span>
        <span slot="slot-direito">
            <span>
                <div class="row">
                    <div class="col s12">
                        <h2>Login</h2>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="email" name="email" class="validate" autocomplete="off" v-model="email">
                            <label>Email</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="password" name="password" class="validate" autocomplete="off" v-model="password">
                            <label>Senha</label>
                        </div>
                    </div>
                    <div class="col s6">
                        <label>Não é cadastrado?</label><br>
                        <router-link to="/cadastro" class="btn orange col s12 validate">Cadastre-se</router-link>
                    </div>
                    <div class="col s6">
                        <br>
                        <button type="button" class="btn col s12 validate" v-on:click="login()">Entrar</button>
                    </div>
                </div>
            </span>
        </span>
    </inicial-template>

</template>

<script>
import InicialTemplate from '@/templates/InicialTemplate'
import axios from 'axios'

export default {
    name: 'LoginPage',
    components:{
        InicialTemplate,
        axios
    },
    methods: {
        login(){
            axios.post('https://api-laravuejs.herokuapp.com/api/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                if (response.data.token) {
                    //login successful
                    sessionStorage.setItem('usuario', JSON.stringify(response.data));
                    this.$router.push('/');
                } else if(response.data.status == false){
                    //erro de validacao dos dados
                    alert('Login inválido');
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
    data () {
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
