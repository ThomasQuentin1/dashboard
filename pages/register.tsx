import React from 'react'

interface Props
{
}

interface State 
{
    mail: string,
    password: string,
    confirmPassword: string
}

export default class Register extends React.Component<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            mail: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChangeMail(event: any) {
        this.setState({mail: event.target.value})
    }
    
    handleChangePassword(event: any) {
        this.setState({password: event.target.value})
    }
    
    handleChangeConfirmPassword(event: any) {
        this.setState({confirmPassword: event.target.value})
    }

    submit() {
        if (this.state.password != this.state.confirmPassword) {
            alert("Les mots de passe ne sont pas identiques");
        }
        console.log(this.state.mail + " " + this.state.password + " " + this.state.confirmPassword);
    }
    
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form method="POST">
                    <label>Email</label>
                    <input type="text" name="mail" id="mail" value={this.state.mail} onChange={this.handleChangeMail.bind(this)}></input><br/>
                    <label>Password</label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)}></input><br/>
                    <label>Confirm password</label>
                    <input type="password" name="password2" id="password2"  value={this.state.confirmPassword} onChange={this.handleChangeConfirmPassword.bind(this)}></input><br/>
                    <input type="submit" value="Register" onClick={ () => this.submit()}/>
                </form>
            </div>
        )
    }
}