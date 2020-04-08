<template>
    <div class="home-wrapper">
        <nav class="nav-wrapper">
            <ul class="ul-wrapper">
                <li class="li-wrapper"><a href="#" class="home">Home</a></li>
                <li class="li-wrapper"><a href="#" class="about">About</a></li>
                <li class="li-wrapper"><a href="#" class="Contact">Contact</a></li>
            </ul>
        </nav>

    </div>
</template>
<script>
export default {
    name:"Navbar",
    data(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .home-wrapper{
        text-align: center;
        .ul-wrapper{
            list-style-type: none;
            .li-wrapper{
                display: inline-block;
            }
        }
    }
</style>