import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Bienvenido al examen de Graciela Moreno';
  }
}
