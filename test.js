let reg = /^\s*(export\s*)?(default\s*)?\s*(class|interface)\s+\S+(\s+(extends|implements)\s+\S+)?\{?/;
console.log(reg.exec(`export class ModelFactory extends Factory{}`));