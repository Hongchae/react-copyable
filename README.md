#react-copyable
Clipboard copyable React component

Implementation of clipboard copyable text [React](http://facebook.github.io/react/) component.

## usage

```js
var React = require('react'),
Copyable = require('react-copyable');
...
  render: function() {
    return (
        <Copyable text="copy-text" />
    );
  }

...
```

The clipboard accessing is depend on [document.execCommand](https://developer.mozilla.org/ko/docs/Web/API/Document/execCommand) function.
If browser is not support the feature, only the text value is selected and can be copy using native operation(ex. press Ctrl + C ...).

## Customization

 There are two props to customize component:
* Provides `onCopy` handler for when successfully copy to clipboard
* The component have styles defined inline. Override styles via the `style` prop
