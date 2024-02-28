import React from 'react'
import ReactDOM from 'react-dom/client'
import { AlertProvider } from './context/alert/AlertContext'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	<AlertProvider>
		<App />
	</AlertProvider>
	</React.StrictMode>
)