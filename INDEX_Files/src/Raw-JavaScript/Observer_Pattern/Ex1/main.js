class YoutubeChannel {
    constructor() {
        this.subscribers = []
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`You have subscribed the channel. `);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter(sub=> sub!==user);
        user.update(`You have un-subscribed this channel. `);
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(data){
        console.log(data);
    }
}

let sheriyans = new YoutubeChannel();
let user1 = new User("Abhi");
let user2 = new User("Rohit");

sheriyans.subscribe(user1);
sheriyans.subscribe(user2)