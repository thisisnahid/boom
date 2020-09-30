export const fetchAllTracks = () => (
    $.ajax({
        url: `api/tracks`,
        method: "GET"
    })
);

export const fetchTrack = trackId => (
    $.ajax({
        url: `api/tracks/${trackId}`,
        method: "GET"
    })
);

export const createTrack = track => (
    $.ajax({
        url: `api/tracks`,
        method: 'POST',
        data: { track }
    })
);

export const updateTrack = track => (
    $.ajax({
        url: `api/tracks`,
        method: 'PATCH',
        data: { track }
    })
);

export const destroyTrack = trackId => (
    $.ajax({
        url: `api/tracks/${trackId}`,
        method: 'DELETE'
    })
);
