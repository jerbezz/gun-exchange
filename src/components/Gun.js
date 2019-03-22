import React, {Component} from 'react'

class Gun extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: props.gun.id,
            make: props.gun.make,
            model: props.gun.model,
            round: props.gun.round,
            price: props.gun.price,
            phone: props.gun.phone,
            image: props.gun.image,
            edit: false
        }
    }

    handleChange = e => {
        let { name, value } = e.target
    
        this.setState({
          [name]: value
        })
      }
    
      handleEditClick = () => {
        this.setState({
          edit: true
        })
      }

      handleUpdateClick = () => {
          this.props.updateGun(this.state)
          this.setState({
              edit: false
          })
      }


    render(){
        return this.state.edit ? (
            <div className='each-gun'>
              <div className='the-pic'>
                  <img src={this.props.gun.image} alt='' width='200'/>
              </div>
              <div>
                  <input name='make' value={this.state.make} onChange={this.handleChange}/>
                  <input name='model' value={this.state.model} onChange={this.handleChange}/>
                  <input name='round' value={this.state.round} onChange={this.handleChange}/>
                  <input name='price' value={this.state.price} onChange={this.handleChange}/>
                  <input name='phone' value={this.state.phone} onChange={this.handleChange}/>
                  <button onClick={this.handleEditClick}>Edit Gun</button>
              </div>
            </div>

) : (
              
              <div className='each-gun'>
                <div className='the-pic'>
                  <img src={this.props.gun.image} alt='' width='200'/>
                </div>
                <div >
                  <p><strong>Make:</strong> {this.props.gun.make}</p>
                  <p><strong>Model:</strong> {this.props.gun.model}</p>
                  <p><strong>Round:</strong> {this.props.gun.round}</p>
                  <p><strong>Price:</strong> $ {this.props.gun.price}</p>
                  <p><strong>Phone:</strong> {this.props.gun.phone}</p>
                  <button onClick={this.handleUpdateClick}>Edit Gun</button>
                </div>
            </div>
        )
    }
}
export default Gun
