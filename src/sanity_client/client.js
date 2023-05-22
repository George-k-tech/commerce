import {createClient} from "@sanity/client";

const client = createClient({
   projectId:'ertejd13' ,
   dataset: "production"
})


export default client