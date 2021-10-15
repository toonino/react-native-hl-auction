import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class listNotification{
    async  listNotification(page:number, per_page: number){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
      return method.get(listAPi.listNotification, {page: page,
        per_page: per_page});
    }
    
  }
}


export default listNotification;listNotification