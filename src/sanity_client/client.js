import {createClient} from "@sanity/client";

const client = createClient({
   projectId:'ertejd13' ,
   dataset: 'production',
   useCdn:true,
   apiVersion:'2023-05-20',
   token:process.env.REACT_PUBLIC_SANITY_TOKEN
})


export default client