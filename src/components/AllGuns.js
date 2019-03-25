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

    deleteGun = id => {
        axios.delete(`/api/guns/${id}`).then( res => {
            this.setState({
                guns: res.data
            })
        }).catch(err => {
            console.log('delete error ocurred', err)
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
                <div className='for-sale'>
                <h1 className='g-f-s'>Sale a Gun:</h1>
                </div>
                <SaleGun 
                guns={this.state.guns}
                handleAddGun={this.handleAddGun}
                updateGun={this.updateGun}
                deleteGun={this.deleteGun}/>
            </div>
        )
    }
}
export default AllGuns