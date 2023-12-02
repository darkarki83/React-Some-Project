const initialState = {
    profilePage: {
      posts: [
        { message: "Hi how are you", likes: "7", id: 1 },
        { message: "Its my first post", likes: "28", id: 2 },
        { message: "Beautiful day outside!", likes: "15", id: 3 },
        { message: "Learning React is fun", likes: "22", id: 4 },
        { message: "Just finished a great book", likes: "18", id: 5 },
        { message: "Working on a new project", likes: "30", id: 6 },
        { message: "Cooked a delicious meal today", likes: "25", id: 7 },
        { message: "Went for a long walk", likes: "12", id: 8 },
        { message: "Started learning a new language", likes: "20", id: 9 }
      ],
      newPostText: '',
    },
    messagesPage: {
      dialogs: [
        { name: "Alice", id: 1 },
        { name: "Bob", id: 2 },
        { name: "Charlie", id: 3 },
        { name: "Diana", id: 4 },
        { name: "Eve", id: 5 }
      ],
      messages: [
        { message: "Hi there!", id: 1 },
        { message: "How are you?", id: 2 },
        { message: "Let's meet tomorrow.", id: 3 },
        { message: "Thank you!", id: 4 },
        { message: "See you soon.", id: 5 }
      ],
      newMessageText: '',
    }
  }

class Store {
    constructor(state) {
      this._state = state;
      this._callSubscriber = () => {
          console.log('State changed');
      };
  }

    getState() {
        return this._state;
    }

    _callSubscriber() {
        console.log('State changed');
    }

    subscribe(observer) {
        this._callSubscriber = observer;
    }

    addPost() {
      let newId = this._state.profilePage.posts.length + 1;
        let newPost = {
            message: this._state.profilePage.newPostText,
            likes: 0,
            id: newId
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }

    addMessage() {
      let newId = this._state.messagesPage.messages.length + 1;
        let newMessage = {
            message: this._state.messagesPage.newMessageText,
            id: newId
        };
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    }

    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    }
}

const store = new Store(initialState);
export default store;