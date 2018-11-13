var canvas = document.getElementById('canvas'); //gGetting canvas id
if (canvas.getContext){
var qq = canvas.getContext('2d'); //DOCTYPE
}
else {
  document. write("Doesn't work!");
}
async function read(){
var h = document.getElementById('height').value;
var w = document.getElementById('width').value;
var n = document.getElementById('n').value;
}
function refresh()
{
 $.ajax({
            async: true,
            type: "GET",
            url: "http://127.0.0.1:3000/",
            data: data,
            success: function (html) {
                $("#canvas").html(html);
            }
        });
}



setInterval('read()', 30)
setInterval('refresh()', 30)
setInterval('draw',10)
