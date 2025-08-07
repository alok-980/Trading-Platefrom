import React from 'react';

function PricingHero() {
    return (
        <div className='container mt-4 mb-5'>
            <div className='row border-bottom text-center p-3'>
                <h1 className='mb-3'>Pricing</h1>
                <h3 className='mb-5 text-muted fs-4'>
                    Free equity investments and flat ₹20 intraday and F&O trades.
                </h3>
            </div>
            <div className='row mt-2 text-center'>
                <div className='col-12 col-md-4 p-4'>
                    <img src='media/images/pricingEquity.svg' alt='Pricing Equity logo' />
                    <h3>Free equity delivery</h3>
                    <p>
                        All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                    </p>
                </div>
                <div className='col-12 col-md-4 p-4'>
                    <img src='media/images/intradayTrades.svg' alt='Intraday Trades logo' />
                    <h3>Intraday and F&O trades</h3>
                    <p>
                        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
                    </p>
                </div>
                <div className='col-12 col-md-4 p-4'>
                    <img src='media/images/pricingMF.svg' alt='Pricing Mutual Funds logo' />
                    <h3>Free direct mutual funds</h3>
                    <p>
                        All direct mutual fund investments are absolutely free — ₹0 commissions and DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PricingHero;
