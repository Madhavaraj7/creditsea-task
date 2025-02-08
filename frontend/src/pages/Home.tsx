import { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import { UploadFile, ArrowBack, ArrowForward } from "@mui/icons-material";
import FileUpload from "../components/FileUpload";
import BasicDetails from "../components/BasicDetails";
import ReportSummary from "../components/ReportSummary";
import CreditAccounts from "../components/CreditAccounts";
import { fetchReports } from "../api/reportApi";
import { Report } from "../types/reportTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [creditPage, setCreditPage] = useState(1);
  const reportsPerPage = 1;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await fetchReports();
        setReports(data);
      } catch (error) {
        toast.error("Failed to load reports");
      } finally {
        setLoading(false);
      }
    };
    loadReports();
  }, []);

  const handlePageChange = (direction: "next" | "prev") => {
    if (
      direction === "next" &&
      currentPage < Math.ceil(reports.length / reportsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCreditPageChange = (_event: any, value: number) => {
    setCreditPage(value);
  };

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  return (
    <Container sx={{ py: 6 }}>
      <ToastContainer position="top-center" autoClose={3000} />

      <Card
        sx={{
          mb: 4,
          p: 4,
          textAlign: "center",
          bgcolor: "#1976D2",
          color: "white",
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 1, fontFamily: "Roboto" }}
          >
            Credit Report Dashboard
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Upload and review your credit report instantly.
          </Typography>
          <Button
            variant="contained"
            startIcon={<UploadFile />}
            sx={{
              bgcolor: "white",
              color: "#1976D2",
              borderRadius: 2,
              fontWeight: "bold",
            }}
            onClick={() => setOpen(true)}
          >
            Upload Report
          </Button>
        </CardContent>
      </Card>

      {loading ? (
        <Typography variant="h6" textAlign="center" color="gray">
          Loading reports...
        </Typography>
      ) : (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <IconButton
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              sx={{ color: "#1976D2" }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={() => handlePageChange("next")}
              disabled={
                currentPage === Math.ceil(reports.length / reportsPerPage)
              }
              sx={{ color: "#1976D2" }}
            >
              <ArrowForward />
            </IconButton>
          </Box>

          {currentReports.length > 0 ? (
            currentReports.map((report, index) => (
              <Card
                key={index}
                sx={{
                  mb: 4,
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 3,
                  bgcolor: "white",
                }}
              >
                <CardContent>
                  <BasicDetails report={report} />
                  <ReportSummary report={report} />
                  <CreditAccounts
                    report={report}
                    currentPage={creditPage}
                    onPageChange={handleCreditPageChange}
                  />
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography
              variant="h6"
              textAlign="center"
              color="gray"
              sx={{ mt: 4 }}
            >
              No reports found. Upload a report to get started.
            </Typography>
          )}
        </>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 4,
              p: 4,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#1976D2" }}
            >
              Upload Your Credit Report
            </Typography>
            <FileUpload />
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2, borderRadius: 2, fontWeight: "bold" }}
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Home;
