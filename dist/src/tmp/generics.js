"use strict";
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'Quiil', age: 28 }, 'name'));
