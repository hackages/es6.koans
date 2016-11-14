// Here is the solution for the last exercice in the proxy tests.

const spy = (someObject) => {
  const calls = {};
  return new Proxy(someObject, {
    get: function(target, name, receiver) {
      if (name == 'totalCalls') {
        return calls;
      }
      const targetProp = target[name];
      if (typeof(targetProp) == 'function') {
        return new Proxy(targetProp, {
          apply: function(targetFunction, thisArg, argumentsList) {
            calls[name] = calls[name] || 0;
            calls[name] += 1;
            Reflect.apply(targetProp, receiver, argumentsList);
          }
        });
      }
      return targetProp;
    }
  });
};
