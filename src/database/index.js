import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import databaseconfig from '../config/database';

const models = [User];

class Database{
  constructor(){
    this.init();
    this.mongo();
  }

  init(){
    this.connection = new Sequelize(databaseconfig);
    models.map(model => model.init(this.connection));
  }
  mongo(){
    this.mongoConnection = mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.x3spq.mongodb.net/afya',{ useNewUrlParser: true, useUnifiedTopology: true })
  }
}

export default new Database();