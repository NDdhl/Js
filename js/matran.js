function matrix(n) {
    var i;
    var j;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {    // === so sánh bằng: giá trị+kiểu dữ liệu 
                console.log(' 1 ');
            } else {
                console.log(' 0 ');
            }
        }
        console.log('----------');
    }
}
matrix(4); 
