import { fastify } from "fastify";
import { prisma } from "../lib/prisma"
import { getAllPromptsRoute } from "../routes/get-all-prompts";
import { postUploadVideoRoute } from "../routes/upload-video";

const app = fastify()

app.register(getAllPromptsRoute)
app.register(postUploadVideoRoute)

app.listen({
    port: 5000,
}).then(() => {
    console.log('http server running')
})