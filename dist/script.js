import React from "https://esm.sh/react@17.0.1";
import ReactDOM from "https://esm.sh/react-dom@17.0.1";

// Importing Libraries so React works in codepen

// All Quotes Array, array of objects

const quoteData = [
{
  text: "Coding like poetry should be short and concise.",
  author: "Santosh Kalwar",
  color: "#5F0F40" },

{
  text: "It’s not a bug; it’s an undocumented feature.",
  author: "Linus Torvals",
  color: "#9A031E" },

{
  text: "First, solve the problem. Then, write the code.",
  author: "John Johnson",
  color: "#FB8B24" },

{
  text: "Code is like humor. When you have to explain it, it’s bad.",
  author: "Cory House",
  color: "#E36414" },

{
  text: "Make it work, make it right, make it fast.",
  author: "Kent Beck",
  color: "#0F4C5C" }];



// QuoteBox element
const QuoteBox = ({ quote, handleNewQuote }) => /*#__PURE__*/
// quote for the quotes
React.createElement("div", null, /*#__PURE__*/
React.createElement("main", { id: "quote-box" }, /*#__PURE__*/
React.createElement("h1", { id: "text" }, /*#__PURE__*/
React.createElement("i", { className: "fa-solid fa-quote-left" }), " ", quote.text), /*#__PURE__*/

React.createElement("h2", { id: "author" }, "- ", quote.author), /*#__PURE__*/

React.createElement("div", { className: "action" }, /*#__PURE__*/
React.createElement("div", { className: "link" }, /*#__PURE__*/
React.createElement("a", {
  id: "tweet-quote",
  href: "twitter.com/intent/tweet",
  target: "_blank",
  className: "btn" }, /*#__PURE__*/

React.createElement("i", { className: "fa-brands fa-twitter" })), /*#__PURE__*/


React.createElement("a", { className: "btn", href: "https://www.tumblr.com/" }, /*#__PURE__*/
React.createElement("i", { className: "fa-brands fa-tumblr" }))), /*#__PURE__*/



React.createElement("button", { id: "new-quote", onClick: handleNewQuote }, "New Quote"))), /*#__PURE__*/




React.createElement("p", null, "by The Page Guy"));



// Create Random Number
const num = () => Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);

// React App
const App = () => {
  // Generate the Quotes data
  const [quote, setQuote] = React.useState(quoteData[num()]);

  // Change Background Color
  const changeBg = index => {
    let r = document.querySelector(":root");
    r.style.setProperty("--bg", quoteData[index].color);
  };

  // Makes the new quote buttons work
  const handleNewQuote = () => {
    setQuote(quoteData[num()]);
    changeBg(num());
  };

  // Layout of App
  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement(QuoteBox, { quote: quote, handleNewQuote: handleNewQuote })));


};

// Rendering React elements to html
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));