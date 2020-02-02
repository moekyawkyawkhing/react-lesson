import React, { Component } from 'react'
export default class QuizDataList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'selected': null,
            'id': null
        }
    }

    selectedRadio = (index, id) => {
        this.setState((state) => ({
            selected: index,
            id
        }));
    }

    onClickAction = () => {
        if(this.state.id == null){
            alert("Please choose one answer!");
            return;
        }
        this.props.next_quiz(this.state.id);
        this.setState((state) => ({
            selected: null,
            id: null
        }));
    }

    render() {
        return (
            <div className="col-md-7 mx-auto">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="my-3">Quiz #{this.props.id}</h3>
                        <div className="card">
                            <div className="card-header">
                                <b>{this.props.question}</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card text-center">
                            <div className="card-body">
                                {this.props.checked}
                                {this.props.answers.map((data, index) => (
                                    <label htmlFor={`answer${data.id}`} key={data.id}>
                                        <input type="radio" checked={this.state.selected == index} name="answer" onChange={() => this.selectedRadio(index, data.id)} value={data.id} id={`answer${data.id}`} className="ml-2" /> {data.name}
                                    </label>
                                ))}
                                <button type="button" className="btn btn-sm btn-outline-info float-right" onClick={this.onClickAction}>
                                    {this.props.last_question ? 'View Score' : 'Next'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
