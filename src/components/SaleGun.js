import React, {Component} from 'react'
import Gun from './Gun';
import Rifle from './Rifle'
import Shotgun from './Shotgun'
import Handgun from './Handgun'
import OtherGun from './OtherGun'



class SaleGun extends Component{
    constructor(){
        super()
        this.state = {
            make: '',
            model: '',
            round: '',
            price: '',
            phone: '',
            image: '',
            category: ''
            
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
            image: '',
            category: ''
        })
    }

   

    render(){
        let rifleArray = this.props.guns.filter(item => {
            return item.category === 'rifle'
        })
        let shotgunArray = this.props.guns.filter(item => {
            return item.category === 'shotgun'
        })
        let handgunArray = this.props.guns.filter(item => {
            return item.category === 'handgun'
        })
        let otherGunArray = this.props.guns.filter(item => {
            return item.category !== 'rifle'
            && item.category !== 'shotgun'
            && item.category !== 'handgun'
        })

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
                <div className='category-row'>
                    <input autoComplete='off' value={this.state.category} name='category' placeholder='Category' onChange={this.handleChange}></input>
                </div>
                <div className='div-post-button'>
                <button className='post-button' onClick={this.handleClick}>Post Gun</button>
                </div>
                </div>
                <div className='for-sale'>
                <h1 className='g-f-s'>Guns for Sale:</h1>
                </div>
                <div>
                    <h1>Rifle(s) ({rifleArray.length})</h1>
                    {rifleArray.map(item => {
                        return <Rifle
                        key={item.id} gun={item}
                        updateGun={this.props.updateGun}
                        deleteGun={this.props.deleteGun}/>
                    })}
                </div>
                <div>
                <h1>Shotguns(s) ({shotgunArray.length})</h1>
                    {shotgunArray.map(item => {
                        return <Shotgun
                        key={item.id} gun={item}
                        updateGun={this.props.updateGun}
                        deleteGun={this.props.deleteGun}/>
                    })}
                </div>
                <div>
                <h1>Handguns(s) ({handgunArray.length})</h1>
                    {handgunArray.map(item => {
                        return <Handgun
                        key={item.id} gun={item}
                        updateGun={this.props.updateGun}
                        deleteGun={this.props.deleteGun}/>
                    })}
                </div>
                <div>
                <h1>Other(s) ({otherGunArray.length})</h1>
                    {otherGunArray.map(item => {
                        return <OtherGun
                        key={item.id} gun={item}
                        updateGun={this.props.updateGun}
                        deleteGun={this.props.deleteGun}/>
                    })}
                </div>



            </div>

        )
    }
}
export default SaleGun




// {this.props.guns.map(item => {
//     return <Gun 
//     key={item.id} gun={item} 
//     updateGun={this.props.updateGun}
//     deleteGun={this.props.deleteGun}
//      />
// })}