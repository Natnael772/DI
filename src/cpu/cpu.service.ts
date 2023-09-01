import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

//cpuservice needs instance of powerService to work
@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(num1: number, num2: number) {
    console.log('Drawing 10 watts of power from power service');
    this.powerService.supplyPower(10);
    return num1 + num2;
  }
}
