import React, { Component } from 'react'
import QuizDataList from './QuizDataList'
import QuizScore from './QuizScore'

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'quizs': [
                {
                    'id': 1,
                    'name': '23+2',
                    'answers': [
                        {
                            'id': 1,
                            'name': '28',
                            'correct': false
                        },
                        {
                            'id': 2,
                            'name': '40',
                            'correct': false
                        },
                        {
                            'id': 3,
                            'name': '25',
                            'correct': true
                        },
                        {
                            'id': 4,
                            'name': '50',
                            'correct': false
                        },
                        {
                            'id': 5,
                            'name': '19',
                            'correct': false
                        }
                    ],
                    'complete': false
                },
                {
                    'id': 2,
                    'name': '100+45',
                    'answers': [
                        {
                            'id': 1,
                            'name': '145',
                            'correct': true
                        },
                        {
                            'id': 2,
                            'name': '300',
                            'correct': false
                        },
                        {
                            'id': 3,
                            'name': '146',
                            'correct': false
                        },
                        {
                            'id': 4,
                            'name': '150',
                            'correct': false
                        },
                        {
                            'id': 5,
                            'name': '170',
                            'correct': false
                        }
                    ],
                    'complete': false
                }
            ],
            finish: false,
            scores: 0,
            timer: 25,
            pos: 0,
            i: 0,
            correct_answer: 0,
            checked: false
        }
    }

    nextQuiz = (event) => {
        let timer = setInterval(() => { // set timer
            this.setState((state) => ({
                timer: state.timer - 1
            }));

            if(this.state.timer == 0){
                clearInterval(timer);
                this.setState((state)=>({
                    finish : true
                }))
            }

        }, 1000);

        if (this.state.pos < this.state.quizs.length - 1) { // pass to child related index data
            this.setState((state) => ({
                pos: state.pos + 1,
                checked: false
            }
            ));
        }
        this.setState((state) => ({
            i: state.i + 1
        }
        ));
        let ans = this.state.quizs[this.state.pos].answers.find(data => { // answer correct check
            return data['id'] == event.target.value;
        });
        if (ans.correct) {
            this.setState((state) => ({
                scores: state.scores + 10,
                correct_answer: state.correct_answer + 1
            }));
        }

        if(this.state.i >= this.state.quizs.length-1){ // all question finished before timer 0 seconds
            this.setState((state)=>({
                finish : true
            }))
        }
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-10 mx-auto">
                   { !this.state.finish &&
                       ( <><i>Time Allow : {this.state.timer} seconds ( 5 Quizs )</i> <br /> </>)
                   }
                </div>
                {
                    this.state.i >= this.state.quizs.length || this.state.finish ?
                        (<QuizScore scores={this.state.scores} correct_answer={this.state.correct_answer} />)
                        :
                        (<QuizDataList next_quiz={this.nextQuiz} answers={this.state.quizs[this.state.pos].answers} question={this.state.quizs[this.state.pos].name} id={this.state.quizs[this.state.pos].id} checked={this.state.checked} className="my-5" />)
                }

            </div>
        )
    }
}
