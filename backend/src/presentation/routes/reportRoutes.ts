import { Router } from "express";
import { upload } from "../../middleware/upload";
import { uploadXML, getReportData } from "../controllers/reportController";

const router = Router();

router.post("/upload", upload.single("reportFile"), uploadXML);
router.get("/", getReportData);

export default router;
