import Prettier from "prettier";

let demo = Prettier.format("const a = 1;", { parser: "typescript" });

console.log(demo);
