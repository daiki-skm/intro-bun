import { file, write } from "bun";

const blob = file("./src/input.txt");
await write("./src/output.txt", blob);

await write("./src/index.html", await fetch("https://example.com"));
