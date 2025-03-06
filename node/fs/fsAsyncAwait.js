const fs = require("fs");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// const filePath1 = __dirname;

// fs.promises
// .readdir(filePath1)
// .then((data) => console.log(data))
// .catch((err) => console.error(err));

// const readFolder = async() => {
//     try {
//         const res = await fs.promises.readdir(filePath1);
//         console.log(res);
//     }catch(error) {
//         console.error(error);
//     }
// };
// readFolder();

//*-------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fs.Promises.writeFile(path, data, options);

//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*

// const writeFilee = async() => {
//     try {
//         await fs.promises.writeFile(filePath, "This is the initial data", 'utf-8');
//         console.log("file created successfully");
//     }catch(error) {
//         console.error(error);
//     }
// };
// writeFilee();

//*-------------------------------------------------------------------------------------*
//* Reading a File: fsPromises.readFile() : Reads the contents of a file asynchronously.
//! syntax: fsPromises.readFile(path, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

// const readFilee = async() => {
//     try {
//         const data = await fs.promises.readFile(filePath, 'utf-8');
//         console.log(data);
//     }catch(error) {
//         console.error(error);
//     }
// };
// readFilee();

//*-------------------------------------------------------------------------------------*
//* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new one.
//! syntax: fsPromises.appendFile(path, data, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

// const appendFilee = async() => {
//     try {
//         await fs.promises.appendFile(filePath, "\nUpdated Data",'utf-8');
//         console.log("Data updated");
//     }catch(error) {
//         console.error(error);
//     }
// };
// appendFilee();

//*-------------------------------------------------------------------------------------*
//* Deleting a File: fsPromises.unlink() : Deletes a file by its path.
//! syntax: fsPromises.unlink(path)

//? path: The file path to delete.
//*-------------------------------------------------------------------------------------*

const deleteFilee = async() => {
    try {
        await fs.promises.unlink(filePaths);
        console.log("Data deleted");
    }catch(error) {
        console.error(error.message);
    }
};
deleteFilee();