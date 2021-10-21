'use strict';

const { sequelize } = require(".");

module.exports = (sequelize, DataType) => {
    let WatchlistEntry = sequelize.define('WatchlistEntry', {
      movie_id: { type: DataType.INTEGER(11),
                  primaryKey: true },
      user_id: { type: DataType.INTEGER(11),
                  primaryKey: true }
    }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'watchlist'
    });
    WatchlistEntry.associate = function (models) {
      // foreign keys (definitely to movie(data))
    };
  
    return WatchlistEntry;
  ;}