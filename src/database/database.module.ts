import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigKeys } from 'src/utils/config.keys';

@Global()
@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            inject: [ConfigService],
            useFactory: (_configService: ConfigService) => {
                return {
                    type: 'postgres',
                    host: _configService.get(ConfigKeys.HOST),
                    port: parseInt(_configService.get(ConfigKeys.PORT), 10),
                    username: _configService.get<string>(ConfigKeys.USERNAME),
                    password: _configService.get<string>(ConfigKeys.PASSWORD),
                    database:_configService.get<string>(ConfigKeys.DATABASE),
                    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                    autoLoadEntities: true,
                    synchronize: true,
                };
            }
        }),
    ],
    exports:[TypeOrmModule],
})
export class DatabaseModule {}
