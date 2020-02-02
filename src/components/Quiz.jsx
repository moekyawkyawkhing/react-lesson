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
                },
                {
                    'id': 3,
                    'name': '50+2',
                    'answers': [
                        {
                            'id': 1,
                            'name': '62',
                            'correct': false
                        },
                        {
                            'id': 2,
                            'name': '42',
                            'correct': false
                        },
                        {
                            'id': 3,
                            'name': '32',
                            'correct': false
                        },
                        {
                            'id': 4,
                            'name': '12',
                            'correct': false
                        },
                        {
                            'id': 5,
                            'name': '52',
                            'correct': true
                        }
                    ],
                    'complete': false
                },
                {
                    'id': 4,
                    'name': '111+1',
                    'answers': [
                        {
                            'id': 1,
                            'name': '1111',
                            'correct': false
                        },
                        {
                            'id': 2,
                            'name': '111',
                            'correct': false
                        },
                        {
                            'id': 3,
                            'name': '112',
                            'correct': true
                        },
                        {
                            'id': 4,
                            'name': '110',
                            'correct': false
                        },
                        {
                            'id': 5,
                            'name': '101',
                            'correct': false
                        }
                    ],
                    'complete': false
                },
                {
                    'id': 5,
                    'name': '66+88',
                    'answers': [
                        {
                            'id': 1,
                            'name': '154',
                            'correct': true
                        },
                        {
                            'id': 2,
                            'name': '153',
                            'correct': false
                        },
                        {
                            'id': 3,
                            'name': '25',
                            'correct': false
                        },
                        {
                            'id': 4,
                            'name': '157',
                            'correct': false
                        },
                        {
                            'id': 5,
                            'name': '150',
                            'correct': false
                        }
                    ],
                    'complete': false
                },
            ],
            finish: false,
            scores: 0,
            timer: 30,
            pos: 0,
            i: 0,
            correct_answer: 0,
            seconds: 1000
        }
    }

    nextQuiz = (id) => {
            let timer  = setInterval(() => { // set timer 
                this.setState((state) => ({ // old state // state of first arg is old state, state of second arg is new sate , new state should be function
                    // not function call
                    timer: state.timer - 1
                }), () => { // new date
                    if(this.state.timer == 0){
                        alert('Full Time!');
                        this.setState((state)=>({
                            finish : true
                        }))
                    }
                });

        }, this.state.seconds);

        // clearInterval(timer)

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
            return data['id'] == id
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

    tryAgain= () => {
        this.setState((state)=>({
            finish: false,
            scores: 0,
            pos: 0,
            i: 0,
            timer : 30,
            correct_answer: 0,
            seconds : 1000
        }))
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-7 mx-auto">
                   { !this.state.finish &&
                       ( <p className="text-right"><i>Time Allow : {this.state.timer} seconds ( {this.state.quizs.length} Quizs )</i> <br /> </p>)
                   }
                </div>
                {
                    this.state.i >= this.state.quizs.length || this.state.finish ?
                        (<QuizScore try_again={this.tryAgain} scores={this.state.scores} correct_answer={this.state.correct_answer} />)
                        :
                        (<QuizDataList last_question={this.state.pos+1 == this.state.quizs.length} next_quiz={this.nextQuiz} answers={this.state.quizs[this.state.pos].answers} question={this.state.quizs[this.state.pos].name} id={this.state.quizs[this.state.pos].id} checked={this.state.checked} className="my-5" />)
                }

            </div>
        )
    }
}
