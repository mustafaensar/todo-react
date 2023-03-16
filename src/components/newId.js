/* eslint-disable import/no-anonymous-default-export */
let lastId = 0;

export default function(prefix='id'){
  lastId ++;
  return `${prefix}${lastId}`;
}