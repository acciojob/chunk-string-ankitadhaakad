function stringChop(str, size) {
  if (str === null) return [];

  size = Number(size);
  if (size <= 0) return [];  // handle invalid size

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
