import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  hbs.registerPartials(join(__dirname, '../src/frontend/views/partials'));

  app.useStaticAssets(join(__dirname, '../src/frontend', 'public'));
  app.setBaseViewsDir(join(__dirname, '../src/frontend', 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}

bootstrap();
