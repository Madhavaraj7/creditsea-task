import ReportModel from '../domain/report';
export const saveReport = async (data: any) => await ReportModel.create(data);
export const getReports = async () => await ReportModel.find();
