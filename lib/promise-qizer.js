
module.exports = function (Promise) {

  function q (executor) {
    return new Promise(executor);
  }

  ['resolve', 'reject', 'all', 'race'].forEach(function (fName) {
    q[fName] = Promise[fName];
  });

  q.when = function (p) { return ( p && p.then ) ? p : Promise.resolve(p); };

  return q;

};