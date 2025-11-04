// Channel.js
export class Channel {
  constructor(name) {
    this.name = name;
    this.likes = 0;
    this.dislikes = 0;
    this.subscribers = [];
  }
  // Subscribe a React component or function to updates
  subscribe(callback) {
    this.subscribers.push(callback);
  }
  // Notify all observers
  notify() {
    this.subscribers.forEach(cb => cb(this.getStats()));
  }
  // Return current stats
  getStats() {
    return {
      name: this.name,
      likes: this.likes,
      dislikes: this.dislikes
    };
  }
  // Increment likes or dislikes and notify subscribers
  like() {
    this.likes++;
    this.notify();
  }
  dislike() {
    this.dislikes++;
    this.notify();
  }
}