import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class changePasswordWithCaptcha  {
  async changePasswordWithCaptcha(body:any) {
    let method = new BaseApiService;
    return method.post(listAPi.changePasswordWithCaptcha, body);
  }
}

export default changePasswordWithCaptcha;
