<template>
<div>


	<Header
	:acctAddress= "activeAccountAddress"
	:providerNetworkID= "providerNetworkID"
	 />



  <div class="flex mb-4">

    <div class="w-full bg-gray-300  ">

					Hello World


    </div>
  </div>




</div>
</template>


<script>
import MetamaskDropdown from './MetamaskDropdown.vue'
import Web3Helper from '../js/web3-helper.js'
import CryptoAssets from '../js/cryptoassets.js'
import MaticHelper from '../js/matic-helper.js'

const Web3 = require('web3');



export default {
  name: 'Home',
  components: {
     MetamaskDropdown
  },
  data () {
    return {
      activeAccountAddress: null,
			network: 'ethereum',
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
