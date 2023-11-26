//type anyThing= string|number|object;
//type anyThing = any;
type anyThing = unknown;
let anything: anyThing = -20;
anything = 'Text';
anything = {};

export {};