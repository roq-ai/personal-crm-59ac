interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member', 'End User'],
  tenantName: 'Organization',
  applicationName: 'Personal CRM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage relationship data', 'Manage meeting notes', 'Manage reminders', 'Manage communication logs'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5f4863d3-ef90-4a34-a28e-fdd0c9396ebf',
};
