let st = "Kunal";
let num = 27;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Kunal", role: "student" };
let snull = null;
let sundefined;

console.table([
  { label: "sampleString", value: st, type: typeof st },
  { label: "sampleNumber", value: num, type: typeof num },
  { label: "sampleBoolean", value: bool, type: typeof bool },
  { label: "sampleArray", value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  { label: "sampleObject", value: obj, type: typeof obj },
  { label: "sampleNull", value: snull, type: snull === null ? "null" : typeof snull },
  { label: "sampleUndefined", value: sundefined, type: typeof sundefined }
]);
