import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class contactSell  {
 async  createContactSell(body:any){
    let method = new BaseApiService;
    return method.post(listAPi.createContactSell, body);
  }
} 

export default contactSell;