export default defineEventHandler(async(event)=>{
    //handle query params 
    const {name} = getQuery(event);

    // Handle post data
    const {age} = await readBody(event);


    // API Call with private key
    // const {data} = await $fetch('https://api.example.com?apikey=eadflasdjflasdjflad');
    // return data;

    return{
        message:`Hello data secret route ${name} and age is ${age}`
    }
})


// NOTE
// Key Points:
// getQuery is used for extracting query parameters from the request URL (e.g., ?name=John).
// readBody is used to read the request body (for POST requests or any data sent in the body).


// real api example
// export default defineEventHandler(async (event) => {
//     // Call external API
//     const { name } = useQuery(event);  // Get query params
  
//     const apiUrl = `https://jsonplaceholder.typicode.com/users/${name}`;
  
//     // Use fetch to get data from external API
//     const response = await $fetch(apiUrl);
  
//     return {
//       message: `Data fetched for user: ${name}`,
//       data: response
//     };
//   });
  