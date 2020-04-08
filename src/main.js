import Vue from 'vue'
import App from './App.vue'


// Create GainNodelobal filter 

Vue.filter('snippet',val=>{
  if(val)
    return val.slice(0,50)
})
new Vue({
  el: '#app',
  render: h => h(App)
})
