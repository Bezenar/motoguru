const fs = require('fs');

function isEmptyDir(path) {  
    try {
      const directory = fs.opendirSync(path);
      const entry = directory.readSync();
      directory.closeSync();

      return entry === null
    } catch (error) {
      console.log(`\x1b[31m ❌ ${error} \x1b[0m`)
      return false
    }
}

module.exports = isEmptyDir;