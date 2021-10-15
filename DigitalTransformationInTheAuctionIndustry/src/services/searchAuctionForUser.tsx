import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class searchAuctionForUser{
    async  searchAuctionForUser(page:number, per_page: number,status: number, typeSort:number){
    let method = new BaseApiService;
    return method.get(listAPi.searchAuctionForUser, {page: page,
        per_page: per_page, status: status,
        typeSort: typeSort,});
  }
}


export default searchAuctionForUser;