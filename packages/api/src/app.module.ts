import { Module } from '@nestjs/common';
import { ConfigModule } from '~/config/config.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, `../../${process.env.NODE_ENV === 'production' ? 'myapp' : 'api'}`, 'client'),
    }),
    UserModule,
  ],
})
export class AppModule {}
