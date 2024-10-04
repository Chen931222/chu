// 獲取 hamburger menu 和 off-screen menu
const menuButton = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const hamMenu = document.querySelector('.ham-menu');

// 為 hamburger menu 添加點擊事件
menuButton.addEventListener('click', () => {
    // 切換 off-screen menu 的 active 類
    offScreenMenu.classList.toggle('active');
    hamMenu.classList.toggle('active'); // 同時切換漢堡菜單的效果
});
