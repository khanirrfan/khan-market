import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import Previewcollection from './../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {
 constructor(props) {
     super(props);
     this.state = {
         collections: SHOP_DATA
     }
 }
    render() {
        const {collections} = this.state;
        return (
            <div>
               {collections.map(({id, ...otherCollectionProps}) => (
                   <Previewcollection key ={id} {...otherCollectionProps}/>
               ))}
            </div>
        )
    }
}

export default ShopPage;
