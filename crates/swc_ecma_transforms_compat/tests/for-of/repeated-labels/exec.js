function run(arr) {
    const seen = [];
    first:
    second:
    for (const item of arr) {
        if (item === 1) continue first;
        if (item === 2) continue second;
        if (item === 4) break first;
        seen.push(item);
    }
    return seen;
}

console.log(run(new Set([1, 2, 3, 4, 5])).join());
