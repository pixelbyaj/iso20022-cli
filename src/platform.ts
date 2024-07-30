import path from 'path';
import os from 'os';
const platform = os.platform();

export const getAppPath = () => {
    let mxCliAppPath;

    // Determine the correct executable path based on the platform
    switch (platform) {
        case 'win32':
            mxCliAppPath = path.join(__dirname, 'tools', 'win-x64', 'MXCli.exe');
            break;
        case 'linux':
            mxCliAppPath = path.join(__dirname, 'tools', 'linux-x64', 'MXCli');
            break;
        case 'darwin': // macOS
            mxCliAppPath = path.join(__dirname, 'tools', 'osx-x64', 'MXCli');
            break;
        default:
            mxCliAppPath = '';
    }

    return mxCliAppPath;
}

export const getPlatform = () => {
    return platform;
}