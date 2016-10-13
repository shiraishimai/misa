'use strict';
const STRING = '[object String]',
    FUNCTION = 'function';

class Util {
    static isNumber(ref) {
        return Number.isInteger(ref) || isNaN(ref) === false;
    }
    static isArray(ref) {
        return Array.isArray(ref);
    }
    static isString(ref) {
        return Object.prototype.toString.call(ref) === STRING;
    }
    static isFunction(ref) {
        return typeof ref === FUNCTION;
    }
    static isObject(ref) {
        return ref === Object(ref);
    }
    static isFileExist(filePath) {
        try {
            return fs.statSync(filePath).isFile();
        } catch (err) {
            return false;
        }
    }
    static isDirectoryExist(dirPath) {
        try {
            return fs.statSync(dirPath).isDirectory();
        } catch (err) {
            return false;
        }
    }
    static leftPad(x, len, pad) { 
        x = x.toString();
        if (x.length >= len) return x;
        return ((pad || '0').repeat(len) + x).slice(-len); 
    }
}

module.exports = Util;