import { useState } from "react";
import './quote.css'

const quotes = [
    "Believe in yourself and all that you are.",
    "Dream big. Work hard. Stay focused.",
    "Success is not final, failure is not fatal.",
    "Keep going. Everything you need will come to you.",
    "You are capable of amazing things.",
    "Push yourself, because no one else is going to do it for you.",
    "Don't stop until you're proud.",
    "Great things never came from comfort zones.",
    "Make today count.",
    "Do it with passion or not at all.",
    "Doubt kills more dreams than failure ever will.",
    "Stay positive, work hard, make it happen.",
    "You don’t have to be perfect to be amazing.",
    "Start where you are. Use what you have. Do what you can.",
    "Turn your wounds into wisdom.",
    "You are stronger than your excuses.",
    "Be fearless in the pursuit of what sets your soul on fire.",
    "Little by little, a little becomes a lot.",
    "You’ve got this.",
    "Hustle in silence. Let success make the noise."
];

export default function QuoteGenerator() {
    const [quote, setQuote] = useState(quotes[0]);
  
    const getNewQuote = () => {
      const random = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[random]);
};
return (
    <div className="quote-wrapper">
      <div className="quote-box">
        <h2 className="quote-text">{quote}</h2>
        <button onClick={getNewQuote} className="quote-btn">New Quote</button>
      </div>
    </div>
  );
}