import { Report } from '../types/reportTypes';
import mongoose, { Schema } from 'mongoose';

const reportSchema = new Schema<Report>({
  basicDetails: {
    name: String,
    mobile: String,
    pan: String,
    creditScore: Number,
  },
  reportSummary: {
    totalAccounts: Number,
    activeAccounts: Number,
    closedAccounts: Number,
    currentBalance: Number,
    securedAmount: Number,
    unsecuredAmount: Number,
    last7DaysEnquiries: Number,
  },
  creditAccounts: [
    {
      creditCard: String,
      bank: String,
      address: String,
      accountNumber: String,
      amountOverdue: Number,
      currentBalance: Number,
    },
  ],
});

export default mongoose.model('Report', reportSchema);


