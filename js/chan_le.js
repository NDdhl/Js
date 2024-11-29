for (var x = 0; x <= 15; x++) /* Kiêm tra chẳn lẻ của các số từ 0-15 */
{
    if (x === 0)     /* === so sánh bằng: giá trị+kiểu dữ liệu */
    {
        console.log(x + " là số chẵn");
    }
    else if (x % 2 === 0)       /* x chia 2 có phần dư*/
    {
        console.log(x + " là số chẵn");
    }
    else {
        console.log(x + " là số lẻ");
    }
} 
