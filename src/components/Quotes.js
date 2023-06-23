import React from "react";

const Quotes = () => {
return (
<div id="quote-box">
    <div id="text">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam facere nobis quidem minus corporis
            incidunt
            sit nesciunt non libero?
        </p>
        <br />
        <div id="author">
            <p>John Doe</p>
        </div>
        <div id="buttons">
            <div className="social-media">
                <a href="#" id="tweet-quote">
                    <span><img src="" alt="" /></span>
                </a>
                <a href="#" id="tumlr-quote">
                    <span><img src="" alt="" /></span>
                </a>
            </div>
            <button id="new-quote">New Quote</button>
        </div>
    </div>
</div>
)
};

export default Quotes;