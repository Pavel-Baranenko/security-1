function progressBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = scroll / height * 100;

  if (scroll > 96) {
    document.getElementById('progressBar').style.marginLeft = (scrolled) + '%';
  }
  else {
    document.getElementById('progressBar').style.marginLeft = 0;
  }
}
window.addEventListener('scroll', progressBar);