const completeDeepClone = (target, map = new Map()) => {
  if (typeof target !== "object" || target == null) return target;

  const constr = target.constructor;

  if (/^Function|RegExp|Date|Map|Set$/i.test(constr.name))
    return new constructor(target);

  if (map.get(target)) return map.get(target);
  map.set(target, true);

  const cloneTarget = Array.isArray(target) ? [] : {};

  for (prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = completeDeepClone(target[prop], map);
    }
  }

  return cloneTarget;
};
