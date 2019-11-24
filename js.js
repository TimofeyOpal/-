var duck = document.querySelector('.duck');
//duck.addEventListener('mousedown', function (evt) {
  //  evt.preventDefault();
//
  //  var shift = {
  //      x: startCoords.x - moveEvt.clientX,
  //      y: startCoords.y - moveEvt.clientY,
 //   }
//
 //   var startCoords = {
  //      x: moveEvt.clientX,
  //      y: moveEvt.clientY
  //  };
 //   setup.style.top = (setup.offsetTop - shift.y) + 'px';
  //  setup.style.left = (setup.offsetLeft - shift.x) + 'px';
//
   // document.addEventListener('mousemove', onmousemove);
  //  document.addEventListener('mouseup', onmouseup);
    
//});
//duck.onmouseover = function () {  (работает при наведении)
 //   this.style.border = '2px solid black';
 //   this.onclick = null;
    
//}

//duck.ondblclick = function () {
//    this.style.border = '2px solid red';
//}
//duck.oncontextmenu = function () {
  //  this.style.border = '2px solid red'; // 2 нажатия мышью плюс запрет на вызов инструментов
 //   return false;
//}


//duck.addEventListener('mouseenter', function () {
//    this.style.border = '1px solid black';
//});
//var back = document.querySelector('.back'); // блок становится больше
//var a = 0;
//back.addEventListener('mousemove', function () {
  //  a++
 //   this.style.width = 100+ a+'px';
//});


var back = document.querySelector('.back');
back.addEventListener('mousedown',function () {
    this.style.background = 'black';
    console.log('button:' + event.button);
    console.log('which:' + event.which);

});
