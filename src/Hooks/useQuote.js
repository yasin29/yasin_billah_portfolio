import { useEffect, useState } from "react";

const useQuote = () => {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])
    return [quotes];
};

export default useQuote;