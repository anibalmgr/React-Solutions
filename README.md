# React Solutions

This repository is a collection of pieces of code, mainly React.js components and hooks.

The idea is to keep track and improve practical solutions found during the process of developing websites.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## [1. Scroll Based Animations](/src/Components/Playground/AppearOnScroll)

Three approaches to make scroll based animations with React [Hooks](https://reactjs.org/docs/hooks-intro.html). In all there is a hook that detects if an element is visible and then a second hook that calls the first function and that animates it, the logic is split to make it more easily reusable. The first two examples use [React-Spring](https://react-spring.io/), the third is just a simpler version of the second using a CSS class. This was the journey to achieve it.



| Hooks                           | Description   |
|--------------------------       | -------------|
|[useIntersectionObserver() ](/src/Components/Hooks/useIntersectionObserver.jsx)      |This hook uses the Intersection Observer API which listens if the ref element intersects the viewport, if that happens it calls a callback function that setIsVisible to true. Takes no arguments and returns a React ref and a Boolean value |
|[useIntersectionObserverVisible() ](/src/Components/Hooks/useIntersectionObserver.jsx)  |This hook uses the Intersection Observer API which listens if the ref element intersects the viewport, if that happens it calls a callback function that setIsVisible to !isVisible. Takes no arguments and returns a React ref and a Boolean value. |
|[useBoundingClientRect() ](/src/Components/Hooks/useBoundingClientRect.jsx)       |Detects is an object is visible using [getBoundingClientRect() ](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect). Takes a ref and returns a Boolean value. |
|[useAppearWithCss() ](/src/Components/Hooks/IntObsWithCss.jsx)                |Returns a ref and a a css class indicating if the ref element is visible. Calls useIntersectionObserver to get the ref and the bolean value|
|[useAppearSpringsBCR() ](/src/Components/Hooks/AppearWithSprings.jsx)           |Returns a React Spring Style object, takes a ref and a style object, calls useBoundingClientRect to get a boolean value |
|[useAppearSpringsIntObs() ](/src/Components/Hooks/AppearWithSprings.jsx)          |Takes no arguments, returns a React Spring style object and a ref. Calls useIntersectionObserverVisible to get a ref and a boolean value |

### Solution 1:
This first solution gets a  useVisibility() hook and then useAnimation().
The first solution is based in [this article](https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f) by [Chris Eickemeyer](https://dev.to/chriseickemeyergh). Instead of comaring ```windows.innerHeight``` + ```windows.scrollY``` and the initial value of ```getBoundingClientRect().top``` (the distance between the ref element and the windows top), this solution always listens to the windows.innerHeight and compares that with getBoundingClientRect().top, by doing that it keeps working if the windows size changes and if another element changes its size. it also changes its isVisible state between true and false every time the ref element enters or exits the viewport.
The first solution uses useAppearSpringsBCR() hook which takes a React ref and an optional style object as parameters and returns a React spring style object that can be passed to a <animated.foo />. The hook calls useBoundingClientRect() that takes a ref and returns a Boolean value.

### Solution 2:
The second solution comes after reading this [article](https://whoisryosuke.com/blog/2020/handling-scroll-based-animations-in-react/) by [Ryosuke](https://twitter.com/whoisryosuke), he reviews Etickemeyer's article but also includes a way to do it with the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), that provides better performance, but it's not an option if you need to support Internet Explorer. The second solution is based in Ryosuke's explanation and [this one](https://dev.to/producthackers/intersection-observer-using-react-49ko), it uses useAppearSpringsIntObs() hook which calls useIntersectionObserverVisible() and returns the ref and the style for a animated react-spring element.

### Solution 2.1:
This solution is based in the second one, but is more practical and simple. First it modifies useIntersectionObserverVisible() to useIntersectionObserver() so instead of changing isVisible state every time the ref element is on sight, it changes just once when the element appears for the first time, by doing that we avoid some weird behaviours when the objects translates the Y axis. Also this solutions changes useAppearSpringsIntObs() for useAppearWithCss(), which when called returns the ref and a string that can be used as a CSS class, so we can easily write some CSS to make the animations happen.

This is a [Code Sandbox](https://codesandbox.io/s/appear-onscroll-0wldq?file=/src/AppearOnScroll.jsx) of this solution.


## [2. Scrollers](/src/Components/Playground/Scrollers)

A few ways to use [useEffect](https://reactjs.org/docs/hooks-effect.html) and the Web API to scroll to the top onClick.

This solution has three ```<div>```s with buttons, the first and the second use a function to scroll to the top and bottom of the window:

```javascript
window.scrollTo({
  top: whereToScroll,
  behavior: "smooth"
});
```

The third ```<div>``` has its own scrollbar and uses a React ref access it:

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

This is a [Code Sandbox](https://codesandbox.io/s/scrollers-865zb) of this component.

## [Mouse](/src/Components/Playground/Scrollers)

A work in progress solution to add a custom shadow that follows the mouse. This solution is actually bases an example about how to use [Render Props](https://reactjs.org/docs/render-props.html) in the React website, but I updated the example to use [Hooks](https://reactjs.org/docs/hooks-intro.html), so this solution doesn't actually use Render Props. There is still room to improve and simplify it.
