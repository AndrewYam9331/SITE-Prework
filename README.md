![ezgif com-gif-maker](https://user-images.githubusercontent.com/79959750/112154054-499aed00-8bba-11eb-8961-b31ae1e270fa.gif)
![ezgif com-gif-maker](https://user-images.githubusercontent.com/79959750/112154071-4d2e7400-8bba-11eb-9ab7-afbe9e8f87d5.gif)
# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Andrew Yam

Time spent: 7 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/79959750/112154144-5c152680-8bba-11eb-8721-70b14ae276ca.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
W3Schools
Stack exchange

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The timer was definitely the biggest challenge that I faced when making the game. At first I experimented with Date objects when realizing that there was no easy way to print out the time duration left from setTimeout or setInterval. I eventually used a countup timer code from W3Schools and modified it into a countdown timer and integrated it into my code. Another challenge were the small syntactical details that I missed from time to time. An example would be the usage of the setTimeout(func, time) event, where I didn’t realize that you don’t include the parameters or declare it as func() when declaring setTimeout, or else it would be invoking the function instead of simply sending it as a parameter. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
This project has definitely peaked my interest in dealing with time or certain applications. When researching setInterval or setTimeout for the timer, I saw how it was a bit complicated to print out the time left until an event would happen. It wasn’t as easy as assigning the time left to a variable and printing it out. I also randomly came across some articles on how setInterval is considered bad, and am curious as to why that is so. If it is bad, then I would have little idea as to how to deal with time-driven code and would be curious to find other or better options. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
From what I observed and my experimentations, I believe a bug happens if the same sound cue is played consecutively but there is not enough time spaced between the two, therefore it isn’t played the 2nd time. For example, if the same sound cue is played consecutively for playClueSequence(), there’s a chance that it doesn’t play the 2nd time. Another example is clicking a button immediately after the sound cue for the button is played from clicking it, where the 2nd clicking does not prompt the button to play the sound cue again following the first time it’s played. However if you wait a bit after the 1st click before trying the 2nd click, it works fine. I messed around the cluePauseTime and nextClueWaitTime to see if it would fix the problem, which significantly lessened the problem but didn’t completely fix it. When I use the given sounds instead of my own, it works fine. I assume that the problem lies with the length of the sounds, but there are cases where the sound isn’t played after the sound cue of a different button, meaning this bug doesn’t apply to the same consecutive sounds but all sounds in general that don’t have enough time spaced in between them. It’s the only bug which is the most noticeable in my program which I wasn't able to pin down the exact cause of. 



## License

    Copyright Andrew Yam

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
