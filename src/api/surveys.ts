import axios from "axios";
import { APISurveyCompletion } from "./types";

export function getAllSurveys() {
  const apiUrl = `${process.env.REACT_APP_API_URL}/surveys`;
  return axios.get(apiUrl);
}
// TODO: Add API url to .env
export function getSurveyDetails(id: string) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/surveys/${id}`;
  return axios.get(apiUrl);
}

export function postSurveyCompletion(id: string, data: APISurveyCompletion) {
  const apiUrl = `${process.env.REACT_APP_API_URL}/surveys/${id}/completions`;
  return axios.post(apiUrl, data);
}
