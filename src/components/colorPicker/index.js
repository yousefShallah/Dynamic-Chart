import React, { Component } from 'react';
import InputColor from 'react-input-color';

class ColorPickerComp extends Component  {
    changeHandler = (colors) => {
        console.log(colors);
    }
   
    render(){
        console.log("test");
        return (
            <div>
                {/* <InputColor
                    initialValue="#5e72e4"
                    onChange={this.changeHandler}
                    placement="right"
                /> */}
                test
            </div>
        );
    }
}

export default ColorPickerComp;
