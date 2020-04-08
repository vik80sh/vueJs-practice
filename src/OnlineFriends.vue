<template >
    <div class="online-friends-wrapper">
        <h3>Online Friends :) </h3>
        <div v-for="(friend,index) in friends" :key="index" class="active-friends-wrapper">
            <p v-if="friend.isOnline"><span>{{friend.name}}</span></p>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"AllFriends",
    props:['friends'],
    data(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
    .online-friends-wrapper{
        padding-left: 20px;
        float: left;
        widows: 50%;
        .active-friends-wrapper{
            padding-left: 30px;
        }

    }
</style>