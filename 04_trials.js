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
            question: 'How clear are the instructions you just read?',
            optionLeft: "Not at all clear",
            optionRight: "Extremely clear"
        }
	],
	ratingScale_ins_pos: [
        {
            question: 'Do think that this article provides enough information to understand what a cryptocurrency is, how it is created, and by which means it is exchanged?',
            optionLeft: "Not at all useful",
            optionRight: "Extremely useful"
        }
	],
	ratingScale_ins_neg: [
        {
            question: 'Do think that this article provides enough information to understand what a cryptocurrency is, how it is created, and by which means it is exchanged?',
            optionLeft: "Not at all useful",
            optionRight: "Extremely useful"
        }
	],
	ratingScale_neg: [
        {
            question: 'How positive or negative do you find the news you just read?',
            optionLeft: "Completely negative",
            optionRight: "Completely positive"
        }
    ],
	ratingScale_pos: [
        {
            question: 'How positive or negative do you find the information you just read?',
            optionLeft: "Completely negative",
            optionRight: "Completely positive"
        }
    ],
	ratingScale_usefulness: [
        {
            question: 'If you were to evaluate your own knowledge on how the cryptocurrency trading system works, how useful would be the instructions you read in the first part of this survey?',
            optionLeft: "Not at all useful",
            optionRight: "Extremely useful"
        }
    ]
};
