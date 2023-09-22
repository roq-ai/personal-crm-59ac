import axios from 'axios';
import queryString from 'query-string';
import { RelationshipInterface, RelationshipGetQueryInterface } from 'interfaces/relationship';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRelationships = async (
  query?: RelationshipGetQueryInterface,
): Promise<PaginatedInterface<RelationshipInterface>> => {
  const response = await axios.get('/api/relationships', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRelationship = async (relationship: RelationshipInterface) => {
  const response = await axios.post('/api/relationships', relationship);
  return response.data;
};

export const updateRelationshipById = async (id: string, relationship: RelationshipInterface) => {
  const response = await axios.put(`/api/relationships/${id}`, relationship);
  return response.data;
};

export const getRelationshipById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/relationships/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRelationshipById = async (id: string) => {
  const response = await axios.delete(`/api/relationships/${id}`);
  return response.data;
};
