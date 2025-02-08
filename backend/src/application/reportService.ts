import { saveReport, getReports } from "../infrastructure/reportRepository";
import { parseXML } from "../utils/xmlParser";

export const processReport = async (xmlData: string) => {
  try {

    const parsedData = await parseXML(xmlData);
    if (!parsedData.INProfileResponse) {
      throw new Error("Invalid XML structure: Missing INProfileResponse");
    }

    const applicantDetails =
      parsedData.INProfileResponse.Current_Application?.[0]
        ?.Current_Application_Details?.[0]?.Current_Applicant_Details?.[0];

    if (!applicantDetails) {
      throw new Error("Invalid XML structure: Missing Applicant Details");
    }

    const reportSummary =
      parsedData.INProfileResponse.CAIS_Account?.[0]?.CAIS_Summary?.[0];

    if (!reportSummary) {
      throw new Error("Invalid XML structure: Missing CAIS_Summary");
    }

    const totalOutstanding = reportSummary.Total_Outstanding_Balance?.[0];

    const report = {
      basicDetails: {
        name: `${applicantDetails.First_Name?.[0] || ""} ${
          applicantDetails.Last_Name?.[0] || ""
        }`.trim(),
        mobile: applicantDetails.MobilePhoneNumber?.[0] || null,
        pan:
          reportSummary.CAIS_Account_DETAILS?.[0]?.CAIS_Holder_Details?.[0]
            ?.Income_TAX_PAN?.[0] || null,
        creditScore:
          parsedData.INProfileResponse.SCORE?.[0]?.BureauScore?.[0] || null,
      },
      reportSummary: {
        totalAccounts:
          reportSummary.Credit_Account?.[0]?.CreditAccountTotal?.[0] || 0,
        activeAccounts:
          reportSummary.Credit_Account?.[0]?.CreditAccountActive?.[0] || 0,
        closedAccounts:
          reportSummary.Credit_Account?.[0]?.CreditAccountClosed?.[0] || 0,
        currentBalance: totalOutstanding?.Outstanding_Balance_All?.[0] || 0,
        securedAmount: totalOutstanding?.Outstanding_Balance_Secured?.[0] || 0,
        unsecuredAmount:
          totalOutstanding?.Outstanding_Balance_UnSecured?.[0] || 0,
        last7DaysEnquiries:
          parsedData.INProfileResponse.TotalCAPS_Summary?.[0]
            ?.TotalCAPSLast7Days?.[0] || 0,
      },
      creditAccounts:
        parsedData.INProfileResponse.CAIS_Account?.[0]?.CAIS_Account_DETAILS?.map(
          (account: any) => ({
            creditCard:
              account.Portfolio_Type?.[0] === "R" ? "Credit Card" : "Loan",
            bank: account.Subscriber_Name?.[0],
            accountNumber: account.Account_Number?.[0],
            amountOverdue: account.Amount_Past_Due?.[0] || 0,
            currentBalance: account.Current_Balance?.[0] || 0,
          })
        ) || [],
    };

    return await saveReport(report);
  } catch (error) {
    console.error("Error in processReport:", error.message);
    throw new Error("Error processing XML data: " + error.message);
  }
};

export const fetchReports = async () => await getReports();
