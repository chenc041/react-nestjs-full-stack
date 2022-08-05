import { Module } from '@nestjs/common';
import { ConfigModule } from '~/config/config.module';
import { ExampleModule } from '~/example/example.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule,
    ExampleModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
    }),
  ],
})
export class AppModule {}
