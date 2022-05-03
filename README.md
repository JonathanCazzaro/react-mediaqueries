# React Mediaqueries

## What is it about ?

React Mediaqueries helps you enforce media rules to render your components in React. It basically provides prebuilt media rules, a method to customize them, and a wrapper component to be used in your app.

## How to use

You need to be using typescript for your project.

1. Let's first install the library.

```
yarn add react-mediaqueries
```

or

```
npm install react-mediaqueries
```

2. Then, I would recommend importing it in a dedicated file in your project. Once it is done, you will have to instanciate the ReactMediaQueries class that has been imported, and get the wrapper component named MediaContext. Export it eventually so that it can be used anywhere in your application.

```tsx
import ReactMediaQueries from "react-mediaqueries";

const { MediaContext } = new ReactMediaQueries();

export default MediaContext;
```

3. Use it where your need it. Note that it can take two props : orientation, and type. For now I'm not using any other query type so I didn't find useful to go further.

```tsx
const MyApp: React.FC = () => (
  <MediaContext type="desktop-large">
    <p>Hello World !</p>
  </MediaContext>
);
```

4. (optional) You can customize the media queries. When you instanciate the library, just pass a configuration object as constructor. There you can specify which type you need to be tweaked, and then set min/max width for landscape and/or portrait orientation. Note that as soon as you make a modification, for instance on a min property, the associated max will be reset to null unless you give it a value as well.

```tsx
import ReactMediaQueries from 'react-mediaqueries';

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