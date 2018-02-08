const configValues = require('./config');

module.exports = {
  getDbConnectionsString() {
    return `mongodb://${configValues.uname}:${configValues.pwd}@ds225608.mlab.com:25608/nodetodomean`;
  }
}
