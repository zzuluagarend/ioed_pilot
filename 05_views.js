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
  text: `Thank you for taking part in this experiment.
            <br />
            <br />
			As part of my thesis research, I'm conducting a series of online surveys about social events. This is a short pilot test that will take approximately 5-10 minutes.
			<br />
            <br />
			The data from this experiment will be used for scientific purposes only and will be stored anonymously. 
            <br />
            <br />
			Should you have further questions or suggestions, please send me and email: <strong>zzuluagar@gmail.com</strong>`,
  buttonText: 'begin'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `To start with, I will ask you to evaluate a set of instructions to use a 7-point rating scale.
            <br />
            <br />Please read each section carefully and follow the instructions to assess how adequate and clear the information presented is.`,
  buttonText: 'go to scale instructions'
});

const explanation_ins_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_1',
  title: 'Self-Understanding Scale',
  text: `If you were to evaluate your knowledge on how and why certain things work, you would probably come along with judgments as "I certainly know that" or "I definitely have no idea". Judgments as such are commonly asked for on rating scales ranging from less to more understanding. 
            <br />
            <br />
			The following instructions attempt to clarify what different scores on a 7-point scale of this kind are supposed to reflect. Please read each explanation level in order to understand how to use this rating scale, illustrated here with an example of the mechanism behind global warming.
            <br />
            <br />
            Have in mind that a 7 in this scale implies deep and detailed knowledge on how global warming occurs, 1 implies very little knowledge, and 4 a level in the middle.`,
  buttonText: 'next'
});

const explanation_ins_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_2',
  title: 'General Instructions',
  text: `<strong>Level 7 of knowledge:</strong> A person with level 7 of knowledge has a deeply and detailed knowledge of how global warming occurs and what  role human activity has played on accelerating it. For instance, she will know that Earth's normal temperature is a natural process that follows from the Earth’s absorption of sunlight. As the Earth transforms sunlight’s energy into infrared light, greenhouse gases (methane, carbon dioxide, etc.) in the air absorb that energy causing the atmosphere to heat up. 
            <br />
            <br />
			She will also know that the warm atmosphere emits more infrared light causing it to be re-absorbed several times before eventually returns to space, keeping the Earth warm. The longer the infrared light stays in the atmosphere, the warmer the water and ground will get. 
            <br />
            <br />It will be clear for her that since the industrial age, human activities like energy, food, and goods production has increased the amount of methane and carbon dioxide released to the atmosphere. Such increase causes an extra absorption of infrared light that slows the rate at which sunlight’s energy escapes to space. As more infrared light is captured, the average temperature rises contributing to the global warming.`,
  buttonText: 'next'
});


const explanation_ins_3 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_3',
  title: 'General Instructions',
  text: `<strong>Level 4 of knowledge:</strong> A person with level 4 of knowledge has a general idea of how climate change occurs and how human activities affect it, although without deep or detailed understanding. For instance, she might know that climate change occurs by means of greenhouse gases that somehow absorb solar energy, heating up the Earth.
            <br />
            <br />
			She might also know that the bigger the amount of greenhouse gases released to the atmosphere, the warmer the Earth will get. It would be clear to her that human activity boosts this process causing higher temperatures.`,
  buttonText: 'next'
});


const explanation_ins_4 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'explanation_ins_4',
  title: 'General Instructions',
  text: `<strong>Level 1 of knowledge:</strong> A person with level 1 of knowledge would probably have a very superficial understanding of global warming. She might know that fossil fuels cause the Earth's temperature to increase but how this occurs and by which means (e.g., infrared light, greenhouse gases) is unknown to her.`,
  buttonText: 'next'
});

const instructions_news = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_news',
  title: 'General Instructions',
  text: `For the second part of this survey, I will present you with two different news on the topic "cryptocurrencies". After you have read each article, you will be asked to rate how positive or negative you found it.`,
  buttonText: 'go to articles'
});

const negative_news = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'negative_news',
  title: 'Bitcoin buster? A Greater Fool’s Gold',
  text: `After a decade since the first cryptocurrency–digital tokens known as cryptos for short–saw the light of day, more than 2,000 different cryptos have brought investors into a fool’s gold fever.
            <br />
            <br />
            Cryptos have investors in the grip of a gold rush fever, with billions being traded every day and prices soaring and crashing alarmingly. This volatility may be a speculative trader's friend, but it has reinforced cryptos' reputation for being high-risk investments for the adrenalin-fuelled "get rich quick" brigade. 
			<br />
            <br />
            Since their launch, this unpredictable fluctuation has raised concerns among experts and state authorities. So, a growing number of crypto start-ups have been forced to develop alternatives as the so-called stablecoins–digital tokens pegged to traditional fiat currencies such as the US dollar or the British pound–in unsuccessful attempts to stabilize the fluctuation. However, warnings and skeptical views persist. 
			<br />
            <br />
			"Despite their lack of understanding, cryptoasset owners are often looking for ways to 'get rich quick' citing friends, acquaintances and social media influencers as key motivations for buying cryptoassets," said Christopher Woolard, of the Financial Conduct Authority (FCA). "Cryptoassets are complex, volatile products - consumers investing in them should be prepared to lose all of their money," he added.
            <br />
            <br />
			The stability of a currency is vital to value assets attached to it. For cryptos, assets set in these currencies experience dramatic devaluations in briefly periods of time, which can put at risk an already fragile monetary system. That goes without mention the transaction system on which cryptos rely, which currently works at a rate of 13 transactions per second, far behind the 200,000 transactions per second just Visa showed in 2018. 
            <br />
            <br />
			The world of digital currency has also little regulatory oversight and a history of hacking threats, and minimal consumer protection. Last February for instance, the untimely death of Gerald Cotten, head of the biggest Canadian cryptocurrency exchanges – Quadriga CX – shook investors with a loss of C$ 180m ($135m). Since all the transaction information was encrypted in his laptop–which has not yet been cracked–, his decease vanished the investors’ access to their cryptos hosted in the platform. The meltdown of Quadriga CX left thousands of investors with the uncertainty of what will happen with their money. 
            <br />
            <br />
			There is even less reason to trust software developed by small teams of programmers who hope both to become insanely rich and to circumvent all efforts by governments to control them. So long as ordinary people can expect to make their fortunes overnight, proliferation of cryptos seems unlikely to drop off in the years to come.`,
  buttonText: 'next'
});

const positive_news = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'positive_news',
  title: 'Bitcoin buster? The Future of Global Economy',
  text: `After a decade since the first cryptocurrency–digital tokens known as cryptos for short–saw the light of day, more than 2,000 different cryptos are being traded on about 190 exchange platforms around the world.
            <br />
            <br />
			Cryptos have provided investors with an attractive method of decentralized currencies, with billions being traded every day. And most importantly, they are not affected by volatile politics or global banking crises. 
            <br />
            <br />
			Since their launch, every crypto has seen increased its value, sometimes by a 1000 times. Price fluctuations now seem to be a problem of the past thanks to a growing number of crypto start-ups that are developing alternatives known as stablecoins, digital tokens pegged to traditional fiat currencies such as the US dollar, British pound or Japanese yen. As expressed by the crypto finance company Circle, stable coins have increased investor confidence in cryptos.
            <br />
            <br />
			"Imagine a US dollar coin that you can make payments with, use on crypto networks, or use in smart contracts to pay dividends, but which you can convert back to fiat currency at any time," explains Circle chief executive Jeremy Allaire. "We're going to see a lot of businesses using tokens for revenue raising. And eventually central banks will want to do this," maintains Mr. Allaire. 
            <br />
            <br />
			The stability of a currency is highly praised as it impacts directly on the trust of investors and, consequently, acquisitive power. For cryptos, this has led to the tokenization of assets such as automobiles, companies and real state. Most people in the sector agree that crypto's ability to act as a smart contract presents huge opportunities to value physical assets. In countries with unstable economies, cryptos have offered an alternative for people to take part in a reliable transaction system and set their assets on currencies easily available and more reliable than those backed by local governments.
            <br />
            <br />
			"Say I have a house in downtown Saigon worth $1m," says Kory Hoang, founder of Stably. "I could tokenise it and sell those tokens on the global crypto market. You could issue a billion pieces of your house if you wanted. Then people would start trading them, just like shares in a real estate investment trust. It gives investors around the world access to investment opportunities they never had before."
            <br />
            <br />
			Although work is still afoot, strategies as satablecoins show how adaptive is the crypto system, responding quickly to changes and investors' concerns. Future looks promising for cryptos setting them as a real update to the global economic system. Let us see what will happen.`,
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

const rating_scale_ins_pos = magpieViews.view_generator("rating_scale",{
    trials: 1,
    name: 'rating_scale_ins_pos',
    data: trial_info_2.ratingScale_ins_pos
});

const rating_scale_ins_neg = magpieViews.view_generator("rating_scale",{
    trials: 1,
    name: 'rating_scale_ins_neg',
    data: trial_info_2.ratingScale_ins_neg
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

const rating_scale_use = magpieViews.view_generator("rating_scale",{
    trials: 1,
    name: 'rating_scale_use',
    data: trial_info_2.ratingScale_usefulness
});