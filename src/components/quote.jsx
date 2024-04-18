import React, { useEffect } from "react";

function Quote(){
    const quotes = [
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "Your time is limited, don't waste it living someone else's life.",
            author: "Steve Jobs"
        },
        {
            text: "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            author: "Mother Teresa"
        },
        {
            text: "In the end, it's not the years in your life that count. It's the life in your years.",
            author: "Abraham Lincoln"
        },
        {
            text: "Life is either a daring adventure or nothing at all.",
            author: "Helen Keller"
        },
        {
            text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
            author: "Thomas A. Edison"
        }
    ];

    useEffect(()=>{
        const interval = setInterval(()=>{
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            document.getElementById("quoteText").textContent = `"${quote.text}"`;
            document.getElementById("authorText").textContent = `- ${quote.author}`;
        },1000);
        return () => clearInterval(interval);
    },[]);

    return(
        <>
            <div className="flex">
                <div className="animate-fade-in" >
                    <p className=" quote-text text-lg text-gray-700 mb-4" id="quoteText">Spread love everywhere you go. Let no one ever come to you without leaving happier.</p>
                    <p className="author-text text-sm text-gray-600 " id="authorText">กุเอง</p>               
                </div>
        
            </div>
            
        </>
    )


}
export default Quote