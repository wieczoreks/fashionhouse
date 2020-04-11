import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import {shopData} from './shop-data'

class ShopPage extends Component {
    constructor(props){
        super(props)
    this.state = {
        collections:shopData
    }
    }
    render() {
        const {collections} = this.state
        return (
            <div className="shop-page">
            {collections.map(({id, ...rest}) =>(
                <CollectionPreview key={id} {...rest} />
            ))}

            </div>
        )
    }
}

export default ShopPage
