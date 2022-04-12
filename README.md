# Youtube App

## Guideline
- Run: `cd youtube-app`
- Create `.env` file and set the value for REACT_APP_API_KEY and REACT_APP_CLIENT_ID (the API_KEY and CLIENT_ID get from your google developer account)
```
REACT_APP_API_KEY=""
REACT_APP_CLIENT_ID=""

```
- install npm: `npm install`
- Run app: `npm start`
- Go to `http://localhost:3000` to see my app.

- To run test
- `npm run test`

- To see cypress
- `npm run cypress:open`

- To see storybook
- `npm run storybook`
then go to `http://localhost:9001` to see the storybook

- Click to avatar to display menu for get playlist and upload video.
- To test function upload video, we can get example video in folder src/assets/videos/


## Current archievement
- Build youtube app clone to watch popular video, detail video, comment a video, get playlist and playlist's video, upload a video.
- Understand actions, reducers, store, middleware in redux.
- Understand data flow of redux.
- Using redux-logger to logging state.
- Using React Router to redirect pages.
- Using api-sauce to fetch data.
- Using reduxsauce.
- Understand Async actions and apply redux-saga
- Upload Video.
- Get playlist of login user.
- Get video playlist of login user.
- User comment video.

## NEW FEATURE
- User Authentication by Login/Logout google account.
- Add comment in a video.
- Get playlist and playlist's video of user.
- Upload a video to user's channel.
- Authenticate login user when redirect to protected page.
