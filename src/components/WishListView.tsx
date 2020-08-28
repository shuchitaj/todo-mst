import React from "react";
import { observer } from "mobx-react";

import WishListItemView from "./WishListItemView";
import WishListItemEntry from "./WishListItemEntry";

const WishListView = ({ wishList, readonly }) => (
  <div className="list">
    <ul>
      {wishList.items.map((item: any, idx: any) => (
        <WishListItemView key={idx} item={item} readonly={readonly} />
      ))}
    </ul>
    Total: {wishList.totalPrice} €
    {!readonly && <WishListItemEntry wishList={wishList} />}
    <WishListItemEntry wishList={wishList} />
  </div>
);

export default observer(WishListView);
