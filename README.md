# Hypergro Assignment - Video Clone

## Description

Video Clone is a responsive web application that provides you with video content from local creators.

Live link: [hypergro.vercel.app](https://hypergro.vercel.app/)

## Navigation

Each page contains thumbnails of the video content. Clicking on the thumbnail will open a player to the left side or top portion of your screen based on your screen size.

The video can be played paused muted. It's volume can be adjusted from the player as well. It starts muted and you need to manually adjust the volume as per your liking.

At the bottom of the player you are given two buttons:

1. **Like button**: This lets you like the video. The data gets stored in the local storage and doesn't reflect on the actualy DB. If you refresh the page the like will be persistent.

2. **Close button**: This allowes you to close the video player.

> Note: You need not close the video player to switch between videos.

## Gallery

<details>
   <summary>
    View Images
   </summary>

![Homepage](https://raw.githubusercontent.com/dev-subhadeep/hypergro/main/screenshots/homepage.png?token=GHSAT0AAAAAACPKR732A7IUPGLPFY2WWYNUZPOVHTQ)

Homepage

![Video Playback Large Screen](https://raw.githubusercontent.com/dev-subhadeep/hypergro/main/screenshots/video-playback-large-screen.png?token=GHSAT0AAAAAACPKR732DE6ZRMJ4GIBAFK5GZPOVJWA)

Video Playback (Large Screen)

![Mobile View With Player](https://raw.githubusercontent.com/dev-subhadeep/hypergro/main/screenshots/mobile-view.png?token=GHSAT0AAAAAACPKR73337HZX4S4ZQD3J3E6ZPOVJQQ)

Mobile View With Player

![Video Controls](https://raw.githubusercontent.com/dev-subhadeep/hypergro/main/screenshots/video-controls.png?token=GHSAT0AAAAAACPKR733D2IZN7M6YL6MO572ZPOVL3Q)

Video Controls

</details>

## Installation

### Step 1: Clone the repo

```
git clone https://github.com/dev-subhadeep/hypergro.git
```

### Step 2: Navigate to the app folder

```
cd hypergro/app
```

### Step 3: Install dependencies

```
npm install
```

### Step 4: Run the dev server

```
npm run dev
```

The dev server should now be available on `localhost:5173`. You should also get a link in the terminal that you can control click to directly open in your default browser.

## Testing

To run the test server, you need to be in the app directory.

Then run the following command:

```
npm run storybook
```

Your storybook server should now be available on `localhost:6006`.

Click on the Hypergro dropdown on the left sidebar to get access to the tests for `Pagination`.

You can enter values from 1-10 in the pageNumber input to see how it makes Pagination component change.
