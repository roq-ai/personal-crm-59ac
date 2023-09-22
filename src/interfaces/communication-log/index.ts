import { GetQueryInterface } from 'interfaces';

export interface CommunicationLogInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CommunicationLogGetQueryInterface extends GetQueryInterface {
  id?: string;
}
