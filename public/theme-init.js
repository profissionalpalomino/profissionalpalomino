(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark') {
      localStorage.removeItem('theme');
    }
    document.documentElement.classList.remove('dark');
  } catch (e) {}
})();
