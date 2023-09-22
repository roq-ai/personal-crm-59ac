import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RelationshipInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  user?: string;

  user_relationship_userTouser?: UserInterface;
  _count?: {};
}

export interface RelationshipGetQueryInterface extends GetQueryInterface {
  id?: string;
  user?: string;
}
