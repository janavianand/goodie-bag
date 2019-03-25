import React from 'react'
import { AllCandies } from './AllCandies';
import {connect} from 'react-redux'
import { getCandyThunk } from '../reducers';
import {HashRouter,Route,Link} from 'react-router-dom'

class Root extends React.Component{
  componentDidMount(){
    this.props.fetchCandies();
  }
  render()
  {return (
    <HashRouter>
      <div>
        <nav>
          <div>
          Goodie Bag
          </div>
          <div>
          <Link to='/'>Home</Link></div>
          <div><Link to='/candies'>Candies</Link></div>
        </nav>
        <main>
          <Route exact path = '/' render = {()=>{return(<div>
            <h1>Welcome to the Goodie Bag!</h1>
            <p>What a nice home page for your goodies!</p>
          </div>)}}/>
          <Route path='/candies' component = {AllCandies}/>

        </main>
      </div>
    </HashRouter>
  )}
}


const mapDispatchToProps = (dispatch)=>({
  fetchCandies :()=> dispatch(getCandyThunk())
})

export default connect(null,mapDispatchToProps)(Root)
