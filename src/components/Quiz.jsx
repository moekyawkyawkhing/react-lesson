import React, { Component } from 'react'
import QuizDataList from './QuizDataList'
import QuizScore from './QuizScore'

export default class Quiz extends Component {
    constructor(props){
        super(props)
        this.state= {
            'quizs' : [
                {
                    'id' : 1,
                    'name' : '23+2',
                    'answers' : [
                        {
                            'id' : 1,
                            'name' : '28',
                            'correct' : false
                        },
                        {
                            'id' : 2,
                            'name' : '40',
                            'correct' : false
                        },
                        {
                            'id' : 3,
                            'name' : '25',
                            'correct' : true
                        },
                        {
                            'id' : 4,
                            'name' : '50',
                            'correct' : false
                        },
                        {
                            'id' : 5,
                            'name' : '19',
                            'correct' : false
                        }
                    ],
                    'complete' : false
                },
                {
                    'id' : 1,
                    'name' : '100+45',
                    'answers' : [
                        {
                            'id' : 1,
                            'name' : '145',
                            'correct' : true
                        },
                        {
                            'id' : 2,
                            'name' : '300',
                            'correct' : false
                        },
                        {
                            'id' : 3,
                            'name' : '146',
                            'correct' : false
                        },
                        {
                            'id' : 4,
                            'name' : '150',
                            'correct' : false
                        },
                        {
                            'id' : 5,
                            'name' : '170',
                            'correct' : false
                        }
                    ],
                    'complete' : false
                }
            ],
            scores : 0,
            timer : 25,
            pos : 0
        }
    }

    nextQuiz= () => {
        if(this.state.pos < this.state.quizs.length-1){
            this.setState((state)=>({
                pos : state.pos+1
                }
            ));
        }
        console.log(this.sta)
    }
    
    render() {
        return (
           <div className="row mt-5">
                <div className="col-md-10 mx-auto">
                    <i>Time Allow : 25 seconds ( 5 Quizs )</i>
                </div>

                <QuizDataList next_quiz={this.nextQuiz} answers={this.state.quizs[this.state.pos].answers} question={this.state.quizs[this.state.pos].name} className="my-5"/>
               
           </div>
        )
    }
}
