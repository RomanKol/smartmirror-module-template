'use strict';

exports.get = function(params) {
  // Return new Promise
  return new Promise((resolve, reject) => {

    if(params.data)
      resolve(({hello: 'Hello World'}));
    else {
      reject(new Error('Nope'));
    }

  });
};