const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//Đoạn trên không cần nói cùng biết là import và lấy một số thứ cần thiết từ electron rồi nhỉ :)

let win; // khai báo biên win dùng để tạo lên một cửa sổ window của app

// Hàm tạo cửa sổ app
function createWindow() {
	win = new BrowserWindow({ width: 1920, height: 1080 }); 
	win.loadURL("http://localhost:2402");
	win.webContents.openDevTools();

	win.on("close", function () {
		win = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
	app.quit();
});

app.on("activate", function () {
	if (win == null) {
		createWindow();
	}
});
