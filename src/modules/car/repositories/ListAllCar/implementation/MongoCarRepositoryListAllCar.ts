import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryListAllCar } from "../ICarRepositoryListAll";

export class MongoCarsRepositoryListAll implements ICarRepositoryListAllCar {
  async ListAll(queryParams: any): Promise<any> {
    var filter: any = {};
    var pageSize = 10;
    var page = 10;

    if (queryParams.city) {
      filter.city = queryParams.city;
    }
    if (queryParams.name) {
      filter.name = queryParams.name;
    }
    if (queryParams.brand) {
      filter.brand = queryParams.brand;
    }
    if (queryParams.model) {
      filter.model = queryParams.model;
    }
    if (queryParams.year) {
      filter.year = queryParams.year;
    }
    if (queryParams.km) {
      filter.km = queryParams.km;
    }
    if (queryParams.price) {
      filter.price = queryParams.price;
    }

    // console.log(filter)

    var listCar = await CarsSchema.find(filter)
      .sort({ price: queryParams.sort })
      .skip(queryParams.page - 1)
      .limit(queryParams.pageSize);
    var count = await CarsSchema.find(filter).count();

    return { listCar, count };
  }
}
