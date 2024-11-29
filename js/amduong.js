function positive_negative(x, y) /*kiểm tra hai số có 1 số dương 1 số âm*/
{
  if ((x < 0 && y > 0) || (x > 0 && y < 0))   /* dấu || là phép OR */
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
