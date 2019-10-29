import React from 'react'

// const MongoClient = require('mongodb').MongoClient;
// const dburl = 'mongodb://localhost:27017';


interface Props {
}

interface State {
  userName: string,
  password: string
}
export default class Login extends React.Component<Props, State> {
  constructor(props: Props)
  {
      super(props);
      this.state = {
        userName : "",
        password: ""
      }
  }

  handleChangeUserName(event: any) {
    this.setState({userName: event.target.value})
  }

  handleChangePassword(event: any) {
    this.setState({password: event.target.value})
  }

  submit() {
    console.log(this.state.userName + "  " + this.state.password)
  }

  render() {
    return (
      <div>
        <h3> Username </h3>
          <input type="text" name="username" value={this.state.userName} onChange={this.handleChangeUserName.bind(this)}/>
        <h3> Password </h3>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)}/>
        <button onClick={ () => {this.submit()}}>
          login
        </button>

      </div>
    )
  }
}