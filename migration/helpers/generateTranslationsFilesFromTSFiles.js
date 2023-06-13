const path = require('path');
const fs = require('fs');
const translations = require('../constants/translations');

function generateTranslationsFilesFromTSFiles() {
    const translationsPath = path.join(__dirname, '../../src/_utils/i18n');
    
    translations.forEach(lang => {
        const src = path.join(translationsPath, '/', `${lang}.ts`);
        const dest = path.join(__dirname, '../translations/', `${lang}.js`);
        
        if(!fs.existsSync(dest)) {
            console.log('\x1b[31m ✅ >>> File does not exist. \x1b[0m');
            const data = fs.readFileSync(src, 'utf-8', (err) => {
                if(err) console.log(`\x1b[31m ❌ ${err} \x1b[0m`);
                console.log(`\x1b[32m ✅ >>> File ${lang}.ts read successfully \x1b[0m`)
            });

            let splittedContent = data;

            splittedContent = data.split('\n').slice(2);
            splittedContent[0] = `const ${lang} = {`;
            splittedContent[splittedContent.length - 1] = `module.exports = ${lang}`;
            splittedContent = splittedContent.join('\n');
            

            fs.writeFileSync(dest, splittedContent, (err) => {
                if(err) console.log(`\x1b[31m ❌ ${err} \x1b[0m`);
                console.log(`\x1b[32m ✅ >>> File ${lang} created successfully. x1b[0m`);
            });
        } else {
            console.log(`\x1b[32m ✅ >>> File with ${lang} translation exist. \x1b[0m`);
        }
    });
}

module.exports = generateTranslationsFilesFromTSFiles;
