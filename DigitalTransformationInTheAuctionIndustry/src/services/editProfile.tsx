import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class editProfile  {
 async  editProfile(body:any){
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
      return method.post(listAPi.editProfile, body);
    }
    
  }
async uploadImage(body: any) {
    let method = new BaseApiService;
    return method.post(listAPi.uploadImage, body);
  }
}

  

export default editProfile;
