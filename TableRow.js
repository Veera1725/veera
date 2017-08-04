import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'reactable';
import details from './Details.json'

class TableRow extends React.Component{
   
    render(){
        return(
            
             <Table className="table" data={details} 
            itemsPerPage={8} 
            pageButtonLimit={8} 
            previousPageLabel='Previous' 
            nextPageLabel='Next'
            sortable={[
                      'Name',
                      'Age'
                     ]} 
            defaultSort={{column: 'Name', direction: 'desc'}}
            filterable={['Name','Position']} />
        );
    }
}

ReactDOM.render(<TableRow/>,document.getElementById('app'));