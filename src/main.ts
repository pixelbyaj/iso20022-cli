import { spawn } from 'child_process';
import { getAppPath, getPlatform } from './platform';
import * as fs from 'fs';

const mx = {
    convert: (jsonFileName: string, targetNamespace: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            const mxCliAppPath = getAppPath();
            if (getPlatform() !== 'win32') {
                fs.chmodSync(mxCliAppPath, '755');
            }
            // Spawn the process with the captured arguments
            const appSubProcess = spawn(mxCliAppPath, [jsonFileName, targetNamespace]);

            let outputData = '';
            // Capture standard output
            appSubProcess.stdout.on('data', (data) => {
                outputData += data;
            });

            // Capture standard error
            appSubProcess.stderr.on('data', (data) => {
                console.error(`Error: ${data}`);
            });

            // Handle process exit
            appSubProcess.on('close', (code) => {
                if (code === 0) {
                    // Write the output to the specified file
                    resolve(outputData);
                } else {
                    reject(code);
                }
            });
        });
    },
    convertAndValidate: (jsonFileName: string, targetNamespace: string, xsdFileName: string) => {
        return new Promise((resolve, reject) => {
            const mxCliAppPath = getAppPath();
            if (getPlatform() !== 'win32') {
                fs.chmodSync(mxCliAppPath, '755');
            }
            // Spawn the process with the captured arguments
            const appSubProcess = spawn(mxCliAppPath, [jsonFileName, targetNamespace, xsdFileName]);

            let outputData = '';
            // Capture standard output
            appSubProcess.stdout.on('data', (data) => {
                outputData += data;
            });

            // Capture standard error
            appSubProcess.stderr.on('data', (data) => {
                console.error(`Error: ${data}`);
            });

            // Handle process exit
            appSubProcess.on('close', (code) => {
                if (code === 0) {
                    // Write the output to the specified file
                    resolve(outputData);
                } else {
                    reject(code);
                }
            });
        });
    }
}

export default mx;