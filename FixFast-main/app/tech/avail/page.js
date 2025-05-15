"use client"
import { Calendar, Clock, Check, X } from 'lucide-react';
import { useState } from 'react';

export default function TechnicianAvailability() {
  const [availability, setAvailability] = useState({
    Monday: { available: true, slots: ['09:00-12:00', '14:00-18:00'] },
    Tuesday: { available: true, slots: ['09:00-12:00', '14:00-18:00'] },
    Wednesday: { available: true, slots: ['09:00-12:00'] },
    Thursday: { available: false, slots: [] },
    Friday: { available: true, slots: ['09:00-12:00', '14:00-18:00'] },
    Saturday: { available: false, slots: [] },
    Sunday: { available: false, slots: [] },
  });

  const [newSlot, setNewSlot] = useState({
    day: 'Monday',
    startTime: '09:00',
    endTime: '12:00'
  });

  const handleDayToggle = (day) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        available: !prev[day].available,
        slots: !prev[day].available ? [] : prev[day].slots
      }
    }));
  };

  const addSlot = () => {
    if (newSlot.startTime && newSlot.endTime) {
      const slotString = `${newSlot.startTime}-${newSlot.endTime}`;
      setAvailability(prev => ({
        ...prev,
        [newSlot.day]: {
          ...prev[newSlot.day],
          slots: [...prev[newSlot.day].slots, slotString]
        }
      }));
      setNewSlot({
        ...newSlot,
        startTime: '09:00',
        endTime: '12:00'
      });
    }
  };

  const removeSlot = (day, slotIndex) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.filter((_, index) => index !== slotIndex)
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center">
            <Calendar className="w-6 h-6 mr-2 text-blue-600" />
            Manage Your Availability
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Set your working days and time slots when you're available for service calls
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              {Object.entries(availability).map(([day, data]) => (
                <div key={day} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-medium">{day}</h3>
                    <button
                      onClick={() => handleDayToggle(day)}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        data.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {data.available ? 'Available' : 'Unavailable'}
                    </button>
                  </div>

                  {data.available && (
                    <div>
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Time Slots
                        </h4>
                        <div className="space-y-2">
                          {data.slots.length > 0 ? (
                            data.slots.map((slot, index) => (
                              <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
                                <span>{slot}</span>
                                <button
                                  onClick={() => removeSlot(day, index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))
                          ) : (
                            <p className="text-sm text-gray-500">No slots added for this day</p>
                          )}
                        </div>
                      </div>

                      {day === newSlot.day && (
                        <div className="flex items-center space-x-2">
                          <input
                            type="time"
                            value={newSlot.startTime}
                            onChange={(e) => setNewSlot({...newSlot, startTime: e.target.value})}
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                          />
                          <span>to</span>
                          <input
                            type="time"
                            value={newSlot.endTime}
                            onChange={(e) => setNewSlot({...newSlot, endTime: e.target.value})}
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                          />
                          <button
                            onClick={addSlot}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                          >
                            Add
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Add New Slot</h3>
              <div className="flex items-center space-x-4">
                <select
                  value={newSlot.day}
                  onChange={(e) => setNewSlot({...newSlot, day: e.target.value})}
                  className="border border-gray-300 rounded px-3 py-2"
                >
                  {Object.keys(availability).map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <div className="flex items-center space-x-2">
                  <input
                    type="time"
                    value={newSlot.startTime}
                    onChange={(e) => setNewSlot({...newSlot, startTime: e.target.value})}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                  <span>to</span>
                  <input
                    type="time"
                    value={newSlot.endTime}
                    onChange={(e) => setNewSlot({...newSlot, endTime: e.target.value})}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
                <button
                  onClick={addSlot}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
                >
                  <Check className="w-4 h-4 mr-1" />
                  Add Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}