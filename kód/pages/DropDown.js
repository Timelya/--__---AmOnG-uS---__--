import { Dropdown } from "@nextui-org/react";

export default function App() {
  const menuItems = [
    { key: "new", name: "New File" },
    { key: "copy", name: "Copy Link" },
    { key: "edit", name: "Edit File" },
    { key: "delete", name: "Delete File" },
  ];

  return (
    <Dropdown
      select //converts to a dropdown
      label={props.label}
      name={props.name}
      onChange={props.changeHandler}
      value={props.currentValue}
    >
      <Dropdown.Button flat>Trigger</Dropdown.Button>
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
