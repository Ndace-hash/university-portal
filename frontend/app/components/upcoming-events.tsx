import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'International Student Orientation',
    date: 'January 13, 2025',
    time: '1:00 AM - 3:30 PM',
    location: 'Student Center',
    status: 'Upcoming',
  },
  {
    id: '2',
    title: 'International Student Orientation',
    date: 'January 13, 2025',
    time: '1:00 AM - 3:30 PM',
    location: 'Student Center',
    status: 'Upcoming',
  },
  {
    id: '3',
    title: 'International Student Orientation',
    date: 'January 13, 2025',
    time: '1:00 AM - 3:30 PM',
    location: 'Student Center',
    status: 'Upcoming',
  },
];

export function UpcomingEvents() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="border-l-4 border-l-blue-500 bg-gray-100 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          <Button
            variant="outline"
            className="border-gray-400 text-gray-700 hover:bg-gray-200"
          >
            View Calendar
          </Button>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-start justify-between border-b border-gray-300 pb-6 last:border-b-0"
            >
              <div className="flex-1">
                <h3 className="mb-3 font-semibold text-gray-900">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              {event.status && (
                <span className="ml-4 inline-block rounded-full bg-gray-500 px-3 py-1 text-sm font-medium text-white">
                  {event.status}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
