import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class Bidding{
    async  createBidding(auctionPropertyId:number, value: number){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
      const url = `${listAPi.createBidding}/${auctionPropertyId}/create`;
    return method.post(url, { auctionPropertyId: auctionPropertyId  , value: value})
    }
   
    
}
async  listBidding(auction_property_id:number, page: number,
     per_page: number, typeSort: number){
    let method = new BaseApiService;
    let check = await method.setToken();
    if (check) {
      const url = `${listAPi.createBidding}/${auction_property_id}/list`;
    return method.get(url, { auction_property_id: auction_property_id , page:page,
     per_page:per_page,typeSort:typeSort})
    }
    
}
async  currentBidding(auction_property_id:number){
    let method = new BaseApiService;
    const url = `${listAPi.currentBidding}/${auction_property_id}/current`;
    return method.get(url, { auction_property_id: auction_property_id })
}
}


export default Bidding;