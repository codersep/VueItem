import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


axios({
  url: 'http://47.98.96.69:8080',
  method: "get",
  params: {
    word:'a'
  }
}).then(function(res){
  console.log(res);
})