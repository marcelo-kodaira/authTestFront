import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './hooks/useAuth'
import routes from './routes'
import { TooltipProvider } from '@radix-ui/react-tooltip'

function App() {

  return (
    <AuthProvider>
      <TooltipProvider>
        <RouterProvider router={routes} />
      </TooltipProvider>
    </AuthProvider>
  )
}

export default App
