"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT, 10) || 3000;
const API_KEY = process.env.API_KEY || '';
console.log('API_KEY', API_KEY);
function getStudents(course, instructor) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestOptions = {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        };
        try {
            const response = yield axios_1.default.get(`https://carnap.io/api/v1/instructors/${instructor}/courses/${course}/students`, requestOptions);
            return response.data;
        }
        catch (error) {
            const axiosError = error;
            if (axiosError.response) {
                console.error("Error fetching data:", axiosError.response.statusText);
            }
            else if (axiosError.request) {
                console.error("Error fetching data:", axiosError.request);
            }
            else {
                console.error("Error fetching data:", axiosError.message);
            }
            return [];
        }
    });
}
app.get('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = 'Tartu%20-%20Introduction%20to%20Logic%20(Eng)';
        const instructor = 'litmanhuang@gmail.com';
        const studentData = yield getStudents(course, instructor);
        const students = studentData.map(({ email, lastName, firstName, id }) => ({
            email,
            lastName,
            firstName,
            id
        }));
        res.json(students);
    }
    catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching student data' });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
