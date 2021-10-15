import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class detailAuctionPropertyWithoutLogin{
    async  detailAuctionPropertyWithoutLogin(auctionPropertyId:number){
    let method = new BaseApiService;
    const url = `${listAPi.detailAuctionPropertyWithoutLogin}/${auctionPropertyId
}`;
    return method.get(url, { auctionPropertyId: auctionPropertyId});
  }
}


export default detailAuctionPropertyWithoutLogin;