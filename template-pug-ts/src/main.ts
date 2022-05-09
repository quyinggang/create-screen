import './style/index.styl'
import './config/axios'
import { getScale, debounce } from '@/utils/calculator'

const initRootFontSize = () => {
  const fontSize = getScale() * 100
  document.documentElement.style.fontSize = `${fontSize}px`
}

const registerEvents = () => {
  window.addEventListener('resize', debounce(initRootFontSize, 80))
}
const initPageSkeleton = () => {
  const root = document.getElementById('root')
  if (root) {
    root.innerHTML = ''
  }
}

const initApp = () => {
  initRootFontSize()
  initPageSkeleton()
  registerEvents()
}

initApp()
