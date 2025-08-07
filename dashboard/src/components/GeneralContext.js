import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { },
    
    openSellWindow: (uid) => { },
    closeSellWindow: () => { },
});

export const GeneralContextProvider = ({ children, userId }) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

    const [selectedStockUID, setSelectedStockUID] = useState("");

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    };

    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow,
            }}
        >
            {children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} userId={userId} />}
            {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} userId={userId} />}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;