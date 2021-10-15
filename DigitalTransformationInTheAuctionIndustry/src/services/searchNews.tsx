import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class searchNews{
    async searchNews(keyword:string,page:number, per_page: number,typeSearch :number, typeSort:number){
    let method = new BaseApiService;
    return method.get(listAPi.listNews, {keyword:keyword, page: page,
        per_page: per_page,typeSearch:typeSearch,
        typeSort: typeSort,});
  }
}

export default searchNews;