'use strict';

exports.get = function(params) {
  // Return new Promise
  return new Promise((resolve, reject) => {

    if(true)
      resolve(({hello: 'Hello World'}));
    else {
      reject(new Error('Nope'));
    }

  });
};