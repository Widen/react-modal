# react-modal

## Fork notes

It appears the main react-modal project has not seen any code movement in a while, so this seemed the best direction for now.

This project was forked to:

- fix a keyboard issue that occurs with [nested models](https://github.com/reactjs/react-modal/issues/801) which occurs in one of our main workflows and is critical for accessibility.


## Table of Contents

- [Installation](#installation)
- [API documentation](#api-documentation)
- [Examples](#examples)
- [Demos](#demos)

## Installation

To install, you can use [yarn](https://yarnpkg.com):

    $ yarn add react-modal

## Releasing new versions

To release a new version, ensure your changes are moved to the master branch via PR. In the buildkite build you can now release and set the new version.

## API documentation

The primary documentation for react-modal is the
[reference book](https://reactjs.github.io/react-modal), which describes the API
and gives examples of its usage.

## Examples

Here is a simple example of react-modal being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#yourAppElement");

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

ReactDOM.render(<App />, appElement);
```

You can find more examples in the `examples` directory, which you can run in a
local development server using `npm start` or `yarn run start`.

## Demos

There are several demos hosted on [CodePen](https://codepen.io) which
demonstrate various features of react-modal:

- [Minimal example](https://codepen.io/claydiffrient/pen/KNxgav)
- [Using setAppElement](https://codepen.io/claydiffrient/pen/ENegGJ)
- [Using onRequestClose](https://codepen.io/claydiffrient/pen/KNjVBx)
- [Using shouldCloseOnOverlayClick](https://codepen.io/claydiffrient/pen/woLzwo)
- [Using inline styles](https://codepen.io/claydiffrient/pen/ZBmyKz)
- [Using CSS classes for styling](https://codepen.io/claydiffrient/pen/KNjVrG)
- [Customizing the default styles](https://codepen.io/claydiffrient/pen/pNXgqQ)
