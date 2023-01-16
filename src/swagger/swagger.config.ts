import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { SwaggerTheme } from 'swagger-themes';

export const initSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Calculate Volumetric Flow API')
    .setDescription(
      'API made to calculate speed and volumetric flow of atmospheric and pressurized tanks with liquid contents.',
    )
    .setVersion('1.0')
    /*.addSecurity('bearer', {
            type: 'http',
            scheme: 'bearer'
        })*/
    //.addBearerAuth()
    .build();
  const theme = new SwaggerTheme('v3');

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      ignoreGlobalPrefix: false,
      persistAuthorization: true,
      docExpansion: 'list',
      filter: true,
    },
    customCss: theme.getBuffer('dark'),
    customSiteTitle: 'CVF-API',
  };

  /*const options: SwaggerDocumentOptions = {
        ignoreGlobalPrefix: false,
    }*/
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, customOptions);
};
