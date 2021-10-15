import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class detailAuctionForUser{
    async  detailAuctionForUser(auctionId:number){
    let method = new BaseApiService;
    const url = `${listAPi.detailAuctionForUser}/${auctionId}`;
    return method.get(url, { auctionId: auctionId});
  }
}


export default detailAuctionForUser;