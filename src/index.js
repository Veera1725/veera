import React from 'react'
import { render } from 'react-dom'
import './stylesheet/ui.scss'
import './stylesheet/index.scss'
//import {SkiDayCount} from './components/SkiDayCount-ES6'
//import {SkiDayCount} from './components/SkiDayCount'
import { App } from './components/App-ES6'
//import { SkiDayList } from './components/SkiDayList'
import { Whoops404 } from './components/Whoops404'
import {Router, Route, hashHistory, Link} from 'react-router'


window.React = React

render(
	<Router history ={hashHistory}>

		<Route path="/" component={App} />
		<Route path="list-days" component={App}> 
			<Route path=":filter" component ={App} />
		</Route>
		<Route path ="add-day" component={App} />
		<Route path="*" component={Whoops404}/>


	</Router>,
	document.getElementById('react-container')
)