import React, {Component} from 'react'
import Gun from './Gun';



class SaleGun extends Component{
    constructor(){
        super()
        this.state = {
            make: '',
            model: '',
            round: '',
            price: '',
            phone: '',
            image: ''
        }
    }

    handleChange = e => {
       let { name, value } = e.target
       this.setState({
           [name]: value
       })
    }

    handleClick = () => {
        let gun = this.state
        this.props.handleAddGun(gun)
    }

    render(){
        return (
            <div>
                <div>
                    <input name='make' placeholder='make' onChange={this.handleChange}></input>
                    <input name='model' placeholder='model' onChange={this.handleChange}></input>
                    <input name='round' placeholder='round' onChange={this.handleChange}></input>
                    <input name='price' placeholder='price' onChange={this.handleChange}></input>
                    <input name='phone' placeholder='phone' onChange={this.handleChange}></input>
                    <input name='image' placeholder='image' onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>Post Gun</button>
                </div>
                <h1>Guns for Sale:</h1>
                {this.props.guns.map(item => {
                    return <Gun 
                    key={item.id} gun={item} 
                    updateGun={this.props.updateGun}
                     />
                })}
                
            
            </div>
        )
    }
}
export default SaleGun