import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class myAuctionProperty{
    async  myAuctionProperty(page:number, per_page: number,status: number){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
    return method.get(listAPi.myAuctionProperty, {page: page,
        per_page: per_page, status: status});
    }
    
  }
}


export default myAuctionProperty;