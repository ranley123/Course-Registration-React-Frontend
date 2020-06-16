import axios from 'axios'

const INSTRUCTOR = 'huan'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }

    retrieveCourse(name, id) {
        let res = axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
        console.log(res)
        return res
    }

    deleteCourse(name, id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }
}

export default new CourseDataService()
