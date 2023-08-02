
window.addEventListener("load", event => {
  const html = document.querySelector('html');
  const footer = document.querySelector('footer')
  const aside = document.querySelector('#sidebar');
  const contentTop = document.querySelectorAll('.content')[1].parentNode.getBoundingClientRect();
  const content = document.querySelector('#main_content');
  const sideBottom = document.querySelector('.article-small-image');
  const fix = document.querySelector('._fixed');
  const banner = document.querySelector('.banner__head');
  const blog = document.querySelector('.blog-header');
  console.log(contentTop)
  console.log(aside.getBoundingClientRect())
  html.scrollTop = 0;
  if (aside != undefined && content != undefined) 
  {
    if (fix)
    {
      const asideHeight = aside.offsetHeight;
      document.addEventListener('scroll', event => {
        console.log(html.scrollTop + 75 + asideHeight)
        console.log(html.scrollHeight - footer.clientHeight - 36)
        if (window.outerWidth < 992) {
          aside.style.margin = '';
          aside.style.position = ''
          content.style.marginLeft = '';
          aside.style.maxHeight = ''
          aside.style.overflow = '';
          aside.style.marginTop = '';
          aside.style.bottom = ''
          return;
        }
        if (html.scrollTop < 96) {
          aside.style.margin = '';
          aside.style.position = ''
          content.style.marginLeft = '';
          aside.style.maxHeight = ''
          aside.style.overflow = '';
          aside.style.top = '';
          aside.style.bottom = ''
        }
        else if (((html.scrollTop + 75 + asideHeight) > (html.scrollHeight - footer.clientHeight - 36))) {
          aside.style.position = 'absolute';
          aside.style.bottom = '36px'
          aside.style.maxHeight = ''
          aside.style.overflow = '';
          aside.style.top = '';
          content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
          sideBottom.classList.toggle('act');
  
        }
        else {
          aside.style.position = 'fixed';
          aside.style.maxHeight = 'calc(100vh - 75px)'
          aside.style.overflow = 'scroll';
          aside.style.top = (html.scrollTop) > 75 ? '75px' : '';
          content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
          aside.style.bottom = ''
          if (sideBottom) {
            aside.style.top = (html.scrollTop) > 45 ? '75px' : '';
          }
        }
      })
    }
    else {
      const asideHeight = aside.getBoundingClientRect();
      document.addEventListener('scroll', event => {
        console.log(asideHeight.height)
        if (window.outerWidth < 992) {
          aside.style.margin = '';
          aside.style.position = ''
          content.style.marginLeft = '';
          aside.style.maxHeight = ''
          aside.style.overflow = '';
          aside.style.marginTop = '';
          aside.style.bottom = ''
          return;
        }
        if (html.scrollTop < asideHeight.top - 20) {
          aside.style.margin = '';
          aside.style.position = ''
          content.style.marginLeft = '';
          aside.style.maxHeight = ''
          aside.style.overflow = '';
          aside.style.top = '';
          aside.style.bottom = ''
        }
        else if (((html.scrollTop + 20 + asideHeight.height) > (html.scrollHeight - footer.clientHeight - 36))) {
          aside.style.position = 'absolute';
          aside.style.bottom = '20px'
          aside.style.maxHeight = ''
          aside.style.overflow = '';
          aside.style.top = '';
          content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
  
        }
        else {
          aside.style.position = 'fixed';
          aside.style.maxHeight = 'calc(100vh - 20px)'
          aside.style.overflow = 'scroll';
          aside.style.top = '20px';
          content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
          aside.style.bottom = ''
        }
      })
    }
  }
})

/*
if (aside != undefined && content != undefined) {
  document.addEventListener('scroll', event => {
    console.log(html.scrollTop)
    console.log(contentTop.top - 50)
    if (window.outerWidth < 992) {
      aside.style.margin = '';
      aside.style.position = ''
      content.style.marginLeft = '';
      aside.style.maxHeight = ''
      aside.style.overflow = '';
      aside.style.marginTop = '';
      aside.style.bottom = ''
      return;
    }
    if (html.scrollTop < (Math.max(100, contentTop.top - 60))) {
      aside.style.margin = '';
      aside.style.position = ''
      content.style.marginLeft = '';
      aside.style.maxHeight = ''
      aside.style.overflow = '';
      aside.style.top = '';
      aside.style.bottom = ''
    }
    else if (((html.scrollTop + 40 + aside.clientHeight) < (html.scrollHeight - footer.clientHeight - 36))) {
      if (fix) {
        aside.style.position = 'fixed';
        aside.style.maxHeight = 'calc(100vh - 75px)'
        aside.style.overflow = 'scroll';
        aside.style.top = (html.scrollTop) > 75 ? '75px' : '';
        content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
        aside.style.bottom = ''
        if (sideBottom) {
          aside.style.top = (html.scrollTop) > 45 ? '75px' : '';
        }
      }
      else if (banner) {
        aside.style.position = 'fixed';
        aside.style.maxHeight = 'calc(100vh - 75px)'
        aside.style.overflow = 'scroll';
        aside.style.top = (html.scrollTop) > 45 ? '75px' : '';
        content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
        aside.style.bottom = ''
      }
      else if (blog) {
        aside.style.position = 'fixed';
        aside.style.maxHeight = 'calc(100vh - 20px)'
        aside.style.overflow = 'scroll';
        aside.style.top = (html.scrollTop) > 20 ? '40px' : '';
        content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
        aside.style.bottom = ''
      }
      else {
        aside.style.position = 'fixed';
        aside.style.maxHeight = 'calc(100vh - 20px)'
        aside.style.overflow = 'scroll';
        aside.style.top = (html.scrollTop) > 90 ? '1.25rem' : '';
        content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
        aside.style.bottom = ''
      }

    }
    else {
      aside.style.position = 'absolute';
      aside.style.bottom = '36px'
      aside.style.maxHeight = ''
      aside.style.overflow = '';
      aside.style.top = '';
      content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
      sideBottom.classList.toggle('act');
    }
  })
}
*/