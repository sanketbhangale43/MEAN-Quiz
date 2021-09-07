export let debug = true;
export let domain = "http://localhost:5000";


export const endpoints = {
    SignupApi: `${domain}/api/signup`,
    LoginApi: `${domain}/api/login`,
    CreateQuizApi: `${domain}/api/create-quiz`,
    AllQuizzes: `${domain}/api/all-quizzes`
}