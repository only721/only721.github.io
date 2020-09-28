
const config = require('../config.json')

module.exports = {

  getImagePathForAsset(contractAddress, assetId){
    return config.assetserver_url + '/' + contractAddress + '/' + assetId;
  }

}
