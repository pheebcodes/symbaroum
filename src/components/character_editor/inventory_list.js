import Preact from "preact";
import {Map} from "immutable";
import classNames from "classnames";
import {SimpleBlockList} from "../block_list.js";
import {Input} from "../form.js";

const defaultItem = Map({
  name: "",
  description: ""
});

export function Item({className, value, onChange}) {
  return (
    <div className={classNames("item", className)}>
      <Input label="Name" value={value.get("name")}
        onChange={(v) => onChange(value.set("name", v))} />
      <Input label="Description" value={value.get("description")}
        onChange={(v) => onChange(value.set("description", v))} />
    </div>
  );
}

export const InventoryList = SimpleBlockList(Item, defaultItem, {
  addLabel: "Add Item",
  className: "inventory-list"
});
