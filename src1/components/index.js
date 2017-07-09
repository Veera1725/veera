import {Mainmenu} from './ui/Mainmenu'

export const Left = ({children}) =>
	<div className = "page">
		<Mainmenu className="main-menu"/>
		{children}
	</div>

export const Right = ({children}) =>
	<div className = "page">
		{children}
		<Mainmenu className="main-menu"/>
		
	</div>

export const Whoops404 = ({location}) => 
	<div> 
		<h1> Ooops !!! Resource not found . </h1>
		<p>counld not find {location.pathname} </p>
	</div>

