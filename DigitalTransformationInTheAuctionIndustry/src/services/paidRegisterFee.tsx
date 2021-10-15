import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class paidRegisterFee  {
  async paidRegisterFee() {
    let method = new BaseApiService();
    let check = await method.setToken();
    if (check) {
    return method.get(listAPi.paidRegisterFee);
    }
    
  }
}

export default paidRegisterFee;
