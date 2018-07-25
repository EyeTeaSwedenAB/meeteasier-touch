import React from 'react';
import PropTypes from 'prop-types';

import Clock from './Clock';

const Sidebar = props => (
  <div className="columns small-4 right-col">
    <div id="single-room__clock-wrap">
      <Clock />
    </div>
    <div id="upcoming-title">
      {props.config.upcomingTitle}
    </div>
    <table>
      { props.details.upcomingTable ?
        props.room.Appointments.slice(1).map((item, key) => {
          return (
            <tr>
              <td className="up__meeting-title">{item.Subject}</td>
              <td className="up__meeting-time" width="44%">
                { item.Start && item.End ?
                  new Date(parseInt(item.Start, 10)).toLocaleTimeString([], {weekday: 'short', hour: '2-digit', minute: '2-digit'}) + ' - ' + new Date(parseInt(item.End, 10)).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
                :
                  ''
                }
              </td>
            </tr>
          );
        })
      :
        ''
      }
    </table>
  </div>
);

Sidebar.propTypes = {
  room: PropTypes.array,
  details: PropTypes.object,
  config: PropTypes.object
}

export default Sidebar;
