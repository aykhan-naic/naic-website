import { type UseInViewOptions } from 'motion/react';

export default interface IUseIsInViewOptions {
  inView?: boolean;
  inViewOnce?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
}