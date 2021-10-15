import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class detailAuctionPropertyForUser{
    async  detailAuctionPropertyForUser(auctionPropertyId:number){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
      const url = `${listAPi.detailAuctionProperty}/${auctionPropertyId
}`;
    return method.get(url, { auctionPropertyId: auctionPropertyId});
    }
    
  }
}


export default detailAuctionPropertyForUser;