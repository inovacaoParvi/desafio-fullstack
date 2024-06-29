import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    create(createCarDto: CreateCarDto): Promise<import("./entities/car.entity").Car>;
    findAll(): Promise<import("./entities/car.entity").Car[]>;
    findOne(id: string): Promise<import("./entities/car.entity").Car>;
    update(id: string, updateCarDto: UpdateCarDto): Promise<import("./entities/car.entity").Car>;
    remove(id: string): Promise<void>;
}
