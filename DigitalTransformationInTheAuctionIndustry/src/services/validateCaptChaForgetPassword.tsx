import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class validateCaptChaForgetPassword  {
  async validateCaptChaForgetPassword(body:any) {
    let method = new BaseApiService;
    return method.post(listAPi.
validateCaptChaForgetPassword, body);
  }
}

export default validateCaptChaForgetPassword;
