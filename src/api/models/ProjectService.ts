import apiClient from "../apiClient"

export const getProjects = async () => {
  const response = await apiClient.get("projects")
  return response.data
}

export const getProjectById = async (id: string) => {
  const response = await apiClient.get(`projects/${id}`)
  return response.data
}