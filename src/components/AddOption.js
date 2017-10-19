import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined 
    };
    handleAddOption = (e) => {
        e.preventDefault();
       console.log('testiiins');
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
               
        this.setState(() => ({ error }));
        if (option){
           e.target.elements.option.value = "";
        }
        if(!error) {
            e.target.elements.option.value = '';
        }
   };
   
   render() {
    return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
           <form onSubmit={this.handleAddOption}>
               <input type="text" name="option"/>
               <button>add an option!</button>
           </form>
        </div>
    )
   }
}