interface Size {
    width: number;
    height: number;
}

interface Label {
    title: string;
    size: Size;
}

function labelPrint(label: Label): void {
    console.log(label);
}

let myLabel = <Label> {
    title: '타입스크립트 도서', size: { width: 20, height: 29}
};

labelPrint(myLabel);

////////////////////////////////////////////////////////////////////////////////////////

interface Config {
    name: string;
    path: string;
    version?: string;
}

interface App {
    fullPath: string;
    version?: string;
}

function applicationInit(config: Config): App {
    let app = {fullPath: config.path + config.name} as App;
    if (config.version) {
        app.version = config.version
    }
    return app;
}
//<Config>와 as Config는 같은의미를 지님
console.log(applicationInit(<Config>{ path: '/home/', name: 'user'}));
console.log(applicationInit({path: '/home/', name: 'user', version: '0.1.1'} as Config));