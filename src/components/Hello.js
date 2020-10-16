import React, { Component } from 'react';

export class Hello extends Component {
    render() {
        return React.createElement(`h1`,{id:'hello', className:'dummy'} ,"Hello Anusha!");
    }
}
export default Hello;