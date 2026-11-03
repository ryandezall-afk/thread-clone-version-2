

// Assignment 2 - Threads Clone
// Context: TabBarContext (Manages global visibility state for animated bottom TabBar)

import React, { createContext, useContext, useState } from "react";

type TabBarContextType = {
    isTabBarVisible: boolean;
    setIsTabBarVisible: (visible: boolean) => void;
};

const TabBarContext = createContext<TabBarContextType>({
    isTabBarVisible: true,
    setIsTabBarVisible: () => {},
});

export const TabBarProvider = ({ children }: {children: React.ReactNode }) => {
    const [isTabBarVisible, setIsTabBarVisible] = useState(true);

    return (
        <TabBarContext.Provider value={{ isTabBarVisible, setIsTabBarVisible }}>
            {children}
        </TabBarContext.Provider>
    );
};

export const useTabBar = () => useContext(TabBarContext);