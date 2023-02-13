const n = parseInt(process.argv[2]);

let rumus = [];
for (let i = 1; i <= n; i++) {
  rumus.push(i * (i + 1) / 2);
}

console.log(rumus.join("-"));