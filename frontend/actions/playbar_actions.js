export const RECEIVE_SELECTED_TRACK = 'RECEIVE_SELECTED_TRACK';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const RESUME = 'RESUME';

export const receiveSelectedTrack = track => ({
    type: RECEIVE_SELECTED_TRACK,
    track
});

export const play = () => ({
    type: PLAY,
    playState: true
});

export const pause = () => ({
    type: PAUSE,
    playState: false
});

export const resume = () => ({
    type: RESUME,
    playState: true
});

