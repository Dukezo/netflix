import React from 'react';
import { BsBellFill } from 'react-icons/bs';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import './NavbarNotifications.css';

interface Props {}

const items = [
  {
    image:
      'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR5iOt8fgcMlpmSES_Tny9cpR7YPRXVDN7cqlufWV19qFFziltKS0UsZTOSANYGPrPHGFzIyYPM_9HklhONf2r4.jpg?r=ac4',
    title: 'Rewatch your favorite moments<br />See what you have watched',
    time: '1 month ago',
  },
  {
    image:
      'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR5iOt8fgcMlpmSES_Tny9cpR7YPRXVDN7cqlufWV19qFFziltKS0UsZTOSANYGPrPHGFzIyYPM_9HklhONf2r4.jpg?r=ac4',
    title: 'Rewatch your favorite moments<br />See what you have watched',
    time: '1 month ago',
  },
  {
    image:
      'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR5iOt8fgcMlpmSES_Tny9cpR7YPRXVDN7cqlufWV19qFFziltKS0UsZTOSANYGPrPHGFzIyYPM_9HklhONf2r4.jpg?r=ac4',
    title: 'Rewatch your favorite moments<br />See what you have watched',
    time: '1 month ago',
  },
  {
    image:
      'https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR5iOt8fgcMlpmSES_Tny9cpR7YPRXVDN7cqlufWV19qFFziltKS0UsZTOSANYGPrPHGFzIyYPM_9HklhONf2r4.jpg?r=ac4',
    title: 'Rewatch your favorite moments<br />See what you have watched',
    time: '1 month ago',
  },
];

const NavbarNotifications = (props: Props) => {
  return (
    <div className="NavbarNotifications">
      <NavbarDropdown trigger={<BsBellFill />}>
        {items.map(({ image, title, time }, idx) => (
          <div key={idx} className="NavbarNotifications__item">
            <img
              className="NavbarNotifications__itemImage"
              src={image}
              alt={title}
            />
            <div className="NavbarNotifications__itemInfo">
              <div
                className="NavbarNotifications__itemTitle"
                dangerouslySetInnerHTML={{ __html: title }}
              >
                {}
              </div>
              <div className="NavbarNotifications__itemTime">{time}</div>
            </div>
          </div>
        ))}
      </NavbarDropdown>
    </div>
  );
};

export default NavbarNotifications;
