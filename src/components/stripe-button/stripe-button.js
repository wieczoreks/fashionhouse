import StripeCheckout from 'react-stripe-checkout'

import React from 'react'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = 'pk_test_iUTaWqYeYNnJIfEsbY2qibkk007r8fsEk7'

    const onToken = token => {
        console.log(token)
        alert('Payments Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Fashion House Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your totla is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton
