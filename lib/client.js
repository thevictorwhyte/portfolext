import {
    createClient
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-06-17',
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
}

export const client = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)