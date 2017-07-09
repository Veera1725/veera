import React from 'react'
import { render } from 'react-dom'
import Routes from './Routes'

window.React = React

render(Routes, document.getElementById('react-container'))
