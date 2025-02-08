export interface INProfileResponse {
    Current_Application: any;
    Header: Array<{ Name: string }>;
    UserMessage: Array<{ Mobile: string }>;
    CreditProfileHeader: Array<{
        Subscriber_Name: any; PAN: string 
}>;
    SCORE: Array<{
        BureauScore: any; score: string 
}>;
    TotalCAPS_Summary: Array<{
      TotalCAPSLast7Days: any;
      totalAccounts: string;
      activeAccounts: string;
      closedAccounts: string;
      currentBalance: string;
      securedAmount: string;
      unsecuredAmount: string;
      last7DaysEnquiries: string;
    }>;
    CAIS_Account: Array<{
      CAIS_Summary: any;
      CAIS_Account_DETAILS: any;
      creditCard: string;
      bank: string;
      address: string;
      accountNumber: string;
      amountOverdue: string;
      currentBalance: string;
    }>;
  }
  
  export interface ParsedXMLData {
    INProfileResponse: INProfileResponse;
  }
  