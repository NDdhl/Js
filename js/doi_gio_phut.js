function time_convert(num)  // cho phút tính giờ
 { 
  var hours = Math.floor(num / 60);  
  //Math.floor: trả  vềsố nguyên lớn nhất nhỏ hơn hoặc bằng
  var minutes = num % 60;
  //chia lấy sư 
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441)); 
