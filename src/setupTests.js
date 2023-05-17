// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// from https://stackoverflow.com/questions/57344544/testing-ag-grid-with-testing-library-react/57364857#57364857
// doesn't seem to make a difference
// Object.defineProperty(global.window.Element.prototype, 'innerText', {
//   set(value) {
//     this.textContent = value;
//   },
//   configurable: true
// });import { jestPreviewConfigure } from 'jest-preview'
// TODO: To add your global css here
import "./index.css";
