import { Card, CardContent, Typography } from "@mui/material";
import { Report } from "../types/reportTypes";

const BasicDetails = ({ report }: { report: Report }) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#1E88E5' }}>
          Basic Details
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {report.basicDetails.name}
        </Typography>
        <Typography variant="body1">
          <strong>Mobile:</strong> {report.basicDetails.mobile}
        </Typography>
        <Typography variant="body1">
          <strong>PAN:</strong> {report.basicDetails.pan || "Not Available"}
        </Typography>
        <Typography variant="body1">
          <strong>Credit Score:</strong> {report.basicDetails.creditScore}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BasicDetails;
