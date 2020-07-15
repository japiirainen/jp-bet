import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryDevtools } from 'react-query-devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './index.css'
import App from './components/App/App'

ReactDOM.render(
    <RecoilRoot>
        <Router>
            <App />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </RecoilRoot>,
    document.getElementById('root')
)
