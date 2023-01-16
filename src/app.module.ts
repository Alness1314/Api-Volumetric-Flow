import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { OperationsModule } from './operations/operations.module';
import { DensitiesModule } from './densities/densities.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    OperationsModule,
    DensitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
