import {createClient} from "@sanity/client"

export default createClient({
     projectId: 'afc26ist',
     dataset: 'production',
     useCdn: true,
     apiVersion: "2024-01-01",
})