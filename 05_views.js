// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `This is a short pilot test part of the experiment I will conduct for my master thesis.
            <br />
            <br />
			If you are willing to collaborate with me, please read carefully the instructions in the next pages and answer the questions.
            <br />
            <br />
			Should you have any doubt or suggestion, please send me and email: <strong>zzuluagar@gmail.com</strong>`,
  buttonText: 'begin'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `First, you will read a set of instructions to use a 7-point rating scale.
            <br />
            <br />
            Please read carefully each part and evaluate in the end how clear and concise were the instructions for you.`,
  buttonText: 'go to scale instructions'
});

const explanation_ins_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_1',
  title: 'General Instructions',
  text: `If you were to evaluate your knowledge of certain topics, you would probably come along with judgments as "" or "I definitely don't know about that". 
            <br />
            <br />
			Judgments as such might conceivable be expressed in discrete scales ranging from vague to full comprehension. 
            <br />
            <br />
			This introduction try to make clear what different scores on a scale of understanding are supposed to reflect, in this case, a 7-point scale where 1 means “vague understanding” and 7 means “complete understanding”. 
            <br />
            <br />
			In the next screens, I will present you with examples of different levels of understanding using the example of how climate change works and how human activity has contributed to it. 
            <br />
            <br />
            Read carefully each step and evaluate how clear and concise you found the instructions.`,
  buttonText: 'next'
});

const explanation_ins_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_2',
  title: 'General Instructions',
  text: `<strong>Level 7 of knowledge:</strong> A person with level 7 of knowledge has a deeply and detailed knowledge of how climate change occurs and what role human activity has had on accelerate it.  
            <br />
            <br />
			For instance, she will know that climate change is a natural process that follows from the Earth’s absorption of sunlight that in turn reflects as infrared light. 
            <br />
            <br />
			She will also know that greenhouses in the atmosphere absorb the infrared light causing it to heat up. As the light is being absorbed the atmosphere produces more infrared light that tends to be reabsorbed and stays longer around before abandon the atmosphere to outer space keeping the Earth warm. 
            <br />
            <br />She also understands that the longer the infrared light stays in the atmosphere, the warmer the atmosphere, water, and ground will get. She would also know that since the industrial age, human activity has helped to broadly increase the greenhouse gases release to the atmosphere slowing down the time infrared light hangs around and therefore contributing to global climate change.`,
  buttonText: 'next'
});


const explanation_ins_3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_3',
  title: 'General Instructions',
  text: `<strong>Level 4 of knowledge:</strong> A person with level 4 of knowledge has a general idea about how climate change occurs and how human activity affects it, although without a deep or detailed understanding. 
            <br />
            <br />
			For instance, she might know that climate change occurs at the atmosphere by means of greenhouse gases that somehow absorb energy keeping the Earth warm. She might also know that the more greenhouse gases are release into the atmosphere, the warmer the Earth will get. 
            <br />
            <br />She knows that human activity boosts this process causing an even higher temperature on Earth, although without understanding of the mechanism behind it.`,
  buttonText: 'next'
});


const explanation_ins_4 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_4',
  title: 'General Instructions',
  text: `<strong>Level 1 of knowledge:</strong> A person with level 1 of knowledge would probably have a very superficial understanding of climate change and the impact of human activity on it. She might only know that human activity causes climate change but the general mechanism or the agents involved in it are unknown to her.`,
  buttonText: 'next'
});


const negative_news = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'negative_news',
  title: 'Bitcoin buster? A Greater Fool’s Gold',
  text: `After a decade since the first cryptocurrency–digital tokens known as cryptos for short– saw the light of day, more than 2,000 different cryptos have brought investors into a fool’s gold fever.
            <br />
            <br />
            Cryptos have investors in the grip of a gold rush fever, with billions being traded every day. This volatility may be a speculative trader's friend, but it has reinforced cryptos' reputation for being high-risk investments for the adrenalin-fuelled "get rich quick" brigade. 
			<br />
            <br />
            Since their launch, prices of most cryptos have fluctuated dramatically, raising concerns among experts and state authorities. So, a growing number of crypto start-ups have been forced to develop alternatives as the so-called stablecoins–digital tokens pegged to traditional fiat currencies such as the US dollar or the British pound–in unsuccessful attempts to stabilize the fluctuation. However, warnings and skeptical views persist. 
			<br />
            <br />
			"Despite their lack of understanding, cryptoasset owners are often looking for ways to 'get rich quick' citing friends, acquaintances and social media influencers as key motivations for buying cryptoassets," said Christopher Woolard, of the Financial Conduct Authority (FCA). "Cryptoassets are complex, volatile products - consumers investing in them should be prepared to lose all of their money," he added.
            <br />
            <br />
			The stability of a currency is vital for the valuation of assets attached to it. For cryptos, assets valuated in these currencies experience dramatic devaluations in briefly periods of time, which can put at risk an already fragile monetary system. That goes without mention the transaction system on which cryptos rely, which currently works at a rate of 13 transactions per second, far behind the 200,000 transactions per second just Visa showed in 2018. 
            <br />
            <br />
			The world of digital currency has also little regulatory oversight and a history of hacking threats, and minimal consumer protection. Last February for instance, the untimely death of Gerald Cotten, head of the biggest Canadian cryptocurrency exchanges – Quadriga CX – shook investors with a loss of C$ 180m ($135m). Since all the transaction information was encrypted in his laptop–which has not yet been cracked–, his decease vanished the investors’ access to their cryptos hosted in the platform. The meltdown of Quadriga CX left thousands of investors with the uncertainty of what will happen with their money. 
            <br />
            <br />There is even less reason to trust software developed by small teams of programmers who hope both to become insanely rich and to circumvent all efforts by governments to control them. So long as ordinary people can expect to make their fortunes overnight, proliferation of cryptos seems unlikely to drop off in the years to come.`,
  buttonText: 'next'
});

const positive_news = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'positive_news',
  title: 'Bitcoin buster? The Future of Global Economy',
  text: `After a decade since the first cryptocurrency–digital tokens known as cryptos for short– saw the light of day, more than 2,000 different cryptos are being traded on about 190 exchange platforms around the world.
            <br />
            <br />
			Cryptos have provided investors with an attractive method of decentralized currencies, with billions being traded every day. And most importantly, they are not affected by volatile politics or global banking crises. 
            <br />
            <br />
			Since their launch, every crypto has seen increased its value, sometimes by a 1000-fold. Fluctuations in price now seem to be a problem of the past thanks to a growing number of crypto start-ups, which are developing alternatives as the so-called stablecoins. These are digital tokens pegged to traditional fiat currencies such as the US dollar, the British pound or the Japanese yen. That is the case of the crypto finance company Circle, which has just launched months age a new token called USD Coin.
            <br />
            <br />
			"Imagine a US dollar coin that you can make payments with, use on crypto networks, or use in smart contracts to pay dividends, but which you can convert back to fiat currency at any time," explains Circle chief executive Jeremy Allaire. "We're going to see a lot of businesses using tokens for revenue raising. And eventually central banks will want to do this," maintains Mr. Allaire. 
            <br />
            <br />
			The stability of a currency is highly praised as it determines investment trust and acquisitive power. Most people in the sector agree that crypto's ability to act as a smart contract presents huge opportunities to "tokenise" physical assets. For cryptos, this has leaded to the tokenization of assets such as automobiles, industries and real state among others. In countries with unstable economies, cryptos have offered an alternative for people to participate in a reliable transaction system and value their assets on currencies readily available and more trustworthy than local ones.
            <br />
            <br />
			"Say I have a house in downtown Saigon worth $1m," says Kory Hoang, founder of Stably. "I could tokenise it and sell those tokens on the global crypto market. You could issue a billion pieces of your house if you wanted. Then people would start trading them, just like shares in a real estate investment trust. It gives investors around the world access to investment opportunities they never had before."
            <br />
            <br />Work is still afoot. In the years to come, the challenges seem to improve already existent exchange platforms that can cope with bigger number of transactions. However, future looks promising for cryptos and their ever-improving update to the global economic system. Let us see what will happen.`,
  buttonText: 'next'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = magpieViews.view_generator("forced_choice", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A',
  data: trial_info.forced_choice,
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale

const rating_scale_ins = magpieViews.view_generator("rating_scale",{
    trials: 1,
    name: 'rating_scale_ins',
    data: trial_info_2.ratingScale_ins
});

const rating_scale_pos = magpieViews.view_generator("rating_scale",{
    trials: 1,
    name: 'rating_scale_pos',
    data: trial_info_2.ratingScale_pos
});

const rating_scale_neg = magpieViews.view_generator("rating_scale",{
    trials: 1,
    name: 'rating_scale_neg',
    data: trial_info_2.ratingScale_neg
});