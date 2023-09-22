import { GetQueryInterface } from 'interfaces';

export interface ReminderInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ReminderGetQueryInterface extends GetQueryInterface {
  id?: string;
}
