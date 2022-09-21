import React, { Component } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";

let options = [
  {
    title: "Most popular",
    titleIcon: <i className="fa fa-paragraph"></i>,
    // hideBorder: true,
    content: [
     
      {
        id: 2,
        name: "NDHS",
        icon: <i className="fa fa-chrome"></i>,
        children: [
          {
            id: "10",
            name: "Countries",
            icon: <i className="fa fa-paper-plane"></i>,
            content: [
              {
                id: 11,
                // icon: <i className="fa fa-paper-plane"></i>,
                name: "View-Data",
                children: [
                  {
                    title: "Present Development",
                    content: [
                      {
                        id: 20,
                        icon: <i className="fa fa-refresh"></i>,
                        // disabled: true,
                        name: "Present Development",
                      },
                    ],
                  },
                  {
                    title: "Prospective Development",
                    content: [
                      {
                        id: 21,
                        icon: <i className="fa fa-refresh"></i>,
                        // disabled: true,
                        name: "Prospective Development",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      
      {
        id: 5,
        name: "Home",
        icon: <i className="fa fa-sellsy"></i>,
        
      },
      {
        id: 6,
        name: "Data & Analytics",
        icon: <i className="fa fa-database"></i>,
      },
    ],
  },
];

class Drawer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  //   you can also use this function on any of your event to open/close the sidebar
  handleSidebarToggle = (isOpen) => {
    this.setState({ isOpen });
  };

  handleClick = (itemOptions) => {
    /* 
        do something with the item you clicked.
        you can also send custom properties of your choice
        in the options array you'll be getting those here
        whenever you click that item
    */
  };

  render() {
    return (
      <div style={{ width: "100px" }}>
        <MultilevelSidebar
          open={true}
          onToggle={this.handleSidebarToggle}
          options={options}
          header="React-MultiLevel-Sidebar"
          onItemClick={this.handleClick}
        />
        {/* using in our button to open the sidebar */}
        <button onClick={() => this.handleSidebarToggle(true)}>open</button>
      </div>
    );
  }
}

export default Drawer;
