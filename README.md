# Eat the frog

## Description
This is a browser-based web app built in HTML, CSS and Javascript which reimagines the traditional to-do list by incorporating behavioral productivity techniques into task management. By allowing users to quantify how difficult, time-consuming, or tedious each task is—and by identifying a “frog” task they’re most likely to procrastinate—the app can intelligently reorder tasks to match different productivity philosophies. Whether users want to tackle their hardest task first, build momentum with small wins, or balance effort throughout their day, the app adapts their task list to support that approach. The result is a more personalized and psychologically aware productivity tool.
The name eat the frog comes from a quote attributed often to Mark Twain ""If it's your job to eat a frog, it's best to do it first thing in the morning." which is interrupted to mean. If there's something you dread doing, do it first.

## TLDR

A smart to-do app that reorders tasks using difficulty, time, tedium as variables. The order is tailored to the user's personal preference.

## Features
- Add, edit, and delete tasks
- Assign task attributes: Difficulty, Time required, Tediousness
- Mark one task as your “frog” (most dreaded task)
- Multiple task ordering strategies:
 - Eat the Frog – the most dreaded task first, then hardest to easiest
 - Frog with a Chaser – the most dreaded task first, then the funest, then hardest to easiest.
 - Snowball – start with the quickest task and go through to the slowest
 - One for Me, One for You – alternate between hard and easy tasks
 - Hump Method – start easy/quick and build to the worst and the middle and then end on easier ones again.
- Dynamic reordering of task list based on selected strategy
- Check tasks as done as they are completed

## sorting algorithms

### Intial sort

Intial sort of tasks is into: fun, boring, easy, hard, fast, slow. and ordered using these priorities:
- fun: least tedious. If tedium rank is equal, then compare time(quickest wins), then compare difficultly(easy wins).
- boring: most tedious. If tedium rank is equal, then compare time(longest wins), then compare difficultly(hardest wins).
- easy: least difficult. If difficultly rank is equal, then compare tedium(lowest wins), then compare time(quickest wins)
- hard: most difficult. If difficultly rank is equal, then compare tedium(highest wins), then compare time(longest wins)
- fast: least time. If time rank equal, then compare difficultly(lowest first), then compare tedium(lowest wins)
- slow: most time. If time rank equal, then compare difficulty(highest first), then compare tedium(highest wins)

### tailored ordering

Eat the Frog
- Start with hardest first array, all tasks pushed into bulk list or frog list (only one frog). Then arrays concatinated putting the frog at the top of the list.
Frog with a Chaser
- Start with fun first list, push into frog and non frog arrays. push frog into new array, add the first to of the fun array to the new array after the frog. Then sort the rest of the list into hardest first and concatinate with new array.
Snowball
- Use fastest first array.
One for Me, One for You
- Start with order as funest first. calculate a new general badness score by multipling tedium rank but difficulty rank. This gives very high scores to hard and tedious tasks and relatively low scores to easy and fun tasks. The array is ordered by these scores then split evenly into two arrays of top bad task and top good tasks. Then one from each array (starting from the bad task array) is adding alternately to the final list.
Hump Method
- Start with easy first list then, like before, make a badness score, but here by multiplying difficulty and time. Reorder so it goes through from best to worst, then add the task of the list alternatly into two different arrays, then reverse order of second array and concatinate list. 


## Demo
Add screenshots or a live demo link here.

## Installation
Clone and run locally in your browser.
git clone https://github.com/simonholt256/EatTheFrog.git
cd eatthefrog

Then open index.html in your browser.

## Tech Stack
HTML
CSS
JavaScript (Vanilla)

## Project Structure
```bash
project-root/
│── css
│    │── styles.css
│── html
│    │── index.html
│── images
│── javascript
│    │── arrangeList,js
│    │── changeList.js
│    │── index.js
│── README.md
```

## Environment Variables
No environment variables required.

