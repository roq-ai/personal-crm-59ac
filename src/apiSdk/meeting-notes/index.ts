import axios from 'axios';
import queryString from 'query-string';
import { MeetingNoteInterface, MeetingNoteGetQueryInterface } from 'interfaces/meeting-note';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMeetingNotes = async (
  query?: MeetingNoteGetQueryInterface,
): Promise<PaginatedInterface<MeetingNoteInterface>> => {
  const response = await axios.get('/api/meeting-notes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMeetingNote = async (meetingNote: MeetingNoteInterface) => {
  const response = await axios.post('/api/meeting-notes', meetingNote);
  return response.data;
};

export const updateMeetingNoteById = async (id: string, meetingNote: MeetingNoteInterface) => {
  const response = await axios.put(`/api/meeting-notes/${id}`, meetingNote);
  return response.data;
};

export const getMeetingNoteById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/meeting-notes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMeetingNoteById = async (id: string) => {
  const response = await axios.delete(`/api/meeting-notes/${id}`);
  return response.data;
};
