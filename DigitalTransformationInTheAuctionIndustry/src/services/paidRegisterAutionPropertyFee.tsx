import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class paidRegisterAutionPropertyFee{
    async  paidRegisterAutionPropertyFee(auctionPropertyId:number){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
    const url = `${listAPi.paidRegisterAutionPropertyFee}/${auctionPropertyId}`;
    return method.post(url, { auctionPropertyId: auctionPropertyId});
    }
    
  }
}


export default paidRegisterAutionPropertyFee;