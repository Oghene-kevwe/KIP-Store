import { getElement } from "./utils.js";

const sidebarBtn = getElement('.sidebar-toggle')
const closeSideBar = getElement('.sidebar-close')
const sidebarOverlay = getElement('.sidebar-overlay')

sidebarBtn.addEventListener("click",()=>{
    sidebarOverlay.classList.add('show')
})

closeSideBar.addEventListener("click",()=>{
    sidebarOverlay.classList.remove('show')
})









