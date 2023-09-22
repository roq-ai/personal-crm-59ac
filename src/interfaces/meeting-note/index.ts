import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MeetingNoteInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  date?: any;
  user?: string;

  user_meeting_note_userTouser?: UserInterface;
  _count?: {};
}

export interface MeetingNoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  user?: string;
}
