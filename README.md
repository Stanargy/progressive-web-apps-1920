# OBA-R

## Summary

This is a single page web appication. oba-r

## Table of contents

1. [Live demo](#1-Live-demo)
2. [Install](#2-Install)
3. [Features](#3-Features)
4. [DATA](#4-DATA)
5. [To-do](#5-To-do)
6. [Performance Matters](#6-Performance-Matters)
7. [Audit](#7-Audit)
8. [Conclusion](#8-Conclusion)

## 1. Live Demo

<!-- https://oba-ar.netlify.com -->

Heroku! under construction

## 2. Install

To install the project just fork it and 1. Clone it to your device.

2. Use npm install to install node dependencies.
3. Open a node.js terminal
4. Go to the folder that includes the cloned repository
5. For development mode enter command: npm run dev

## 3. Features

This project features an Augmented Reality experience for visitors of the Public Library of Amsterdam. It uses the ar.js library and a-frame. Users can type in a query and select submit. The sourcecode wil then call the library's API and renders the title, author and short description in AR back to the user via a camera instance.

Augmented Reality implementation has been delayed due to the sparse amount of time that's available to implement it.

## 4. DATA

Retrieving Data on books from a local file

```js
exports.index = (req, res) => {
  fs.readFile("./public/assets/results.json", (err, data) => {
    data = JSON.parse(data.toString());
    const filterData = filter2(data.data);

    console.log(filter2(data.data).length);
    console.log(filterData.length);
    res.render("index.ejs", {
      mydata: filterData
    });
  });
};
```

## 5. To-do

- [x] Render data form OBA API to the browser
- [x] Add a Camera entity
- [x] Add AR-objects to the view that show off potential of web-based-AR
- [x] Setup Marker entity for ar.js
- [ ] Setup live
- [x] Add user search input functionality
- [x] Setup routes for node.js
- [x] Modulize docs
- [x] Fix filter problem for image data from API
- [x] Add more Shadowing Effects
- [x] fix bug: noscript is being read by the screenreader, see: noScript.ejs
- [ ] Fix Revision
- [x] Fix SW
- [ ] Fix manifest

<!-- ## 6. Browser Technologies
    Features:

    -   Images
    With images disabled the section that shows where the image should be is still visible. This is not a good sight. Therefore in the future I want to use .svg files instead of .jpg add styling.

    -   Custom fonts
        To make sure that the user allways gets a good font a styling has been applied to font-family on the body. Each font is a fallback option if the one before fails, beginning with the default system UI-font and ending with sans-serif which tells the browser to pick the first sans-serif font that it finds. This statement covers 100% of the devices and browsers.

            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;


    -   Color
        To make sure content wouldn't be visible colorblind, a simple color palette has been used that consi
    -   Mouse/Trackpad Disabled
        To make sure a user can still tab to content I've made sure that all buttons, input and links are either <a> or <button>.

    -   Broadband connection

    -   Javascript Disabled
        Whenever The site is visited when javascript is disabled by the user, the site will display a <noscript> tag that tell's the user the site loses it's functionality when javascript stays disabled.

    -   Cookies
    	Caching isn't used at the moment.
        This is something I might implement in the future and when that happens I will pay extra attention to making sure the user won't be contantly redirected to the homepage or contantly gets bothered to acceps a cookie -agreement.

    -   Localstorage
        Localstorage isn't used at the moment.
        When localstorage is turned off I will need to implement the same fallback strategy as with Cookies. But in this case I will also make sure the site still makes a call to retrieve data even though it can't store them locally.


ScreenReader:
    I've noticed that the screenreader includes the html noscript tag in it's speech. I've added this issue as a bug to the to-do list.

    The screenreader reads the lyrical content of the page good.
    It focusses on a specific grid when a grid is "clicked", therefore it slowly progresses through the document at a speed indicated by the user.
     -->

## 6. Performance Matters

At the moment the core functionality fails to load

This site consists of a server side rendered app thanks to node.js
I've implemented nodemon with the npm script npm run dev, which runs nodemon index.js

The main bottlenecks I've encountered are scripts are:

- images that need to be resized
- minify js and css
- The scripts that are being loaded take approximately 3.5 sec

Audits:

Final Audit:

## 7. Audit

![Lighthouse final performance check](https://github.com/Stanargy/BrowserTechnologies-PerformanceMatters/blob/master/public/assets/lighthouse_end.JPG)
![Lighthouse final progressive web app check](https://github.com/Stanargy/BrowserTechnologies-PerformanceMatters/blob/master/public/assets/lighthouse_end2.JPG)

Performance index.ejs
14-03-2019
Metrics: - First Contentful Paint
1.5 s - Speed Index
1.6 s - Time to Interactive
1.6 s - First Meaningful Paint
1.5 s - First CPU Idle
1.6 s - Estimated Input Latency
20 ms

Performance about.ejs
14-03-2019
Metrics: - First Contentful Paint
1.5 s - Speed Index
1.5 s - Time to Interactive
5.0 s - First Meaningful Paint
1.5 s - First CPU Idle
5.0 s - Estimated Input Latency
260 ms

Performance increase: caching
20-03-2019

index.ejs
Metrics first load: - First Contentful Paint:
1.1 s - Speed Index:
1.1 s - Time to Interactive:
1.1 s - First Meaningful Paint:
1.1 s - First CPU Idle:
1.1 s - Estimated Input Latency:
10 ms

handtrack js loads .bin shards for an extended period of time, though this doesn't interfere with loading the initial content.

## 8. Conclusion

Learning Goals (in Dutch According to Rubric)

| Leerdoel                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                   Voldoende |    Goed | Behaald |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------: | ------: |
| _Je snapt het verschil tussen client side en server side renderen en kan server side rendering toepassen voor het tonen van data uit een API_ |                                                                                                                                                                                                                                                                                    De applicatie toont zonder dat javascript aanstaat een overzichts- en en detailpagina. Dit komt tot stand dankzij server side rendering. | =-=-=-= |      ✅ |
| _Je begrijpt hoe een Service Worker werkt en kan deze in jouw applicatie op een nuttige wijze implementeren._                                 |                                                                                                                                                                                                                                                                     De applicatie maakt gebruik van een service worker. Deze cached meerdere statische bestanden waaronder de CSS en enkele images van de overzichtspagina. |  =-=-=- |      ✅ |
| _Je begrijpt hoe de critical render path werkt, en hoe je deze kan optimaliseren_                                                             | De Critical Rendering Path (CRP) geeft tijdens het laden van een applicatie aan welke onderdelen van de site tijdrovend en dus vertragend zijn. Het optimaliseren van de CRP staat in direct verband met een betere gebruikerservaring. Dit komt doordat de applicatie sneller in gebruik kan worden genomen. Ook is de applicatie bij een correct geimplementeerde CRP toegankelijker bij een zwakkere internetverbinding. |    -=-= |      ✅ |

Even de belangrijkste termen onder elkaar:

**First View:** Dit is het eerste moment waarop de applicatie meer is dan een lege witte pagina. Het geen dat op het scherm staat kan nog steeds betekenisloos zijn maar er is op dit moment wel iets gerendered.

**Repeat view:** Dit geeft aan wat de gebruiker ziet wanneer hij terugkeerd naar een pagina. Doordat er mogelijk bestanden zijn gecached kan de repeat view sneller tot stand komen dan de first view.

**Percieved Performance:** Dit is de weerslag die het renderen van de applicatie heeft op de gebruiker. Het omvat de waargenomen prestatie van de applicatie tijdens het inladen.

**Runtime Performance:** Dit is de prestatie wanneer de applicatie in gebruik genomen wordt en dus niet bij het inladen.

**Time To Interaction:** Dit is een waarde in tijd uitgebrukt tot het moment dat de applicatie interacties van gebruikers (bvb clicks) kan verwerken.

**Time To First Byte:** Dit betekend de tijd die het kost vanaf het moment van navigeren naar de applicatie tot het moment dat de eerst byte is teruggekeerd naar de gebruiker. De tijd die hier tussen zit komt tot stand doordat de server de applicatie eerst voor de gebruiker bouwt en dan pas de bestanden doorstuurd.
