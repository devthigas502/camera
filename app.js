function cameraInit() {
    const args = { video: document.getElementById("preview") };
  
    window.URL.createObjectURL = (stream) => {
      args.video.srcObject = stream;
      return stream;
    };
  
    const scanner = new Instascan.Scanner(args);
  
    scanner.addListener("scan", function (content) {
      const list = document.querySelector(".js-list");
      const item = document.createElement("li");
      item.classList.add("list-group-item");
      item.textContent = content;
      list.appendChild(item);
    });
  
    Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        scanner.start(cameras[0]);
      } else {
        console.error("No cameras found.");
      }
    });
  }

cameraInit();

  