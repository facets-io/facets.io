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

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

$('#fixed-container *').hover(
    function (e) {
        $(this).css('border', '1px solid black');
        $(this).css('cursor', 'pointer');
        e.preventDefault();
        e.stopPropagation();
        return false;
    }, function (e) {
        $(this).css('border', 'none');
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
).click((e) => {
    document.getElementById("ToolBoxLabel").innerHTML = `#${e.target.id}`;
    // console.log('EE', e);
    // attributes
    window.selectedDOM = e.target.id;
})
