import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  const PORT = 8080;
  await app.listen(PORT);
  console.log(`Server running on port ${PORT}`);
}
bootstrap();
