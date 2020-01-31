import React, { Component } from 'react'
export default class QuizDataList extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
                <div className="col-md-10 mx-auto">
                   <div className="row">
                       <div className="col-md-12">
                           <h3>Quiz #3</h3>
                           <div className="card">
                               <div className="card-header">
                                    <b>{this.props.question}</b>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-12">
                           <div className="card">
                               <div className="card-body">
                                  {this.props.answers.map(data => (
                                      <label htmlFor={`answer${data.id}`} key={data.id}>
                                          <input type="radio" name="answer" onClick={this.props.next_quiz} value={data.correct} id={`answer${data.id}`} className="ml-2"/> { data.name }
                                      </label>
                                  ))}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
        )
    }
}
