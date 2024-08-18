import { Urls } from "./urls";

class Ws {
  private socket: WebSocket;
  public receivedMessage?: (message: string) => void;
  constructor(private url: string) {
    this.socket = new WebSocket(this.url);
  }

  connect() {
    this.socket.onopen = this.onOpen;
    this.socket.onmessage = this.onMessage;
    this.socket.onerror = this.onError;
    this.socket.onclose = this.onClose;
    console.log("WebSocket connect");
  }

  onOpen = () => {
    console.log("WebSocket open");
    // 去认证
    this.gotoAuthorization();
  };

  onMessage = (event: MessageEvent) => {
    console.log("Received message", event.data);
    this.receivedMessage && this.receivedMessage(event.data);
  };

  onError = (error: Event) => {
    console.error("WebSocket error", error);
    //重连
    this.connect();
  };

  onClose = (event: CloseEvent) => {
    console.log("WebSocket closed", event.code, event.reason);
    //重连
    this.connect();
  };

  send(data: any) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    } else {
      console.error("WebSocket is not connected");
    }
  }

  gotoAuthorization() {
    const data = {
      data: {
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmFyZ29meC5jb20vYXBpL2FwcC92My9hdXRoL2xvZ2luIiwiaWF0IjoxNzIzNzA5OTc4LCJleHAiOjE3MjQzMTQ3NzgsIm5iZiI6MTcyMzcwOTk3OCwianRpIjoienVNZ0ZlZWNMYkY0aWhPMCIsInN1YiI6IjMyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImlkIjozMiwidXNlcl9jb2RlIjoxMjExMTc5MTUsInRyYWRlX3VzZXJfaWQiOjIxLCJ3YWxsZXRfdXNlcl9pZCI6MjF9.OET9qGs2tow6KhwLE-gAOw25TQOQ_K7ZK87FQFsdkc8",
      },
      type: "auth",
    };
    const message = JSON.stringify(data);
    console.log(message);

    this.send(message);
  }
  close() {
    this.socket.close();
  }
}

const WsClient = new Ws(Urls.Socket);
WsClient.connect();
export default WsClient;
