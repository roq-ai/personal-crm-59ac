const mapping: Record<string, string> = {
  'communication-logs': 'communication_log',
  'meeting-notes': 'meeting_note',
  organizations: 'organization',
  relationships: 'relationship',
  reminders: 'reminder',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
