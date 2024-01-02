import { createContext, useContext, useState } from "react";

export const MusicContext = createContext();


export const MusicContextProvider = ({ children }) => {
    const [music, setMusic] = useState([]);

    return (
        <MusicContext.Provider value={{ music, setMusic }}>
            {children}
        </MusicContext.Provider>
    )
}


export const useMusic = () => {
    return useContext(MusicContext)
}