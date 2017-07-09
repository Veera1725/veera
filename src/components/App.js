import {createClass} from 'react'
import {SkiDayList} from './SkiDayList'
import {SkiDayCount} from './SkiDayCount'
import {AddDayForm} from './AddDayForm'


export const App = createClass({

getInitialState(){
	return {

		allSkiDays:	[
			{
			resort : "abc",
			date : new Date("1/2/2017"),
			powder : true,
			backcountry : false

			},
			{
			resort : "cdf",
			date : new Date("2/2/2017"),
			powder : false,
			backcountry : false

			},
			{
			resort : "efg",
			date : new Date("9/3/2017"),
			powder : false,
			backcountry : true

			}

			]
	}
},
countDays(filter){
	const {allSkiDays}= this.state
	return allSkiDays.filter(
		(day)=>(filter) ? day[filter] :day ).length
},
	render(){

		return(
			<div className="app">
				<menu />
			{	
				(this.props.location.pathname === "/") ? 
				<SkiDayCount total={this.countDays()}
							powder={this.countDays(
								"powder")}
							backcountry={this.countDays(
								"backcountry")}/> :
				(this.props.location.pathname ==="/add-day") ? 
				<AddDayForm /> : <SkiDayList days={this.state.allSkiDays}/>

			}			
				
			</div>
			)

	}

})