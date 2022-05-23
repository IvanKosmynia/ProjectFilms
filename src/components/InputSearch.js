import React, {Component} from "react";
import styles from './InputSearch.module.css';



export default class  InputSearch extends Component{
    state = {
        inputText: ''
    }; 

    handleChangeInputText = e => {
        console.log(e);
        this.setState({
            inputText: e.target.value
        })
    };
    
    render() {
        return( 
            <div className={styles.input}> 
                <input type='text' className={styles.input_field} value={this.state.inputText} onChange ={this.handleChangeInputText} />
                <button type="button" className={styles.input_button}> </button>
            </div>)
    }  
}


