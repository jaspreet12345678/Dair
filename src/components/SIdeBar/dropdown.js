import React from "react";

import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";

const Drop = () => {
  const data = {
    label: "search me",
    value: "searchme",
   link : './network',
    children: [
      {
        label: "search me too",
        value: "searchmetoo",
        children: [
          {
            label: "No one can get me",
            value: "anonymous",
          },
        ],
      },
    ],
  };

  const onChange = (currentNode, selectedNodes) => {
    console.log("onChange::", currentNode, selectedNodes);
  };
  const onAction = ({ action, node }) => {
    console.log(`onAction:: [${action}]`, node);
  };
  const onNodeToggle = (currentNode) => {
    console.log("onNodeToggle::", currentNode);
  };

  return (
    <DropdownTreeSelect
      data={data}
      onChange={onChange}
      onAction={onAction}
      onNodeToggle={onNodeToggle}
    />
  );
};

export default Drop;
