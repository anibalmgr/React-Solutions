# Playground

Here I try code and features that I am learning. I started with some very simple react router features and I thought I can just make a new react module for every new thing that I want to try. I'll try to keep things organised so it can be, hopefully, useful for others.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scrollers

Here I was trying [useEffect](https://reactjs.org/docs/hooks-effect.html) to scroll to the top, but the actual implementation of this is in a website using ReactRouter and the scroll element isn't the window DOM element but a div that wrapped the content of the page, so the header and footer are always visible. I needed a simpler environment to try that before to implement it in the real project.

This page has three divs with a button, the first and the second use a function to scroll to the top and bottom of the windows:

```javascript
window.scrollTo({
  top: whereToScroll,
  behavior: "smooth"
});
```

The third div has a scrollbar, to access it I used

```javascript

const thirdRef = useRef();

function handleClick(e) {
const whereToScroll = e.target.value;
thirdRef.current.scrollTo({
  top: whereToScroll,
  behavior: "smooth"
});
}
```





## Mouse

I was trying to understand how to add a shadow to the mouse in some sections and the example in the React website about [Render Props](https://reactjs.org/docs/render-props.html) is exactly about it. I updated the example to use [Hooks](https://reactjs.org/docs/hooks-intro.html), so I'm not actually using Render Props, just making a component with react hooks that can have an image that follows the mouse.
