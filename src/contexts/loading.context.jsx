import SpinFC from "antd/lib/spin";
import { createContext, useEffect, useState } from "react";
import { WrapperSpin } from "./styled";

const DEFAULT_VALUE = {
    isLoading: false,
}

const LoadingContext = createContext(DEFAULT_VALUE);

const LoadingProvider = (props) => {
    const [state, setState] = useState(DEFAULT_VALUE);

    const style = {
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        zIndex: "1",
        background: "#ffffff63",
    }

    useEffect(() => {
        if (state.isLoading) {
            document.querySelector("body").style.overflow = 'hidden';
        } else {
            document.querySelector("body").style.overflow = 'auto';
        }
    }, [state.isLoading])

    return <LoadingContext.Provider value={[state, setState]}>
        {state.isLoading && (
            <WrapperSpin viewHeigh= "100vh">
                    <SpinFC></SpinFC>
            </WrapperSpin>
        )}

        {props.children}
    </LoadingContext.Provider>
};

export { LoadingContext, LoadingProvider };