import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import React from 'react'

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
        {collections.map(({id, ...rest}) =>(
            <CollectionPreview key={id} {...rest} />
        ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
