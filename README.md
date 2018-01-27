# text-synesthesia

See a demo of the “Colour Translator” App [here](http://www.ralphbarton.co.uk/text-synesthesia).

## About the Project

I’ve always associated a certain colour with each of the letters of the alphabet. In something like 2006 I decided to document them on computer.

<img src="https://raw.githubusercontent.com/ralphbarton/text-synesthesia/master/src/img/Alphabet_colours.png" />

Around the same time, I put together a basic web-page as an experiment, to see if it was possible to read text via this colours representation.

I rewrote it in something like 2010. This incarnation used used a fancier ‘font’ with support of lower and upper case, smooth corners and some other features. This is the only occasion I have used Adobe Photoshop's integrated batch-automation feature (creating each image fragment-type in each colour). It was otherwise again quite rudimentary in terms of the JavaScript programming. A demo for this old version is [here](http://ralphbarton.co.uk/old/ctra/ColourTranslator.html).

This git repo is for a 2018 rewrite of the Colour Translator. It’s a small program, and now that I know how to use [React](https://reactjs.org/) I can build a more advanced version of it quite quickly.

## About Synesthesia

It turns out that "grapheme colour synesthesia" is somewhat common and has been studied. Here are some webpages about it:

https://en.wikipedia.org/wiki/Grapheme-color_synesthesia

https://www.researchgate.net/figure/273150268_Grapheme-Color-synesthesia-in-6588-participants-The-letter-color-pairings-across-the

The image below is taken from the latter of these two links. How interesting that my set of colour 'choices' to some extent resembles the average of the 6588 survey participants:

<img src="https://raw.githubusercontent.com/ralphbarton/text-synesthesia/master/src/img/Alphabet_colours_6588_survey.png" />

Some of the letter-colour pairings found in this survey are nothing more than matching the first letter of colour names (B - blue; G - green; P - purple; R - red; Y - yellow).

But even accounting for this, I agree with the survey-result choices for letters: C - yellowish, K - orangish, L - yellowish, O - whiteish, S - yellowish, V - purpleish, W - purpleish.

## Building the App in React

Libraries / tools used:

[Create React App](https://github.com/facebookincubator/create-react-app) - provides a console-based development environment for working in React.

[D3](https://d3js.org/) - useful when programatically creating SVG elements.