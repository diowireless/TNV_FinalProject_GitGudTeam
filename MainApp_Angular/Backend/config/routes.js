const DataEngine = require('../engine/entry');
const ErrorsEngine  = require('../engine/errors');

module.exports = (app) => {

  const dataPath = '/data';

  /********** DATA REST APIs **********/
  app.get(dataPath, DataEngine.getEntry);
  app.post(dataPath, DataEngine.createEntry);
  app.get(`${dataPath}/:id`, DataEngine.getEntryById);
  app.put(`${dataPath}/:id`, DataEngine.editEntry);
  app.delete(`${dataPath}/:id`, DataEngine.deleteEntry);

  const dataPathWatchlist = '/watchlist';
  
  /******* WATCHLIST REST APIs *******/
  app.get(dataPathWatchlist, DataEngine.getWatchlist);
  app.get(`${dataPathWatchlist}/:u_id`, DataEngine.getUserWatchlist);
  app.get(`${dataPathWatchlist}/:u_id/:m_id`, DataEngine.getWatchlistEntryById);
  app.post(dataPathWatchlist, DataEngine.createWatchlistEntry);
  app.delete(`${dataPathWatchlist}/:u_id/:m_id`, DataEngine.deleteWatchlistEntry);

  /********** ERROR HANDLER **********/
  app.use(ErrorsEngine.page404);
  app.use(ErrorsEngine.pageError);

  


};