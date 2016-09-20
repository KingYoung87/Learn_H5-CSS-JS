/**
 * Created by Young on 16/7/9.
 */

function showpic(selPic) {
    var srcPic = selPic.getAttribute('href');
    var img = document.getElementById('selPicImg');
    

    img.setAttribute('src' , srcPic);
}
