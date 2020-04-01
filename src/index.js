import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import Search from './Search'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'

const routing = (
    <BrowserRouter>
        <div className="app">
            <Route exact path="/" component={BooksApp} />
            <Route exact path="/search" component={Search} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'))
