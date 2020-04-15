import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserDetails from './components/UserDetails';
import { users } from './components/Pictures';


class App extends Component {
  state= {
    fetching: true,
    serverData: [],
    users: users,
    search: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({
      serverData: [...this.state.serverData, ...data]
    }))
  }

  onUserSearch = (e) => {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  render(){
    const searchName = this.state.serverData.filter((user) => {
      return user.name.toLowerCase().includes(this.state.search)
    
    })

    return (
      
          <div className='ui container ' style={{marginTop: '20px'}}>
              <SearchBar onSearch={this.onUserSearch} />
              <UserDetails  data={searchName} users={this.state.users}/>
            </div>
      
    );
  }
  
}

export default App;
