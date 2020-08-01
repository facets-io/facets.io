// var a = document.getElementsByTagName('*')
// for (i in a) {
//     a[i].onmouseover = function (e) {
//         // console.log('mpika man');
//         // this.css('border', '1px solid black');

//         this.style.border = '1px solid black';
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//     };
//     a[i].onmouseout = function (e) {
//         // this.css('border', 'none');
//         this.style.border = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//     };
// }

$('#fixed-container *').hover(
    function (e) {
        console.log('mpika man');
        $(this).css('border', '1px solid black');
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, function (e) {
        $(this).css('border', 'none');
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
);