import {PropTypes, Component} from 'react'


const tahoeResorts = [

	"abc",
	"xyz",
	"gold",
	"platinum"

] 

class Autocomplete extends Component{

	get value(){
		return this.refs.inputResort.value
	}

	set value(inputValue){
		return this.refs.inputResort.value = inputValue
	}

	render(){
		return(
			<div>
				<input ref = "inputResort" 
						type = "text" 
						list = "tahoe-resorts" />

				<datalist id = "tahoe-resorts">
				 	{this.props.options.map(
				 		(opt, i) => <option key={i}> {opt} </option> )}
				</datalist>
			</div>
			)
	}

}

export const AddDayForm = ({resort, date, powder, backcountry, onNewDay}) => {


	let _resort, _date , _powder, _backcountry 
	const submit = (event) => {
		event.preventDefault()

		onNewDay({
			resort : _resort.value,
			date : _date.value,
			powder : _powder.checked,
			backcountry : _backcountry.checked
		})
		_resort.value = ''
		_date.value = ''
		_powder.checked = false
		_backcountry.checked = false
		
	}


return(
	<form  onSubmit = {submit} className = "add-day" >
		<label htmlFor ="resort" > Resort Name </label>
 			<Autocomplete options = {tahoeResorts}
 					ref ={ input => _resort = input} />

 		<label htmlFor ="date" > Date </label>
 			<input id ="date" type ="date" required
 					defaultValue = {date}
 					ref ={ input => _date = input} />

 		<div>
 			<input id ="powder" type ="checkbox" 
 					defaultChecked = {powder}
 					ref ={ input => _powder = input} />
 			<label htmlFor ="powder" > Powder Day </label>
 		</div>

 		<div>
 			<input id ="backcountry" type ="checkbox" 
 					defaultChecked = {backcountry}
 					ref ={ input => _backcountry = input}/>
 			<label htmlFor ="backcountry" > Backcountry Day</label>
 		</div>
 		<button> Add Day </button>
 	</form>
 	)



}
	
AddDayForm.defaultProps ={
	resort : "Golden Resort",
	date : "2017-04-12",
	powder : true,
	backcountry : false
}


AddDayForm.PropTypes ={
	resort : PropTypes.string.isRequired,
	date : PropTypes.string.isRequired,
	powder : PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired

}