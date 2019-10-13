function bruteForceIntersection (arrA, arrB) {
  const shared = [];
  arrA.forEach(elemA => {
    arrB.forEach(elemB => {
      if (elemA == elemB) {
        shared.push(elemA);
      }
    });
  });
  return shared;
}

function optimalIntersection (arrA, arrB) {
  const shared = [];
  let idxA = 0;
  let idxB = 0;
  while (idxA < arrA.length && idxB < arrB.length) {
    const elemA = arrA[idxA];
    const elemB = arrB[idxB];
    if (elemA == elemB) {
      shared.push(elemA);
    }
    if (elemA <= elemB) {
      idxA++;
    }
    if (elemA >= elemB) {
      idxB++;
    }
  }
  return shared;
}

function alsoOptimalIntersection (arrA, arrB) {
  const smaller = arrB.length < arrA.length ? arrB : arrA;
  const larger = arrB.length >= arrA.length ? arrB : arrA;

  const hashSmaller = {};
  smaller.forEach(elem => hashSmaller[elem] = true);

  return larger.filter(elem => hashSmaller.hasOwnProperty(elem));
}

console.log(bruteForceIntersection([1,4,9,10,11], [2,3,4,5,8,10])); // should return [4, 10] 
//(numbers can be in any order)