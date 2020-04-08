<template>
  <div id="app">
    <h1>
      {{msg}}
    </h1>
    <Navbar/>
    <AllFriends :friends="friends" @delete="deleteFriends"/>
    <OnlineFriends :friends="friends"/>
    <div class="horizontal-line"></div>
    <LifeCycle/>
  </div>
</template>

<script>
import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';
import LifeCycle from './LifeCycleHook'
export default {
  name: 'app',
  components:{
    Navbar,
    AllFriends,
    OnlineFriends,
    LifeCycle
  },
  data () {
    return {
      msg: 'Welcome Vikash',
      friends:[
        {name:"Vikash", isOnline:true},
        {name:"Kushal", isOnline:false},
        {name:"Mahesh", isOnline:true},
        {name:"Prem", isOnline:true},
        {name:"Ayan", isOnline:false},
        {name:"Rishabh", isOnline:true},
        {name:"Neha", isOnline:false},
        {name:"Shtakshi", isOnline:true}
        ]
    }
  },
  methods:{
    deleteFriends(payload){
      this.friends=this.friends.filter(friend=> friend.name!==payload.name)
    }
  }
}
</script>

<style lang="scss">
  #app{
    h1{
      text-align: center;
    }
    .horizontal-line{
      border: 1px solid black;
      display: flex;
      height: 1px;
      margin-top: 20px;
      width: 100%;
    }
  }
</style>
