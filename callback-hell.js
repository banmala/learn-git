// const fs = require('fs');

// // Simulating reading data from file1.txt, then file2.txt, then file3.txt
// fs.readFile('file1.txt', 'utf8', (err, data1) => {
//     if (err) {
//         console.error('Error reading file1.txt:', err);
//         return;
//     }
//     console.log('Data from file1.txt:', data1);

//     fs.readFile('file2.txt', 'utf8', (err, data2) => {
//         if (err) {
//             console.error('Error reading file2.txt:', err);
//             return;
//         }
//         console.log('Data from file2.txt:', data2);

//         fs.readFile('file3.txt', 'utf8', (err, data3) => {
//             if (err) {
//                 console.error('Error reading file3.txt:', err);
//                 return;
//             }
//             console.log('Data from file3.txt:', data3);
//         });
//     });
// });

const fs = require('fs').promises;

async function readFiles() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        console.log('Data from file1.txt:', data1);

        const data2 = await fs.readFile('file2.txt', 'utf8');
        console.log('Data from file2.txt:', data2);

        const data3 = await fs.readFile('file3.txt', 'utf8');
        console.log('Data from file3.txt:', data3);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFiles();