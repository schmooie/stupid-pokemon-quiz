export function chunkArr(arr, chunk) {
  let res = [];

  for (let i = 0, j = arr.length; i < j; i += chunk) {
    res.push(arr.slice(i, i + chunk));
  }

  return res;
}

export function makeRandomArr(num, min = 1, max = 151) {
  let res = [];

  while (res.length < num) {
    let rand = Math.random() * (max - min) + min;
    let found = false;

    for (let i = 0; i < res.length; i++) {
      if (res.indexOf(rand) > -1) {
        found = true;
      }
    }

    if (!found) {
      res[res.length] = Math.floor(rand);
    }
  }

  return res;
}