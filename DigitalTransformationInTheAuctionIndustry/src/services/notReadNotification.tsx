import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class notReadNotification{
    async  notReadNotification(){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
      return method.get(listAPi.notReadNotification);
    }
    
  }
}



export default notReadNotification;
