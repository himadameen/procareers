import React, { useEffect, useContext } from 'react';
import { dataContext } from './Context';



const ChildB = () => {
    const temp = useContext(dataContext)

    const callapi = async () => {
        let url = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&page=1&per_page=10&sparkline=false`);
        let response = await url.json();
        temp.setData(response);
    }

    useEffect(() => {
        callapi();
    }, [])


    return (
        <>
            <div className='full'>
                <div className='head'>
                    <h1>Top 10  <span>International Stocks</span></h1>
                </div>
                <div className='data'>
                    <div className='dataHead'>
                        <div>Name</div>
                        <div>Current Price</div>
                        <div>Market Cap</div>
                        <div>Rank</div>
                    </div>
                    {temp.data.map((item, index) => (
                        <>
                            <div className='dataDetails'>
                                <div key={index + 1}></div>
                                <div id='name'>{item.name}</div>
                                <div id='c-price'>{item.current_price}</div>
                                <div id='percent'>{item.price_change_percentage_24h.toFixed(2)}</div>
                                <div id='rank'>{item.market_cap_rank}</div>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </>
    )
}

export default ChildB;