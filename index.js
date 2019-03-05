const util = require("util");

const id = x => x;

const empty = () => "";

const getPath = (obj, path) => (Array.isArray(path)) ? path.reduce((acc, level) => acc[level], obj) : obj[path];

/**
 * Get parts of template string as array and transform them.
 *  
 * @param {function} fnVal callback to transform inserted values
 * @param {function} fnStr callback to transform static str parts
 */
const partsMap = (fnVal=id, fnStr=id) => ([start, ...rest], ...vals) => rest.reduce((acc, str, idx) => [...acc, fnVal(vals[idx]), fnStr(str)], [fnStr(start)]);

/**
 * Map over tempalte inserted values
 *  
 * @param {function} fnVal callback to transform inserted values
 * @param {function} fnStr callback to transform static str parts
 */
const map = (fnVal=id, fnStr=id, sep="") => (str, ...vals) => partsMap(fnVal, fnStr)(str, ...vals).join(sep);

const normal = map(id);

/**
 * If for templates.
 * @param {boolean} cond Condition to trigger template render.
 * @param {any} else_ Template to use otherwise.
 */
const ifCond = (cond, else_=empty) => cond ? normal : else_;

/**
 * Unless for templates.
 * @param {boolean} cond Condition to trigger template render.
 * @param {any} else_ Template to use otherwise.
 */
const unlessCond = (cond, else_=empty) => !cond ? normal : else_;

/**
 * Inspect objects in template.
 */
const inspect = map(v => (typeof v === 'object' && v !== null) ? util.inspect(v) : v);

/**
 * Replace null / undefined with empty string in template.
 */
const nonnull = map(v => (v === null || v === undefined) ? "" : v);

/**
 * Template string function that fills indexes from vals.
 */
const formatN = (strs, ...vals) => (...insertVals) => map(v => v === undefined ? "" : insertVals[v])(strs, ...vals);

/**
 * Template string function that fills indexes and paths from obj. 
 */
const format = (strs, ...vals) => (obj) => map(v => v === undefined ? "" : getPath(obj, v))(strs, ...vals);

module.exports = {
    partsMap,
    map,
    normal,
    ifCond,
    unlessCond,
    inspect,
    nonnull,
    formatN,
    format,
};