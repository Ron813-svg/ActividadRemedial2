import app from './app.js'
import { config } from './src/config.js'
import './database.js'

async function main() {
    try {
        app.listen(config.server.port, () => {
            console.log(`Server is running on port ${config.server.port}`)
            console.log('Se ha iniciado correctamente')
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1)
    }
}

main().catch(error => {
    console.error('Error in main function:', error);
    process.exit(1)
})