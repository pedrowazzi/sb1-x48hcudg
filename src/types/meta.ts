export interface MetaAction {
  action_type: string;
  value: string;
}

export interface MetaActionValue {
  action_type: string;
  value: string;
}

export interface MetaInsightsData {
  data: Array<{
    spend: string;
    actions?: MetaAction[];
    action_values?: MetaActionValue[];
  }>;
}