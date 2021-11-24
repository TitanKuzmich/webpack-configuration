import React from 'react'
import {render} from 'react-dom'

// import * as $ from 'jquery'
import Post from '@models/Post'
import './babel'

import json from './assets/json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo'

import './styles/style.css'
import './styles/styles_with_sass.scss'

const post = new Post("Webpack Post Test", WebpackLogo, xml)

// $('pre').html(post.toString())

console.log('Post to string', post.toString())

const App = () => {
    return (
        <div className="container">
            <h1>Webpack configuration</h1>
            <hr/>
            <div className="logo"/>
            <hr/>
            <pre className="code"/>
            <hr/>
            <div className="box">
                <h2>Scss styles</h2>
            </div>
        </div>
    )
}

render(
    <App/>
    , document.getElementById('app'))

// console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV: ', csv)