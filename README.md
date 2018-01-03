# Project 3 Crypto Blog

## Brainstorm/Initial Thoughts

* A public blog/social hub that displays blog posts created by users
* Homepage contains a ticker of most current spot prices of most popular coins
* Include a nav bar with a Home, About, and Resources tab
    * Home tab brings you back to home route, which displays all the blog posts
    * Resource center for news outlets, exchanges, and literature
        * Include links to articles, podcasts, books, etc.
* Serve as a place to check what is current/trending in the crypto world
* Use API() to get pricing data, which we have tested in Postman

## Why Build This?
    
* Cryptocurrecies have become the hottest trend around, as vast fortunes are being made almost overnight by people young and old who have gotten in early to this modern-day gold rush. While someone has undoubtedly mentioned bitcoin or blockchain technoology to you, these subjects are not so easily understood. The information about these technologies is scattered, inconsistent, and complicated. As cryptocurrency enthusiasts with both personal and professional experience in this world, we seek to crack the code on this issue with our Crypto Blog.

## Initial Challenges

* Git branching - there's no getting around this challenge. Issues are sure to arise and will be our biggest threat to meeting deadlines.

* Working remotely - while we plan to meet up for full working days over the break, there will be times when we work remotely. Communication will be key as it relates to delegation of tasks and git branches merging up properly.

* React Router - if we decide to use React Router, this could be challenging to build and debug as we have virtually no hands-on experience as of now.

* CRUD - our react/express CRUD homework was a challenge - implementing this correctly on the backend and having it work on the React front-end is likely the most important feature of the project.

## Technologies and Dependencies Used

* React.js, React Router
* Javascript/Node/Express
* 3rd Party API - Coin Market Cap, see link in Works Cited section
* MVC Pattern
* HTML/CSS
* PSQL & pg-promise
* Github for merging feature branches
* Heroku for online deployment
* Webpack 
* See package.json file for list of all dependencies and node modules used (https://git.generalassemb.ly/P3-Group-3/Crypto-Blog/blob/master/package.json)

## Wireframes & User Stories

* Wireframes: https://git.generalassemb.ly/P3-Group-3/Crypto-Blog/tree/master/assets
* User Stories: https://git.generalassemb.ly/P3-Group-3/Crypto-Blog/projects

## Team Wiki with Meeting Notes

* https://git.generalassemb.ly/P3-Group-3/Crypto-Blog/wiki

## Team Guidelines

* Fix your errors before pushing up 
* Divide the features out among us evenly, trying to work to one another's strengths
* Test code while building, and understand why it works
* Double check syntax/spelling always
* Communication is key!
* When you're committing to git, announce it to the whole team
* Keep naming conventions consistent, record in repo's Wiki
* Never push broken code to master
* Review pull request as group
* Try to pair-program through the major features of the app
* Never work in the master unless debugging with the team
* Debug using testing branch, and delete when completed
* Take notes when we hold "team meetings", record progress as we go
* Be on time for agreed-upon meetings

========================================


## Final Thoughts and Challenges

* All in all, we found this project to be an overall success both on an individual and collective basis. Initially, we knew we would run into issues merging our branches back together. We were able to work through this challenge early and develop strategies to avoid conflicts, as we found merging issues to be both difficult to repair and taxing on our time. Additionally, we were able to put a rough timeline together during our initial planning phase that we largely stuck to. Some features, such as user authentication, had to be scrapped altogether so that we could meet the minimum requirements outlined by the client (aka the rubric). 
* We made a schedule to meet over break for 3 full days (12/28, 12/29/, & 12/30) with the option for a half-day on New Years Eve if needed. We all met at Tim's apartment in Stamford, CT and were able to have some very productive workdays all together. On 12/30, Carson was not able to make it to CT due to the snowy weather, but we still worked effectively using Slack's screen-watch feature and make some huge progress that day. We ended up needing the half-day on NYE to implement some final major features, which proved to be a wise choice as we were largely left with small bug fixes and styling changes on the final day of the project.
* Implenting React Router and CRUD proved to be the most difficult features of the project. We used just about every available resource at our disposal - docs, class examples, Tim's roommate Zac briefly (WDI alum), and most importantly one another. At times, the best way to dissect and solve a problem was to bounce ideas off of one another and mutually arrive at a solution the worked best for all.
* If we had more time (and money), we would go back and add in user authentication and probably a few more styling changes. We would also like to see our coin prices update in realtime and animate the ticker section to run more like a ticker-tape (like we had originally designed). In summation, this was a rewarding experience for us as we battled through the challenges one by one and watched our collective ideas take shape and come to life.

## Sources Cited

* Regex: https://stackoverflow.com/questions/1043619/get-numbers-from-string-with-regex
    * Also used Tim's roommate, Zac Messinger, for help on this 
* Styling inspriation: http://cryptocurrencyfacts.com/blog/
* React Router redirect: https://www.sitepoint.com/react-router-v4-complete-guide/
* React forms: https://reactjs.org/docs/forms.html
* .map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* React Router: https://git.generalassemb.ly/wdi-nyc-hamilton/react-router-from-Vince
* React/Express/CRUD examples:
    * https://git.generalassemb.ly/wdi-nyc-hamilton/react-express-CRUD
    * https://git.generalassemb.ly/wdi-nyc-hamilton/react-express-lab
    * https://git.generalassemb.ly/wdi-nyc-hamilton/fictional-restaurants-lab
    * https://git.generalassemb.ly/wdi-nyc-hamilton/full-crud-express-mvc-movies
* Coin Market Cap API: https://coinmarketcap.com/api/
* Jason Seminara for webpack creation
* Kate Shishkina for Heroku deployment

