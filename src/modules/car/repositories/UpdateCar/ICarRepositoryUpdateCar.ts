import { Cars } from "../../entities/CarSchema";

export interface ICarRepositoryUpdateCar {
  UpdateCar(car: Cars, id: string): Promise<Cars>;
  findById(id: string): Promise<any>;
}
