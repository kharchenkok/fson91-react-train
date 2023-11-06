import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard/EventBoard';

import upcomingEvents from '../upcoming-events.json';

export default function App() {
  return (
    <>
      <PageTitle title="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
}
