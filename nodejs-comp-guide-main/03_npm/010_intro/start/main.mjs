import _ from "lodash/cloneDeep";

const original = {prop: {nested: "value"}}
const cloned = _.cloneDeep(original);

cloned.prop.nested = 'new value';

console.log(cloned);