(function flexible (window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // 调整body内所有字体大小
  function setBodyFontSize () {
    if (document.body) {
      //document.body.style.fontSize = (12 * dpr) + 'px';
    }
    else {
      //document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 设置1rem对应的像素比大小
  function setRemUnit () {
  	//var bWidth= document.documentElement.clientWidth;
    var rem = docEl.clientWidth / 144;
    //console.log(bWidth);
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit();

  // 重置页面上的rem单位大小
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  })
  // 检测0.5px支持
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody);
  }
}(window, document))