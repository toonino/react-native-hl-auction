import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class ListNews{
    async  ListNews(categoryId: number,page:number, per_page: number, typeSort:number){
    let method = new BaseApiService;
    return method.get(listAPi.listNews, {categoryId: categoryId, page: page,
        per_page: per_page,
        typeSort: typeSort,});
  }
}


export default ListNews;