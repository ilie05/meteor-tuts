import React from 'react'
import { AutoForm, AutoField } from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import { Redirect } from 'react-router-dom'
import route from '/imports/routing/router.js';

export default class Login extends React.Component{
    constructor (props){
        super(props);
    }



    submit = (data) => {
        Meteor.loginWithPassword(data.email, data.password, function(error){
            if(!error){ 
                route.go('/');
            }else{
                console.log("Erore de logare: "+error);
            }
        });
    } 

    render(){
        return (
            <div className='authentication'>
                <AutoForm onSubmit={this.submit} schema={schema}>
                    <AutoField name="email" />
                    <AutoField name="password" />
                    <button type="submit"> Login </button>
                </AutoForm>
            </div>
        )
    }
}

const schema = new SimpleSchema({
    email: String,
    password: String
});

