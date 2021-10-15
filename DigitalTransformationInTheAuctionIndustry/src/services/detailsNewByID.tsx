import { BaseApiService } from "../environtments/base-api.service";
import { listAPi } from "../shared/listAPi";

class DetailsNewsByID{
    async  getNews(newsId:number){
    let method = new BaseApiService;
    const url = `${listAPi.listNews}/${newsId}`;
    return method.get(url, { newsId: newsId});
  }
}


export default DetailsNewsByID;