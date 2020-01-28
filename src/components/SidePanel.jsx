import React from 'react';
import { Menu, Sidebar, Dropdown } from 'semantic-ui-react';

const dropDownOptions =[
    {
      key: "1",
      text: "Anil Kumar",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
      }
    },
    {
      key: "2",
      icon: "wrench",
      text: "Settings"
    },
    {
      key: "3",
      icon: "log out",
      text: "Logout"
    }
];

const SidePanel = () => (
    <Sidebar
      as={Menu}
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    > 
      <Dropdown item icon='user' simple direction='left'>
        <Dropdown.Menu>
            {dropDownOptions.map(option => <Dropdown.Item {...option} /> )}
        </Dropdown.Menu>
      </Dropdown>
    </Sidebar>
)

export default SidePanel;
