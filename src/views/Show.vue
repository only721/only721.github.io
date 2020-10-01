<template>
<div>


	<Header
	:acctAddress= "activeAccountAddress"
	:providerNetworkID= "providerNetworkID"
	 />



  <div class="flex mb-4">

    <div class="w-full bg-gray-300  ">

				 Show...


    </div>
  </div>


	<Footer/>

</div>
</template>


<script>
import MetamaskDropdown from './MetamaskDropdown.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Web3Helper from '../js/web3-helper.js'
import CryptoAssets from '../js/cryptoassets.js'
import MaticHelper from '../js/matic-helper.js'


const Web3 = require('web3');



export default {
  name: 'Show',
  components: {
     MetamaskDropdown,Header,Footer
  },
  data () {
    return {
      activeAccountAddress: null,
			network: 'matic',
			providerNetworkID: null,
			assetName: '0xBTC'
    }
  },
  created () {



  },
  methods: {
   async checkSignedIn () {


    },





  }

}
</script>
