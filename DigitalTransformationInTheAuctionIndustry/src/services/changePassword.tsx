import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class changePassword  {
 async  changePassword(body:any){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
      return method.post(listAPi.changePassword, body);
    }
    
  }
}
  

export default changePassword;
