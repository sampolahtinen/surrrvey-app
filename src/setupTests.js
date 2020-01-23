// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

// this is where we reference the adapter package we installed
// earlier
// This sets up the adapter to be used by Enzyme
configure({ adapter: new Adapter() });
