export const getApiData=async()=>{
    const request = await fetch('https://restcountries.com/v2/all');
    return await request.json();
}
// console.log(getApiData());