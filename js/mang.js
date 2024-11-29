var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var mf = 1;  // Số lần xuất hiện của phần tử nhiều nhất (bắt đầu từ 1)
var m = 0;   // Biến đếm số lần xuất hiện của mỗi phần tử trong mảng
var item;    // Biến lưu phần tử xuất hiện nhiều nhất

for (var i = 0; i < arr1.length; i++) 
{
    for (var j = i; j < arr1.length; j++) 
    {
        if (arr1[i] == arr1[j])
            m++;
        if (mf < m) 
        {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}

console.log(item + " ( " + mf + " lần) ");
