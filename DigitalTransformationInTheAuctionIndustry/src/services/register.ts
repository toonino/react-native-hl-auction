import {BaseApiService} from '../environtments/base-api.service';
import {listAPi} from '../shared/listAPi';

class RegisterService {
  async Register(body: any) {
    let method = new BaseApiService();
    return method.post(listAPi.register, body);
  }

  async validateCaptcha(body: any) {
    let method = new BaseApiService();
    return method.post(listAPi.validateCaptcha, body);
  }

  async validateRegister(body: any) {
    let method = new BaseApiService();
    return method.post(listAPi.validateRegister, body);
  }

  async uploadImage(body: any) {
    let method = new BaseApiService();
    return method.post(listAPi.uploadImage, body);
  }
}

export default RegisterService;
