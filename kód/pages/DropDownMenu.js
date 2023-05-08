import React from "react";
import { Dropdown } from "@nextui-org/react";




const DropDownMenu = () => {
    const menuItems = [
        { key: "new", name: "New File" },
        { key: "copy", name: "Copy Link" },
        { key: "edit", name: "Edit File" },
        { key: "delete", name: "Delete File" },
      ];
    return (
      <Dropdown>
      <Dropdown.Button flat>Select</Dropdown.Button>
      <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
        {(item) => (
          <Dropdown.Item
            key={item.key}
            color={item.key === "delete" ? "error" : "default"}
          >
            {item.name}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
    );
}

export default DropDownMenu;