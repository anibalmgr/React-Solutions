# React Solutions

This repository is a collection of pieces of code, mainly React.js components and hooks.

The idea is to keep track and improve practical solutions found during the process of developing websites.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scroll Based Animations

Three approaches to make scroll based animations with React [Hooks](https://reactjs.org/docs/hooks-intro.html). In all there is a hook that detects if an element is visible and then a second hook that calls the first function and that animates it, the logic is split to make it more easily reusable. The first two examples use [React-Spring](https://react-spring.io/), the third is just a simpler version of the second using a CSS class. This was the journey to achieve it.

| Hooks                    | Description   |
|--------------------------| -------------:|
| useIntersectionObserver  |               |
| useBoundingClientRect    |               |
| useAppearWithCss         |               |
| useAppearSpringsBCR      |               |
| useAppearSpringsIntObs   |               |

### [Solution 1:](/src/Components/Hooks/Visibility.jsx)
This first solution gets a  useVisibility() hook and then useAnimation().
The first solution is based in [this article](https://dev.to/chriseickemeyergh/building-custom-scroll-animations-using-react-hooks-4h6f), the code instead of adding the windows.innerHeight + windows.scrollY and comparing that with the initial distance between the ref element and the windows top using getBoundingClientRect().top, that is storaged in a constant, I'm always listening just to the windows.innerHeight and comparing that with getBoundingClientRect().top, by doing that it keeps working if the windows size changes and if another element changes its size. I also changed it to make the isVisible item's state change between true and false every time it enters or exits the viewport. I created the useAnimation() hook that takes a ref and an optional style object as parameters and returns a react-spring style object that can be passed to a <animated.foo />. The hook internally calls useVisibility() that takes an id and returns a Boolean value. This is the simplest solution for my problem but it can be easily changed to use other animation libraries or just use the useVisibility hook.

### [Solution 2:](/src/Components/Hooks/IntObs.jsx)
As always I keep digging around to find out if there where any other solution and I found this [article](https://whoisryosuke.com/blog/2020/handling-scroll-based-animations-in-react/) by [Ryosuke](https://twitter.com/whoisryosuke), It was good because he already passed by pretty much all the information that I could find online but also includes a way to do it with the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), that provides better performance, but it's not an option if you need to support Internet Explorer. With Ryosuke's explanation and [this one](https://dev.to/producthackers/intersection-observer-using-react-49ko), I wrote a second version with two hooks, useIntObs() that returns a react ref and a Boolean if the object is visible or not, and
useAppearWithSprings() which internally calls useIntObs() and returns the ref and the style for a animated react-spring element.

### [Solution 2.1:](/src/Components/Hooks/IntObsWithCss.jsx)
At the end I made a few changes. Instead of changing the isVisible state every time the component or HTML element is or is not visible, I modified the useIntObs() hook to make it change the isVisible state just once, only the first time that the object enters the screen, doing that I avoided some weird behaviours when the objects translates the Y axis.  I decided to use just a CSS class instead of React-Spring, I created a useAppearWithCss() hook that returns a class and a react ref.

So with the new useIntObs the Intersection Observer API I listens if the ref element intersects the viewport, if that happens it calls a callback function that setIsVisible to true. This hook is called by useAppearWithCss() hook, which when called returns the ref and a string that can be used as a CSS class.

## [Scrollers](/src/Components/Scrollers)

A few ways to use [useEffect](https://reactjs.org/docs/hooks-effect.html) and the Web API to scroll to the top onClick.

This solution has three <div>s with buttons, the first and the second use a function to scroll to the top and bottom of the window:

```javascript
window.scrollTo({
  top: whereToScroll,
  behavior: "smooth"
});
```

The third <div> has its own scrollbar and uses a React ref access it:

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

## Mouse

A work in progress solution to add a custom shadow that follows the mouse. This solution is actually bases an example about how to use [Render Props](https://reactjs.org/docs/render-props.html) in the React website, but I updated the example to use [Hooks](https://reactjs.org/docs/hooks-intro.html), so this solution doesn't actually use Render Props. There is still room to improve and simplify it.
