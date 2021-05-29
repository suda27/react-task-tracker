import Axios from 'axios';
import jwt_decode from 'jwt-decode';
 

 
export const getCallApi =  (url) =>{
   
    Axios.interceptors.request.use(request =>{
        const token = "eyJraWQiOiJtaHJZUW9mR2Y5UzRGVXJOVzNjcktlbmNaMFwvYjNDMUVTeUNMZVl1SlYrUT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoidTltbUo2aFlyLTdPSFAwQjFwcFR5QSIsInN1YiI6Ijk0ZjMwMzczLTc4Y2UtNDQ0ZC1iMWI0LTA4OTdkNDRmODE4ZiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9JSThleURYcG9fR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0lJOGV5RFhwbyIsImNvZ25pdG86dXNlcm5hbWUiOiJnb29nbGVfMTEyNDkyNTc2MDczNzQ4NTIyMTg5Iiwibm9uY2UiOiJ2UDlOS25Zb2drU0x4QTJwTUdKbHY5Y2F6bHRoYkd0RjduZWxJakhrRjdjLXBTMzJWaFBqR1Z2NWtlTjhpWHBja1ZDelVRYTRIWjRnWkRfSUtPOFVZQ3FxUjZ2ek9JU0RSMDRRbDBqTzc1a3hhVWxPcU5OLUNlQlpXSXVaUUVDdk9LNXBVWG5JMTZmcF9od01zRFRzX3MzYVZobURzS0pCWnFkZ0VuODNMT28iLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2EtXC9BT2gxNEdoTGdETDExWXlTeXphUTVBRTcwMU1tbXFYb2xWU09LU0l3Zk5PTi1BPXM5Ni1jIiwiYXVkIjoiM2plZ25jYzRzbjZoMnZpbWNvNTBiNnBpbzEiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMTI0OTI1NzYwNzM3NDg1MjIxODkiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjIxNzc4MDk3OTgzIn1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYyMTc4NzAzOSwibmFtZSI6InN1ZGFyc2FuIHByYWJha2FyYW4iLCJleHAiOjE2MjE3OTA2MzksImlhdCI6MTYyMTc4NzAzOSwiZW1haWwiOiJzdWRhcnNhbnNvbGFpQGdtYWlsLmNvbSJ9.Qi6L8EE-r6ts2py1w7L19jPMOSOkAvSXom1SA8LIw9zT84XNHIf0LLKYA-7v07QOVE9WjV4Q0KQEaM8nso1A0LaN14efS8y2qzeCwKXU7Z_Uy_7Cdd1shUxXCpIJCsGoNxZx1RvPKlMWQxg9ow9m4eAy7ilOCy1jRcP3KZ7Jsz3UEOSIsGnYywnlL1Rt-8KgGb7byqhnls45eJKeNJ1jkot02C-NpDh0IHRzRHQ2qO6XNGSbbth8nAv3_lOrlOruSoC8cyOVZIPnVKn8BmAl22Ys4Pup2kf0DpJRuBL7Gj8ct79SmYcDLpCKGvzvRDM-f2Rvl7GaownKpADUJVV3Ag";
        
        const decoded =  jwt_decode(token);
        console.log(decoded)
        console.log("Printing API before interceptin");
        return request;
    },error =>{
        return Promise.reject(error);
    })
    const res =  Axios.get('http://localhost:5000/tasks',{})
    
}

export const PrintOutLoud = () =>{
    console.log("Printing Out Louuuuuud");
}

export const ExtractToken = (token) =>{

}

// const Token = '';
