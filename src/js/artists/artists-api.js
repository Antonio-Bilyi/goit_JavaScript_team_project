"use strict"

import axios from "axios";

export async function fetchArtist(page, limit) {
    const baseUrl = "https://sound-wave.b.goit.study/api";
    const endpoint = "/artists";
    const url = baseUrl + endpoint;
    const response = await axios(url,{
        params: {
        limit,
        page
    }
    });

    return {
        totalArtists: response.data.totalArtists,
        artists: response.data.artists,
    }
  };