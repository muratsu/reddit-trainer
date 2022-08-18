import { createReadStream } from 'fs'
import readLine from 'readline'
import {createObjectCsvWriter} from 'csv-writer'

const csvWriter = createObjectCsvWriter({
    path: './output.csv',
    header: [
        {id: 'title', title: 'Title'},
        {id: 'score', title: 'Score'},
        {id: 'total_awards_received', title: 'Total_Awards_Received'},
        {id: 'created_utc', title: 'Created_Utc'},
        {id: 'num_comments', title: 'Num_Comments'}
    ]
});
 

(async() => {
    const fileStream = createReadStream('dump.txt')
    const rl = readLine.createInterface( {
        input: fileStream,
        crlfDelay: Infinity
    })

    for await (const line of rl) {
        const record = JSON.parse(line)
        await csvWriter.writeRecords([record])
    }
})()

// open file
// createfilestream
// readfilestream
// foreachline
//     convertjson
//     getfields and push