# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![https://github.com/latif-essam/frontendmentors-challenges/tree/static-job-listings/src/assets/shots/main_desktop.png](Desktop)

### Links

- Solution URL: [Add solution URL here](https://github.com/latif-essam/frontendmentors-challenges/tree/static-job-listings)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass.com/) - For styles

### What I learned

use different tools and techniques to develop this application with React.

```html
<h1>Some HTML code I'm proud of</h1>
```

<div className="card_pre">
        <div className="logo">
          <img src={require(`./../assets/images/${logo}`)} height={"100%"} />
        </div>
        <div className="info">
          <div className="badges">
            <span className="company">{company}</span>
            <Badge visible={newJob} type="new" />
            <Badge visible={featured} type="featured" />
          </div>
          <Separator size={15} />
          <h2>{position}</h2>
          <Separator size={15} />
          <div className="info_2">
            <span>{postedAt}</span>
            <span>. {contract}</span>
            <span>. {location}</span>
          </div>
        </div>
      </div>
    </div>
```css
.card {
  // plus feaures for new feaured jobs
  &_plus {
    border-left: 5px solid $primary;
  }

display: flex;
justify-content: space-between;
align-items: stretch;
padding: 30px 3%;
background-color: $light_filter;
margin-block: 15px;
border-radius: 5px;
box-shadow: 0px 5px 15px $dark_gray;
.card_pre {
display: flex;
justify-content: space-between;
align-items: stretch;
.logo {
margin-inline-end: 15px;
border-radius: 50%;
}
}

````

```js
const removeDuplicates = (arr: string[]): string[] =>
  arr.filter((el, index) => index === arr.indexOf(el));

const filterJobsByTags = (tags: string[], jobs: JobObj[]): JobObj[] => {
  if (tags.length === 0) return jobs;
  let newArray: JobObj[] = [];

  for (let i = 0; i < tags.length; i++) {
    jobs.map((job: JobObj) => {
      // check exisiting job
      if (newArray.includes(job)) return;
      // check role and leve
      if (job.role === tags[i] && !newArray.includes(job)) newArray.push(job);
      if (job.level === tags[i] && !newArray.includes(job)) newArray.push(job);

      // check languages
      if (job.languages.includes(tags[i]) && !newArray.includes(job))
        newArray.push(job);
      // check tools
      if (job.tools.includes(tags[i]) && !newArray.includes(job))
        newArray.push(job);
    });
  }
  return newArray;
};

````

### Continued development

Next, I thinking to add dark theme support, search using text search input and ability to add new jobs, delete jobs, and edit jobs.

### Useful resources

## Author

- Website - [Add your name here](https://latifessam.me/latif-essam)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/latif-essam)
- Twitter - [@yourusername](https://www.twitter.com/latifessam)

## Acknowledgments

making sure to build this desgin with one step at a time 😊✌.
