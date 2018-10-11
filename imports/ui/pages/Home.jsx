import React from 'react';
import Donuts from '/db/donuts/collection.js'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {loading: true, donuts: []}
    }

    componentDidMount(){
        Meteor.call('donut.list', (err, res) => {
            this.setState({
                loading: false,
                donuts: res // assuming the method returns an array of donuts
            })
        })
    }

    render() {
        if (this.state.loading) {
            return <div>Waiting for the method</div>
        }
        
        return (
            <div>
                {
                    this.state.donuts.map(donut => {
                        return <div key={donut._id}>{donut._id}</div>
                    })
                }
            </div>
        )
    }
}