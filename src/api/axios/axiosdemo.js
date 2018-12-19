import { post } from './config/axiosConfig_mint'

export default {
  post(isTestNet, params) {
    if(isTestNet){      
      return post('http://neoapi-testnet.trinity.ink:21332', params)                                //测试网
    } else {
      return post('http://neoapi-testnet.trinity.ink:21332', params)                                //主网
    }
  }
}