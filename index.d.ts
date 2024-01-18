import * as React from "react";

export = ReactModal;
export as namespace ReactModal;

declare namespace ReactModal {
  interface Styles {
    content?: React.CSSProperties | undefined;
    overlay?: React.CSSProperties | undefined;
  }

  interface Classes {
    afterOpen: string;
    base: string;
    beforeClose: string;
  }

  interface Aria {
    /** Identifies the element (or elements) that describes the object. */
    describedby?: string | undefined;
    /** Defines a string value that labels the current element. */
    labelledby?: string | undefined;
    /** Indicates whether an element is modal when displayed. */
    modal?: boolean | "false" | "true" | undefined;
  }

  /** Describes overlay and content element references passed to onAfterOpen function */
  interface OnAfterOpenCallbackOptions {
    /** content element reference */
    contentEl: HTMLDivElement;
    /** overlay element reference */
    overlayEl: Element;
  }

  /** Describes unction that will be run after the modal has opened */
  interface OnAfterOpenCallback {
    (obj?: OnAfterOpenCallbackOptions): void;
  }

  interface Props {
    /* Set this to properly hide your application from assistive screenreaders and other assistive technologies while the modal is open. */
    appElement?:
      | HTMLElement
      | HTMLElement[]
      | HTMLCollection
      | NodeList
      | undefined;

    /* Additional aria attributes. */
    aria?: Aria | undefined;

    /* Boolean indicating if the appElement should be hidden. Defaults to true. */
    ariaHideApp?: boolean | undefined;

    /* String className to be applied to the document.body (must be a constant string). When set to null it doesn't add any class to document.body. */
    bodyOpenClassName?: string | null | undefined;

    children?: React.ReactNode;

    /* String or object className to be applied to the modal content. */
    className?: string | Classes | undefined;

    /* Number indicating the milliseconds to wait before closing the modal. Defaults to zero (no timeout). */
    closeTimeoutMS?: number | undefined;

    /* Custom Content element. */
    contentElement?:
      | ((
          props: React.ComponentPropsWithRef<"div">,
          children: React.ReactNode,
        ) => React.ReactElement)
      | undefined;

    /* String indicating how the content container should be announced to screenreaders. */
    contentLabel?: string | undefined;

    /* Function accepting the ref for the content */
    contentRef?: ((instance: HTMLDivElement) => void) | undefined;

    /* Additional data attributes to be applied to to the modal content in the form of "data-*" */
    data?: any;

    /* String className to be applied to the document.html (must be a constant string). Defaults to null. */
    htmlOpenClassName?: string | null | undefined;

    /* String value of an id attribute to be applied to the modal content */
    id?: string | undefined;

    /* Boolean describing if the modal should be shown or not. Defaults to false. */
    isOpen: boolean;

    /* Function that will be run after the modal has closed. */
    onAfterClose?(): void;

    /* Function that will be run after the modal has opened. */
    onAfterOpen?: OnAfterOpenCallback | undefined;

    /* Function that will be run when the modal is requested to be closed, prior to actually closing. */
    onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;

    /* String or object className to be applied to the overlay. */
    overlayClassName?: string | Classes | undefined;

    /* Custom Overlay element. */
    overlayElement?:
      | ((
          props: React.ComponentPropsWithRef<"div">,
          contentEl: React.ReactElement,
        ) => React.ReactElement)
      | undefined;

    /* Function accepting the ref for the overlay */
    overlayRef?: ((instance: HTMLDivElement) => void) | undefined;

    /* Function that will be called to get the parent element that the modal will be attached to. */
    parentSelector?(): HTMLElement;

    /* String className to be applied to the portal. Defaults to "ReactModalPortal". */
    portalClassName?: string | undefined;

    /* Boolean indicating if the modal should use the preventScroll flag when restoring focus to the element that had focus prior to its display. */
    preventScroll?: boolean | undefined;

    /* String indicating the role of the modal, allowing the 'dialog' role to be applied if desired. Defaults to "dialog". */
    role?: string | null | undefined;

    /* Boolean indicating if pressing the esc key should close the modal */
    shouldCloseOnEsc?: boolean | undefined;

    /* Boolean indicating if the overlay should close the modal. Defaults to true. */
    shouldCloseOnOverlayClick?: boolean | undefined;

    /* Boolean indicating if the modal should be focused after render */
    shouldFocusAfterRender?: boolean | undefined;
    /* Boolean indicating if the modal should restore focus to the element that had focus prior to its display. */
    shouldReturnFocusAfterClose?: boolean | undefined;

    /* Object indicating styles to be used for the modal, divided into overlay and content styles. */
    style?: Styles | undefined;

    /* String value of data-test-id attibute to be applied to to the modal content. */
    testId?: string | undefined;
  }
}

declare class ReactModal extends React.Component<ReactModal.Props> {
  /* Override base styles for all instances of this component. */
  static defaultStyles: ReactModal.Styles;
  /**
   * Call this to properly hide your application from assistive screenreaders
   * and other assistive technologies while the modal is open.
   */
  static setAppElement(appElement: string | HTMLElement): void;

  portal: null | {
    content: null | HTMLDivElement;
    overlay: null | HTMLDivElement;
  };
}
