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

## Scroll Based Animations

I wanted to create scroll based animations to make things appear on scroll and I took two approaches to that.

### Solution 1:
First I found [this article](https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f), I changed a bit the code to make items appear and then disappear, and also to make it recalculate when the viewport size is changed. I created a useAnimation hook that takes a ref and an optional style object as parameters and returns a react-spring style object that can be passed to a <animated.foo />. The hook internally calls useVisibility that takes an id and returns a Boolean value. This is the simplest solution for my problem but it can be easily changed to use other animation libraries or just use the useVisibility hook. My first approach here was to make many react hooks, but soon I realised that it was better and simpler to make something to just solve my problem.

### Solution 2:
