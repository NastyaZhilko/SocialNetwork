import {addPost, PostType, ProfilePageType, profileReducer, ProfileType} from "./profile_reducer";

let startState: ProfilePageType;

beforeEach(() => {

    startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', howManyLikes: 10},
            {id: 2, message: 'It is my first post?', howManyLikes: 15}
        ] as PostType[],
        profile: null as ProfileType | null,
        status: ''
    }
})

test('new post should be added', () => {

    const action = addPost('it-kamasutra.com');

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3);
    expect(endState.posts[2].message).toBe('it-kamasutra.com');

});