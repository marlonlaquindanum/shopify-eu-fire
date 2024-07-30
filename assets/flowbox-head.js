(function (d, id) {
  if (!window.flowbox) {
    var f = function () {
      f.q.push(arguments);
    };
    f.q = [];
    window.flowbox = f;
  }
  if (d.getElementById(id)) {
    return;
  }
  var s = d.createElement('script'),
    fjs = d.scripts[d.scripts.length - 1];
  s.id = id;
  s.async = true;
  s.src = ' https://connect.getflowbox.com/flowbox.js';
  fjs.parentNode.insertBefore(s, fjs);
})(document, 'flowbox-js-embed');
