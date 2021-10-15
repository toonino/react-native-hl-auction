import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class searchPropertyForUser{
    async  searchPropertyForUser(categoryId:number,keyword: string,maxPrice: number,minPrice: number,page:number, per_page: number, typeSort:number){
    let method = new BaseApiService;
    return method.get(listAPi.searchPropertyForUser, {categoryId:categoryId,keyword:keyword,maxPrice:maxPrice,minPrice:minPrice,page: page,
        per_page: per_page,
        typeSort: typeSort,});
  }
}


export default searchPropertyForUser;