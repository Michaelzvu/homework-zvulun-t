import React from 'react';
import { mission } from '../shared/data';

import './MissionsGrid.css';

interface MissionsGridProps {
  data: Array<mission>;
}

export const MissionsGrid = (props: MissionsGridProps) => {
  const { data } = props;

  data.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="missions-grid">
      <table>
        <thead>
          <th>Agent ID</th>
          <th>Country</th>
          <th>Address</th>
          <th>Date</th>
        </thead>
        <tbody>
        {data.map(mission => (
          <tr key={mission.date}>
            <td>{mission.agent}</td>
            <td>{mission.country}</td>
            <td>{mission.address}</td>
            <td>{mission.date}</td>
          </tr>
        ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={100}>{`${data.length} missions`}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
