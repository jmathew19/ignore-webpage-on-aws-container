// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // your API endpoint path
    createProxyMiddleware({
      target: 'http://localhost:3001', // your backend server URL
      changeOrigin: true,
    })
  );
};
