{"index.js":"function findElement(arr, func) {\n  let num = 0; \n  // create a for loop to looks through an array\n  // assign it to num element\n  // write a if loop to check that num passes true test\n\n  for(let i = 0; i<=arr.length; i++)\n  {\n    num = arr[i];\n    if(func(num))\n    {\n  return num;\n    }\n}\nreturn undefined;\n}\n\nfindElement([1, 2, 3, 4], num => num % 2 === 0);"}