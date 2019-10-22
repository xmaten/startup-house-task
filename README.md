# JS Recruitment Task

## My approach

When I saw all the requirements I immediately thought about using MVC architecture. It helped me to easily separate different parts of app - getting data, displaying data and manipulating it. Code is more readable and also it's easy to write unit tests.

I began with creating simple structure and I added different methods as I went task after task. After each task I was manually testing how it works and fixing all the bugs I found. If there was possibility I tried to extract smaller, possibly reusable functions like `getMonthAgo`. When I had all the tasks completed I started to add some unit tests as well as refactoring little bits of code.

When it comes to things I did:

- I get news using fetch
- I store news added to Read later in Local Storage
- I run my tests using Jest

I also had some problems running Jest so I had to install some additional babel plugins.

## Description

We would like you to create an application that will display list of news fetched from The Guardian. You should use their API, which can be found here: [https://open-platform.theguardian.com/](https://open-platform.theguardian.com/)

Goal of this task is to check your JavaScript knowledge so please don't use any additional libraries, you can use `fetch` for http requests.

We have provided sample html + css styling, so you can focus on writing JS code.

## Requirements

- Display list of news from last 30 days
- Add pagination: 10 items per page
- Add news filtering based on section selection from dropdown. You can restrict it only to: `sport`, `books`, `business`, `culture`
- Add search functionality for filtering news content based on provided phrase
- Each news list element should have following elements:
  - Title
  - Section name
  - Date of publication
  - Link to full article (open in new window)
  - "Read Later" button
- Clicking "Read later" button should add selected news to the "Read later" section on the right. Those elements should be stored somewhere and displayed even after refresh.
- Each element from "read later" can be removed by clicking "delete" button
- (Bonus) It would be beneficial if you would write some kind of tests, either unit or integration
- (Bonus) If you will find time, please briefly describe your approach to solving this task.

## Tools used

In order to keep things simple we used only really small number of libs for this boilerplate:

- [Parcel](https://en.parceljs.org) as a bundler
- [Milligram](https://milligram.io/) and [Normalize](https://necolas.github.io/normalize.css/) for some simple styling
- [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for static code check
- [PostCSS](https://postcss.org/) with [Autoprefixr](https://autoprefixer.github.io/) for css compatibility
