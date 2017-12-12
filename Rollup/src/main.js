import { queryAll as qa } from './modules/dom';
import { type, makeArray } from './modules/utils';
import $ from 'jquery';

const elems = qa('*');
console.log(`elems의 유형은 ${type(elems)}`);

let elems_array = makeArray(elems);
console.log(`elems_array: ${elems_array}`);

let $body = $('body');

$body.addClass('happy');