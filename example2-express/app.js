import * as bedrock from '@bedrock/core';
import * as server from '@bedrock/server';
import {URL} from 'url';

// once bedrock is ready, attach request handler
bedrock.events.on('bedrock.ready', function() {
  // direct access to the HTTP server instance
  server.servers.http.on('request', function(req, res) {
    // parse the request URL
    const url = new URL(req.url, `http://localhost`);
    const path = url.pathname;

    // handle different paths
    if(path === '/'){
      // root path
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World!\n');
    } else if(path === '/api/info') {
      // info path
      const info = {
        name: 'Bedrock Express Example',
        version: '1.0.0',
        description: 'An example of using Bedrock with Express.js',
        timestamp: new Date().toISOString()
      };
      res.writeHead(200, {'Content-Type': 'application/json'});
      // Convert object to formatted JSON string and send response
      res.end(JSON.stringify(info, null, 2));
    } else {
      // 404 Not Found
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found\n');
    }
  });
});

bedrock.start();


/* 
 *  *********************************************************************************
 *  V1 -- This did not work as expected, so I am trying a different appraoch - propably configuration issues
 *  *********************************************************************************
 */

// import * as bedrock from '@bedrock/core';

// //modules
// import 'bedrock-express';
// import 'bedrock-server';

// // Intialize bedrock server config object if it doesn't exist
// bedrock.config.server = bedrock.config.server || {};

// //set a default port
// bedrock.config.server.bindAddr = ['127.0.0.1'];
// bedrock.config.server.port = 3000;
// bedrock.config.server.httponly = true;

// bedrock.events.on('bedrock-server.listening', () => {
//   const logger = bedrock.loggers.get('app');
//   logger.info('Server is now listening on port 3000! Check your browser.');
// });

// // configure routes when bedrock-express is ready
// bedrock.events.on('bedrock-express.configure.routes', app => {
//   console.log('Configuring Express routes...');
//   app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

//   // info route
//   app.get('/api/info', (req, res) => {
//     console.log('Handling /api/info route request');
//     res.json({
//       name: 'Bedrock Express Example',
//       version: '1.0.0',
//       description: 'An example of using Bedrock with Express.js',
//       timestamp: new Date().toISOString()
//     });
//   });

//   console.log('Express routes configured successfully');
// });

// // log when the application is started
// bedrock.events.on('bedrock.started', () => {
//   const logger = bedrock.loggers.get('app');
//   const port = bedrock.config.server.port;
//   logger.info(`Express application started - try these endpoints:`);
//   logger.info(`- http://127.0.0.1:${port}/`);
//   logger.info(`- http://127.0.0.1:${port}/api/info`);
// });

// // start the application
// bedrock.start();