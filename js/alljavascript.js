
document.addEventListener('DOMContentLoaded', function () {
    const shortContent = document.querySelector('.short-content');
    const fullContent = document.querySelector('.full-content');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        if (fullContent.style.display === 'none' || fullContent.style.display === '') {
            fullContent.style.display = 'block';
            shortContent.style.display = 'none';
            toggleButton.textContent = 'Read less';
        } else {
            fullContent.style.display = 'none';
            shortContent.style.display = 'block';
            toggleButton.textContent = 'Read more';
        }
    });
});

{/* 2nds  */}
document.addEventListener('DOMContentLoaded', function () {
  const shortContent = document.querySelector('.short-contentt');
  const fullContent = document.querySelector('.full-contentt');
  const toggleButtonn = document.getElementById('toggleButtonn');

  function updateContentVisibility() {
      if (window.innerWidth <= 768) {
          if (fullContent.style.display === 'block') {
              shortContent.style.display = 'none';
          } else {
              shortContent.style.display = 'block';
          }
          toggleButtonn.style.display = 'block';
      } else {
          fullContent.style.display = 'block';
          shortContent.style.display = 'none';
          toggleButtonn.style.display = 'none';
      }
  }

  toggleButtonn.addEventListener('click', function () {
      if (fullContent.style.display === 'none' || fullContent.style.display === '') {
          fullContent.style.display = 'block';
          shortContent.style.display = 'none';
          toggleButtonn.textContent = 'Read less';
      } else {
          fullContent.style.display = 'none';
          shortContent.style.display = 'block';
          toggleButtonn.textContent = 'Read more';
      }
  });

  window.addEventListener('resize', updateContentVisibility);
  updateContentVisibility();
});
// 3rd 
document.addEventListener('DOMContentLoaded', function () {
    const shortContent = document.querySelector('.short-content3');
    const fullContent = document.querySelector('.full-content3');
    const toggleButton3 = document.getElementById('toggleButton3');

    function updateContentVisibility() {
        if (window.innerWidth <= 768) {
            if (fullContent.style.display === 'block') {
                shortContent.style.display = 'none';
            } else {
                shortContent.style.display = 'block';
            }
            toggleButton3.style.display = 'block';
        } else {
            fullContent.style.display = 'block';
            shortContent.style.display = 'none';
            toggleButton3.style.display = 'none';
        }
    }

    toggleButton3.addEventListener('click', function () {
        if (fullContent.style.display === 'none' || fullContent.style.display === '') {
            fullContent.style.display = 'block';
            shortContent.style.display = 'none';
            toggleButton3.textContent = 'Read less';
        } else {
            fullContent.style.display = 'none';
            shortContent.style.display = 'block';
            toggleButton3.textContent = 'Read more';
        }
    });

    window.addEventListener('resize', updateContentVisibility);
    updateContentVisibility();
});