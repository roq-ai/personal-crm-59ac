import axios from 'axios';
import queryString from 'query-string';
import { CommunicationLogInterface, CommunicationLogGetQueryInterface } from 'interfaces/communication-log';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCommunicationLogs = async (
  query?: CommunicationLogGetQueryInterface,
): Promise<PaginatedInterface<CommunicationLogInterface>> => {
  const response = await axios.get('/api/communication-logs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCommunicationLog = async (communicationLog: CommunicationLogInterface) => {
  const response = await axios.post('/api/communication-logs', communicationLog);
  return response.data;
};

export const updateCommunicationLogById = async (id: string, communicationLog: CommunicationLogInterface) => {
  const response = await axios.put(`/api/communication-logs/${id}`, communicationLog);
  return response.data;
};

export const getCommunicationLogById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/communication-logs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCommunicationLogById = async (id: string) => {
  const response = await axios.delete(`/api/communication-logs/${id}`);
  return response.data;
};
