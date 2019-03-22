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
        this.setState({
            make: '',
            model: '',
            round: '',
            price: '',
            phone: '',
            image: ''
        })
    }

    render(){
        console.log(11111, this.state.guns)
        return (
            <div>
            <div className='sale-a-gun'>
                <div className='top-row'>
                    <input value={this.state.make} name='make' placeholder='Make' onChange={this.handleChange}></input>
                    <input value={this.state.model} name='model' placeholder='Model' onChange={this.handleChange}></input>
                    <input value={this.state.round} name='round' placeholder='Round' onChange={this.handleChange}></input>
                </div>
                <div className='bottom-row'>
                    <input autoComplete='off' value={this.state.price} name='price' placeholder='Price' onChange={this.handleChange}></input>
                    <input autoComplete='off' value={this.state.phone} name='phone' placeholder='Phone' onChange={this.handleChange}></input>
                    <input autoComplete='off' value={this.state.image} name='image' placeholder='Image' onChange={this.handleChange}></input>
                </div>
                <div className='div-post-button'>
                <button className='post-button' onClick={this.handleClick}>Post Gun</button>
                </div>
                </div>
                <div className='for-sale'>
                <h1>Guns for Sale:</h1>
                </div>
                {this.props.guns.map(item => {
                    return <Gun 
                    key={item.id} gun={item} 
                    updateGun={this.props.updateGun}
                    deleteGun={this.props.deleteGun}
                     />
                })}
                
            
            </div>
        )
    }
}
export default SaleGun