const tap = require("tap");

const tpl = require("./index");

tap.test("template helpers", t => {
    t.equal(tpl.nonnull`${null} ${undefined}`, " ", "should replace null or undefined with empty string");

    t.deepEqual(tpl.partsMap(v => v+1, s => s.toUpperCase())`a${1}b`, ["A", 2, "B"], "should split into parts and apply callbacks");

    t.equal(tpl.formatN`${1} ${0}`("a", "b"), "b a", "should insert indexes in correct order");

    t.equal(tpl.format`${0} ${"d"} ${["a", "b", 0]}`(Object.assign([42], {a: {b: ["c"]}, d: "d"})), "42 d c", "should get path from obj");

    t.equal(tpl.ifCond(true)`a=${42}`, "a=42", "should trigger template render");

    t.equal(tpl.map(i => i && i.length || 0)`${null} ${"abc"}`, "0 3", "should apply map callback to inserted values");


    t.end();
});
