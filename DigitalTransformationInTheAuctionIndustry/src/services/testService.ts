import { BaseApiService } from "../environtments/base-api.service";
export class PersonList {

  constructor(private http: BaseApiService) {
  }


  getListCountry() {
   return this.http.get(`country/api/list`);
  }

}
