/**
 * Greetings
 */
console.log('\x1b[34m----------------------------------------------------------------------------------------');
console.log('\x1b[34m---\x1b[31m##\x1b[34m-------\x1b[31m##\x1b[34m----\x1b[31m######\x1b[34m---\x1b[31m##########\x1b[34m---\x1b[31m######\x1b[34m----\x1b[31m#######\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m#####\x1b[34m----\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m-\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m-\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m#\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m#\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m------\x1b[31m#\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m-\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---------\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m###\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m###\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m#\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m#\x1b[34m--\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m######\x1b[34m----\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m---------\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m------\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m-----\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m---\x1b[31m##\x1b[34m--');
console.log('\x1b[34m--\x1b[31m##\x1b[34m---------\x1b[31m##\x1b[34m---\x1b[31m######\x1b[34m-------\x1b[31m##\x1b[34m-------\x1b[31m######\x1b[34m----\x1b[31m#######\x1b[34m----\x1b[31m#####\x1b[34m---\x1b[31m##\x1b[34m----\x1b[31m##\x1b[34m---\x1b[31m#####\x1b[34m---');
console.log('\x1b[34m----------------------------------------------------------------------------------------');

/**
 * modules.
 */
const path = require('path');
const fs = require('fs');
const DB = require('./DB');
const translations = require('./constants/translations');

/**
 * helpers
 */
const generateTranslationsFilesFromTSFiles = require('./helpers/generateTranslationsFilesFromTSFiles');
const isEmptyDir = require('./helpers/isEmptyDir');

/**
 * constants
 */
const translationsPath = path.join(__dirname, './translations');

/**
 * Check is translations files are sync.
 */
if(isEmptyDir(translationsPath)) {
    generateTranslationsFilesFromTSFiles();
    console.log('\x1b[32m ✅ >>> Translations files successfully generated \x1b[0m');
} else {
    console.log('\x1b[32m ✅ >>> All translations files already exist. If you wanna update it remove files in translations directory \x1b[0m');
}

/**
 * Post all translations structure to firebase.
 */
translations.forEach(async (tr) => {
    try {
        const src = path.join(__dirname, `/translations/${tr}.js`);
        const singleLangTranslation = require(`./translations/${tr}`);
        
        await DB.setData('translations', tr, singleLangTranslation);
        console.log(`\x1b[32m ✅ Translation ${tr} successfully migrated \x1b[0m`);
    } catch (error) {
        console.log(`\x1b[31m ❌ Error on migrate ${tr} translation: ${error} \x1b[0m`)
    }
});

/**
 * Informative message, that migrations completed successfully.
 */
console.log('\x1b[32m ✅ Migration complete successfully \x1b[0m');
