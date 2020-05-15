import { ApiBaseService } from "./ApiBaseService";
import { Project } from "../api/models";

export class ProjectService extends ApiBaseService {
    public async all(): Promise<Array<Project>> {
        const response = await this.get<Array<Project>>(`/projects`);
        return response.data;
    }
}
