export default async function fetchStudent () {

        const apiRes = await fetch (`http://localhost:3000/students`);
        if (!apiRes.ok){
            throw new Error (`students/ fetch not ok`);
        }
        
        console.log('students/ fetch ok!')
        return apiRes.json();
    }
