const accItem = document.getElementsByClassName('accordion-item');
const accHD = document.getElementsByClassName('accordion-question');


const tabs = document.querySelectorAll('.feat-tab');
const contentImage = document.querySelector('.feat-content-left img');
const contentTitle = document.querySelector('.feat-content-right h2');
const contentText = document.querySelector('.feat-content-right p');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Add 'active' class to the clicked tab
    tab.classList.add('active');

    // Update the image, title, and text content based on the clicked tab's data attributes
    contentImage.src = tab.getAttribute('data-image');
    contentTitle.textContent = tab.getAttribute('data-title');
    contentText.textContent = tab.getAttribute('data-text');
  });
});


for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
      accItem[i].className = 'accordion-item close';
  }
  if (itemClass == 'accordion-item close') {
      this.parentNode.className = 'accordion-item open';
  }
}

const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Open sidebar and overlay when burger icon is clicked
burger.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

// Close sidebar and overlay when close button or overlay is clicked
const closeSidebar = () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
};

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);