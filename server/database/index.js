import Sequelize from 'sequelize'

import config from './config'
import logger from '../helpers/logger'

const { url, dialect } = config[process.env.NODE_ENV]

export default new Sequelize(url, {
  dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  logging: msg => {
    logger.debug(msg)
  },
})
