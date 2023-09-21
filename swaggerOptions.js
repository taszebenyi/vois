const swaggerOptions = {
  apis: ['./routes/*.js'],
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: '_VOIS BLOG',
      version: '1.0.0',
      description: 'API Documentation',
    },
  },
};

export default swaggerOptions;
