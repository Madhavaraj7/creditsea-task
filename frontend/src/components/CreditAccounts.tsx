import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { Report } from "../types/reportTypes";

const CreditAccounts = ({
  report,
  currentPage,
  onPageChange,
}: {
  report: Report;
  currentPage: number;
  onPageChange: (e: any, value: number) => void;
}) => {
  const creditsPerPage = 5;
  const indexOfLastCredit = currentPage * creditsPerPage;
  const indexOfFirstCredit = indexOfLastCredit - creditsPerPage;
  const currentCredits = report.creditAccounts.slice(
    indexOfFirstCredit,
    indexOfLastCredit
  );

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1E88E5" }}
        >
          Credit Accounts
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "#f5f5f5" }}>
              <TableRow>
                <TableCell>
                  <strong>Credit Card</strong>
                </TableCell>
                <TableCell>
                  <strong>Bank</strong>
                </TableCell>
                <TableCell>
                  <strong>Account Number</strong>
                </TableCell>
                <TableCell>
                  <strong>Amount Overdue</strong>
                </TableCell>
                <TableCell>
                  <strong>Current Balance</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentCredits.map((account, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:nth-of-type(even)": { bgcolor: "#f9f9f9" } }}
                >
                  <TableCell>{account.creditCard}</TableCell>
                  <TableCell>{account.bank}</TableCell>
                  <TableCell>{account.accountNumber}</TableCell>
                  <TableCell>{account.amountOverdue}</TableCell>
                  <TableCell>{account.currentBalance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Pagination
        count={Math.ceil(report.creditAccounts.length / creditsPerPage)}
        page={currentPage}
        onChange={onPageChange}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
          "& .MuiPaginationItem-root": {
            bgcolor: "#1E88E5",
            color: "white",
            "&:hover": { bgcolor: "#1565C0" },
          },
          "& .Mui-selected": {
            bgcolor: "#1565C0",
          },
        }}
      />
      <br />
    </Card>
  );
};

export default CreditAccounts;
