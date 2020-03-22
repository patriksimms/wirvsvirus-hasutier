import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  hbs.registerPartials(join(__dirname, '../src/frontend/views/partials'));
  hbs.registerHelper('setVar', function(varName, varValue, options) {
    options.data.root[varName] = varValue;
  });

  app.useStaticAssets(join(__dirname, '../', 'public'));
  app.setBaseViewsDir(join(__dirname, '../src/frontend', 'views'));
  app.setViewEngine('hbs');

  app.use(
    session({
      secret: 'supergeheim123',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 360000, // 24 hours
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}

bootstrap();
