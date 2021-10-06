export function get(obj: Object , path: String, def?: any) {
	let fullPath = path
		.replace(/\[/g, '.')
		.replace(/]/g, '')
		.split('.')
		.filter(Boolean);

	return fullPath.every(everyFunc) ? obj : def;

	function everyFunc(step) {
		return !(step && (obj = obj[step]) === undefined);
	}
}

export function merge(...args: any[]){
  // create a new object
  let target = {};
  let arr = Array.from(args);
  // merge the object into the target object
  const merger = (obj) => {
      for (let prop in obj) {
          if (obj.hasOwnProperty(prop)) {
              target[prop] = obj[prop];
          }
      }
  };
  // iterate through all objects and merge them with target
  for (let i = 0; i < args.length; i++) {
      merger(args[i]);
  }
  return target;
};