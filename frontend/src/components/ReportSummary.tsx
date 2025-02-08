import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Report } from '../types/reportTypes';

const ReportSummary = ({ report }: { report: Report }) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1E88E5' }}>
          Report Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Total Accounts:</strong> {report.reportSummary.totalAccounts}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Active Accounts:</strong> {report.reportSummary.activeAccounts}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Closed Accounts:</strong> {report.reportSummary.closedAccounts}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Current Balance:</strong> {report.reportSummary.currentBalance}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Secured Amount:</strong> {report.reportSummary.securedAmount}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Unsecured Amount:</strong> {report.reportSummary.unsecuredAmount}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <strong>Last 7 Days Enquiries:</strong> {report.reportSummary.last7DaysEnquiries}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReportSummary;