import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";
import React from 'react'

const WithSpinner = (WrappedComponent) => ({isLoading, ...rest})=>{
    return isLoading? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ): (
        <WrappedComponent {...rest} />
    )
}

export default WithSpinner
