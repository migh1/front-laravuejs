<template>
    <div class="row">
        <nav>
            <div class="nav-wrapper">
                <router-link :to="url || '/'" class="brand-logo">{{logo || 'Site'}}</router-link>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <slot name="navmenu"/>
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <slot name="navmenu-responsive"/>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavBarLayout',
    props:['logo','url','cor'],
    created: function(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });
    },
    data () {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
