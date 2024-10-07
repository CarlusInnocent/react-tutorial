import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Posts } from './components/Post/Posts'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Posts />
  </StrictMode>
)

