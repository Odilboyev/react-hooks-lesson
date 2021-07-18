import { Button } from 'reactstrap'
import React, { Component } from 'react'

export default class Timer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            minutes: 25,
            seconds: 0,
        }

    }



    updateStep = () => {
        if (this.state.seconds == 0) {
            this.setState({ minutes: this.state.minutes-- })
        }

        this.setState({ seconds: 59 })
        this.setState({ seconds: this.state.seconds-- })

    }
    // componentDidMount() {
    //     this.timer = setInterval(this.updateStep, 1000);
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate ishhladii')
    // }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-10 col-lg-8 py-5">
                        <div className="rounded bg-white shadow text-center p-3 py-3 my-5">
                            <h1>ReactoDoro</h1>

                            <h1 className="display-1 my-4">
                                {this.state.minutes} : {this.state.seconds}
                            </h1>

                            <Button color="danger" onClick={() => this.timer = setInterval(this.updateStep, 1000)} className="px-3">Start</Button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
