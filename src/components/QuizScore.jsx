import React, { Component } from 'react'

export default class QuizScore extends Component {
    render() {
        return (
            <div className="col-md-7 mx-auto mt-3 text-center">
                <div className="card">
                    <div className="card-header">Finished</div>
                    <div className="card-body">
                        <i className="text-muted">Correct Answer : {this.props.correct_answer}</i>
                        <h3>Your Scores : {this.props.scores}</h3>
                        <button className="btn btn-sm btn-outline-primary" onClick={this.props.try_again}>Try Again</button>
                    </div>
                </div>
            </div>
        )
    }
}
