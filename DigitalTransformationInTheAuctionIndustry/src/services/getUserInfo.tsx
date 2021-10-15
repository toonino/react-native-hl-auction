import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class getUserInfo  {
  async getUserInfo() {
    let method =   new BaseApiService();
    let check = await method.setToken();
    if (check) {
      return method.get(listAPi.getUserInfo);
    }
    
  }
}

export default getUserInfo;
