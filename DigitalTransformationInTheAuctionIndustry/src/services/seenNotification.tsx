import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class seenNotification{
    async  seenNotification(notificationId:number){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
    const url = `${listAPi.seenNotification}/${notificationId}`;
    return method.get(url, { notificationId: notificationId});
    }
    
  }
}


export default seenNotification;
