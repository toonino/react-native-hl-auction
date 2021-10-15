import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class listPropertyCategory{
    async  listPropertyCategory(page:number, per_page: number, typeSort:number){
    let method = new BaseApiService;
    return method.get(listAPi.listPropertyCategory, {page: page,
        per_page: per_page,
        typeSort: typeSort,});
  }
}

export default listPropertyCategory;