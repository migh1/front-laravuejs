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
                        <h2>Cadastro</h2>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="text" class="validate" name="name" v-model="name">
                            <label>Nome*</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="email" class="validate" name="email" v-model="email">
                            <label>Email*</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="password" class="validate" name="password" v-model="password">
                            <label>Senha*</label>
                        </div>
                    </div>
                    <div class="col s12">
                        <div class="input-field">
                            <input type="password" class="validate" name="password_confirmation" v-model="password_confirmation">
                            <label>Repetir Senha*</label>
                        </div>
                    </div>
                    <div class="col s6">
                        <label>Já possui conta?</label><br>
                        <router-link to="/login" class="btn orange col s12">Entrar</router-link>
                    </div>
                    <div class="col s6">
                        <br>
                        <button type="button" class="btn col s12" v-on:click="cadastro()">Cadastrar</button>
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
    name: 'CadastroPage',
    components:{
        InicialTemplate,
        axios
    },
    methods: {
        cadastro(){
            axios.post('https://api-laravuejs.herokuapp.com/cadastro', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(response => {
                if (response.data.token) {
                    //login successful
                    sessionStorage.setItem('usuario', JSON.stringify(response.data));
                    this.$router.push('/');
                } else if(response.data.status == false){
                    //erro de validacao dos dados
                    alert('Erro no cadastro! Tente novamente.');
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
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
