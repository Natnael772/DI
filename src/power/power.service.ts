import { Injectable } from '@nestjs/common';

//Doesn't depend upon any thing inside the project

@Injectable()
export class PowerService {
  //amount of power that other services is requesting to be supplied

  //supply watts that some other services(cpu and disk) need to work
  supplyPower(watts: number) {
    console.log(`Supplying ${watts} watts worth of power`);
  }
}
