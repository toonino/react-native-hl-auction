import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class forgetPassword  {
  async forgetPassword(body:any) {
    let method = new BaseApiService;
    return method.post(listAPi.forgetPassword, body);
  }
}

export default forgetPassword;
