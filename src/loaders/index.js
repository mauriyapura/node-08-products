
const ExpressServer = require("./server/expressServer");
const mongooseLoader = require("./mongoose");
const config = require("../config");
const logger = require("./logger")




const startServer = async()=>{

  await mongooseLoader();
  logger.info("DB loaded and connected")

  const server = new ExpressServer()
  logger.info("Express loaded");

  server.start();
  logger.info(`###########################
    Server listening on port: ${config.port}
    ###########################
  `);
    
    
}

module.exports = startServer;



