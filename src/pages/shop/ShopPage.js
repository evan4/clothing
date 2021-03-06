import React from 'react'
import {Route} from 'react-router-dom';

import './shoppage-style.scss';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';

const ShopPage = ({match}) => (
    <div className='collection-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);

export default ShopPage
