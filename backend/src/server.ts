import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const API_KEY: string = process.env.API_KEY || '';
app.use(cors({
    origin: 'http://localhost:3001'
  }));

interface Student {
    email: string;
    lastName: string;
    firstName: string;
    id: number;
}

async function getStudents(course: string, instructor: string): Promise<Student[]> {
    const requestOptions = {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    };

    try {
        const response = await axios.get<any, { data: Student[] }>(
            `https://carnap.io/api/v1/instructors/${instructor}/courses/${course}/students`,
            requestOptions
        );
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            console.error("Error fetching data:", axiosError.response.statusText);
        } else if (axiosError.request) {
            console.error("Error fetching data:", axiosError.request);
        } else {
            console.error("Error fetching data:", axiosError.message);
        }
        return [];
    }

}
app.get('/students', async (req: Request, res: Response) => {
    try {
        const course = 'Tartu%20-%20Introduction%20to%20Logic%20(Eng)';
        const instructor = 'litmanhuang@gmail.com';
        const studentData = await getStudents(course, instructor);
        const students = studentData.map(({ email, lastName, firstName, id }) => ({
            email,
            lastName,
            firstName,
            id
        }));
        
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching student data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
