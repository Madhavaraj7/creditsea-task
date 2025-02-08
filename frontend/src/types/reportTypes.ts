export interface BasicDetails {
  name: string;
  mobile: string;
  pan: string;
  creditScore: number;
}

export interface ReportSummary {
  totalAccounts: number;
  activeAccounts: number;
  closedAccounts: number;
  currentBalance: number;
  securedAmount: number;
  unsecuredAmount: number;
  last7DaysEnquiries: number;
}

export interface CreditAccount {
  creditCard: string;
  bank: string;
  address: string;
  accountNumber: string;
  amountOverdue: number;
  currentBalance: number;
}

export interface Report {
  basicDetails: BasicDetails;
  reportSummary: ReportSummary;
  creditAccounts: CreditAccount[];
}
