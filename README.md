# Color Picker

A sweet little tool for finding several different color combinations - complimentary, split complimentary, triad, analogous and square combinations.

See it live at [katescolorpicker.surge.sh](http://katescolorpicker.surge.sh/)

![](./public/app.jpg)

## Background

I like seeing color combinations while I'm planning a new project - whether it's a new site, a knitted item, or paint colors for the house. So I built a little tool in React that lets you pick a color and it calculates various color combinations.

## Features

This site uses React Color for the color picker. Slide it around to find your starting color and the site automatically updates the other colors. Hover over a color to see (and be able to copy) the hex and rgb codes. Click a new color and that color will become the main color.

Now you can save colors! Click save and your saved colors will show up at the bottom. Click on a saved color to load it. Your browser will remember your saved colors until you clear them or clear your cookies. 

Not everyone knows what the different color combinations mean, so now each combo shows a color wheel at the top with the specific colors shown. Color wheels are built in HTML/CSS and update as well when the color changes.

Toggle the background between white and black.

Color Picker:<br/>
![](./public/colorpicker.jpg)

Hovering over a color: <br/>
![](./public/hover.jpg)

## To do

* ~~I'm contemplating add a feature where you can save a color combination. But this was not bad for one day's work!~~
* Clear just one saved color at a time
