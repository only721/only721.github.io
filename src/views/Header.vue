<template>

  <nav id="header" class="w-full z-10 pin-t">



  		<div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3 bg-gray-700 px-4">

  			<div class="pl-4">
  				<img  src="@/assets/img/invader_sm.png" alt="ETH avatar" class="rounded-full h-6 w-6 inline-block">


  				<a class="text-green-400 text-base no-underline hover:no-underline font-extrabold text-xl"  href="#">
  					Only721
  				</a>
        </div>


  			<div class="  flex items-center w-auto mt-2 lg:mt-0 bg-grey-lightest md:bg-transparent z-20" id="nav-content">
  				<div class="  lg:flex justify-end flex-1 items-center">
  					<MetamaskDropdown
              :acctAddress= "acctAddress"
  						:providerNetworkID= "providerNetworkID"
            />
  				</div>
  			</div>
  		</div>
  	</nav>


</template>

<script>
export default {
  name: 'Header',
    props: ['acctAddress','providerNetworkID'],
  data() {
    return {

    }
  },
}
</script>
