import Prettier from "prettier";

let demo = Prettier.format("Hello World", { parser: "typescript" });

console.log(demo);
