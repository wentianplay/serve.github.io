// 移动端菜单切换
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// 初始化函数
function init() {
    // 绑定移动端菜单点击事件
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
}

// 当DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', init);