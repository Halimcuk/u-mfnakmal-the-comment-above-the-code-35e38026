import { mkdirSync, writeFileSync } from "node:fs";

const line = "// Do not delete the sleep(300) below. Nobody knows why it works, but removing it takes production down with it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
