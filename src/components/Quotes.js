import React, {useState, useEffect} from "react";

const Quotes = () => {
 const [quote, setQuote] = useState('');
 const [author, setAuthor] = useState('');

 useEffect(() => {
    getQuote()
 }, [])

 const getQuote = () => {
    let url = 'https://type.fit/api/quotes';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let randomNum = Math.floor(Math.random() * data.length);
        let randomQuote = data[randomNum];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
      })
      .catch(error => {
        console.log('Error fetching quotes:', error);
      });
  };

  const handleClick = () => {
    getQuote()
  }

return (
<div id="quote-box">
    <div id="text">
        <p>
            {quote}
        </p>
        <br />
        <div id="author">
            <p>{author}</p>
        </div>
        <div id="buttons">
            <button onClick={handleClick} id="new-quote">New Quote</button>
        </div>
    </div>
</div>
)
};

export default Quotes;