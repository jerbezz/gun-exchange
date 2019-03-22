import React, {Component} from 'react'
import axios from 'axios'
import SaleGun from './SaleGun'

class AllGuns extends Component{
    constructor(){
        super()
        this.state ={
            guns: []
        }
    }

    updateGun = gun => {
        axios.put(`/api/guns/${gun.id}`, gun).then(res => {
            this.setState({
                guns: res.data
            })
        }).catch(err => console.log(err))
    }
    
    handleAddGun = gun => {
        axios.post('/api/guns', gun).then( res =>{
            this.setState({
                guns: res.data
            })
        }).catch(err => {
            console.log('adding error ocurred', err)
        })
    }

    componentDidMount(){
    axios.get('/api/guns').then(res => {
        this.setState({
        guns: res.data
        })
    })
    .catch(err => console.log('there was an error', err))
    }

    render(){
        console.log(this.state.guns)
        return(
            <div>
                <h1>Sale a gun:</h1>
                <SaleGun 
                guns={this.state.guns}
                handleAddGun={this.handleAddGun}
                updateGun={this.updateGun}/>
            </div>
        )
    }
}
export default AllGuns