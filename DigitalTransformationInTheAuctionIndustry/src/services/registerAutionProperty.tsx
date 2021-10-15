import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class registerAuctionProperty  {
 async  registerAuctionProperty(body:any){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
    return method.post(listAPi.registerAuctionProperty, body);
    }
    
  }}


  

export default registerAuctionProperty;
