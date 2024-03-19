export class GameServer {
  constructor(server) {
    this.server = server;
  }

  socket(endPoint, opts = {}) {
    return new Socket(endPoint, opts);
  }
}

class Socket {
  constructor(endPoint, opts = {}) {
    this.endPoint = endPoint;
    this.opts = opts;
  }

  connect(params) {}
  onOpen(callback) {}
  onClose(callback) {}
  onError(callback) {}
  onMessage(callback) {}
  push(data) {}
  disconnect(callback, code, reason) {}
  channel(topic, params = {}) {
    return new Channel(topic, params);
  }
}

class Channel {
  constructor(topic, params, socket) {
    this.topic = topic;
    this.params = params;
    this.socket = socket;
  }

  join() {
    return this;
  }

  receive(event, callback) {
    return this;
  }

  on(event, callback) {}

  push(event, payload) {}

  leave() {}
}
