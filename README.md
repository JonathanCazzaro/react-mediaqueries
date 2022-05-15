# React Mediaqueries

## What is it about ?

React Mediaqueries helps you enforce media rules to render your components in React. It basically provides prebuilt media rules, a method to customize them, and a wrapper component to be used in your app. I also lately added a useMediaQuery hook which I'll tell how to use.

## Getting started

You need to be using typescript for your project.

Let's first install the library.

```
yarn add @jsee_dev/react-mediaqueries
```

or

```
npm install @jsee_dev/react-mediaqueries
```

### The ReactMediaQueries class

1. To be starting with, I would recommend importing it in a dedicated file in your project. Once it is done, you will have to instanciate the ReactMediaQueries class that has been imported, and get the wrapper component named MediaContext. Export it eventually so that it can be used anywhere in your application.

```tsx
import ReactMediaQueries from "@jsee_dev/react-mediaqueries";

const { MediaContext } = new ReactMediaQueries();

export default MediaContext;
```

2. Use it where your need it. Note that it can take two props : orientation, and type. For now I'm not using any other query type so I didn't find useful to go further.

```tsx
const MyApp: React.FC = () => (
  <MediaContext type="desktop-large">
    <p>Hello World !</p>
  </MediaContext>
);
```

3. (optional) You can customize the media queries. When you instanciate the library, just pass a configuration object as constructor. There you can specify which type you need to be tweaked, and then set min/max width for landscape and/or portrait orientation. Note that as soon as you make a modification, for instance on a min property, the associated max will be reset to null unless you give it a value as well.

```tsx
import ReactMediaQueries from '@jsee_dev/react-mediaqueries';

const { MediaContext } = new ReactMediaQueries({
  smartphone_large: {
    portrait: {
      max: 414
    }
  },
  desktop_small: {
    landscape: {
      min: 1024      
    }
  }
});

export default MediaContext;
```

And that's pretty much it !!

### The useMediaQuery hook

1. This hook has been designed to make precise queries more convenient to use.  
Just import it in your file, call it at the higher level of your function component, and it will return 4 methods. Each one targets a specific query, and returns a boolean if the queries matches with updates on navigator resize : **max-width** for **isWidthSmaller**, **min-width** for **isWidthLarger**, **max-height** for **isHeightSmaller**, and **min-height** for **isHeightLarger**.

2. Then it can be used straight in your component TSX to condition the rendering of elements according to specific queries :-)

```tsx
import { useMediaQuery } from '@jsee_dev/react-mediaqueries';

const MyComponent: React.FC = () => {
  const { isWidthLarger, isWidthSmaller, isHeightLarger, isHeightSmaller } = useMediaQuery();
  return (
    <div>
      <p>Hello World !</p>
      {isWidthLarger(720) && <p>Your device is probably not a smartphone !</p>}
    </div>
  )
};

```

Have fun and feel free to bring any improvements as you like !