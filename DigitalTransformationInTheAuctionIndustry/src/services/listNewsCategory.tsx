import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class listNewsCategory{
    async  listNewsCategory(page:number, per_page: number, typeSort:number){
    let method = new BaseApiService;
    return method.get(listAPi.listNewsCategory, {page: page,        per_page: per_page,        typeSort: typeSort,});
  }
}


export default listNewsCategory;