import { Request, Response } from "express";
import { processReport, fetchReports } from "../../application/reportService";

export const uploadXML = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }
    await processReport(req.file.buffer.toString());

    res.status(201).json({ message: "Report processed successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing report", error: error.message });
  }
};

export const getReportData = async (_req: Request, res: Response) => {
  try {
    const reports = await fetchReports();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports" });
  }
};
