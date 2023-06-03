import { createRoot } from 'react-dom/client'
import { App } from './App'
import './style.css'

const dom = document.getElementById('app')
const root = createRoot(dom)
root.render(<App />)
