import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import './index.css'
import App from './components/App/App'

ReactDOM.render(
    <RecoilRoot>
        <Router>
            <App />
        </Router>
    </RecoilRoot>,
    document.getElementById('root')
)
