import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const routing = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'))
