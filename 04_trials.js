// In this file you can specify the trial data for your experiment

const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ]
};

const trial_info_2 = {
    ratingScale_ins: [
        {
            question: 'If you were to evaluate your knowledge on a 7-point scale about how certain facts work, how useful would you find the instructions you just read?',
            optionLeft: "Completely useful",
            optionRight: "Completely unhelpful"
        }
	],
	ratingScale_ins_rep: [
        {
            question: 'How clear and understandable do you find the instructions you just read?',
            optionLeft: "Extremely positive",
            optionRight: "Extremely negative"
        }
	],
	ratingScale_neg: [
        {
            question: 'How positive or negative do you find the information you just read?',
            optionLeft: "Extremely positive",
            optionRight: "Extremely negative"
        }
    ],
	ratingScale_pos: [
        {
            question: 'How positive or negative do you find the information you just read?',
            optionLeft: "Extremely positive",
            optionRight: "Extremely negative"
        }
    ]
};
