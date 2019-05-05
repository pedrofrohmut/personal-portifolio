// Select from the DOM
const $menuBtn = document.querySelector(".menu-btn")
const $menu = document.querySelector(".menu")
const $menuNav = document.querySelector(".menu-nav")
const $menuBranding = document.querySelector(".menu-branding")
const $navItems = document.querySelectorAll(".nav-item")

// Set initial state of the menu
let isMenuShowing = false

// Util
const removeAndAddClass = (element, classToRemove, classToAdd) => {
  element.classList.remove(classToRemove)
  element.classList.add(classToAdd)
}

// Event Functions
const toggleMenuEvent = (e) => {
  if (!isMenuShowing) {
    removeAndAddClass($menuBtn, "show", "close")
    removeAndAddClass($menu, "close", "show")
    removeAndAddClass($menuNav, "close", "show")
    removeAndAddClass($menuBranding, "close", "show")
    $navItems.forEach(item => removeAndAddClass(item, "close", "show"))
    
    isMenuShowing = true
  } else {
    removeAndAddClass($menuBtn, "close", "show")
    removeAndAddClass($menu, "show", "close")
    removeAndAddClass($menuNav, "show", "close")
    removeAndAddClass($menuBranding, "show", "close")
    $navItems.forEach(item => removeAndAddClass(item, "show", "close"))

    isMenuShowing = false
  }
}

$menuBtn
  .addEventListener("click", toggleMenuEvent)