function max_of_three(x, y, z) 
{
  let max_val = 0;
  if (x > y)
  {
    max_val = x;
  } 
  else 
  {
    max_val = y;
  }
  if (z > max_val)
  {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1, 0, 1));

// Log the result of calling max_of_three with the arguments 0, -10, -20 to the console
console.log(max_of_three(0, -10, -20));

// Log the result of calling max_of_three with the arguments 1000, 510, 440 to the console
console.log(max_of_three(1000, 510, 440)); 
