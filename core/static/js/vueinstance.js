// var csrftoken = Cookies.get('csrftoken')
// Vue.http.headers.common['X-CSRFTOKEN'] = csrftoken

// const requestUserPk = parseInt(document.getElementById('request-user-pk').value) || -1
// const requestUser = document.getElementById('request-user').value

const vm = new Vue({
  el: '#vue-instance',
  delimiters: ['${', '}'],
  data: {
    playlist: [],
    cityPlaylists: [],
    cities: [],
    currentPlaylist: [],
    // loggedInUser: { 'followers': [], 'pk': -1, 'url': null, 'username': requestUser, 'users_followed': [] },
    // newResponse: { 'text': null, 'post': null, 'user': requestUser },
    // currentPost: {},
    // newPost: { 'text': null },
    // newFollow: { 'following_user': requestUserPk, 'followed_user': null },
  },
  mounted: function () {
    //   if (requestUserPk !== -1) {
    //     this.getLoggedInUser();
    //   } else {
    //     this.showFeedNotAll = false;
    //   }
    //   this.getPosts();
    this.getCities()
  },
  methods: {
    getCities: function () {
      this.$http.get("/api/playlists/").then((response) => {
        this.playlists = response.data;
        for (let playlist of this.playlists) {
          if (!this.cities.includes(playlist.city)) {
            this.cities.push(playlist.city)
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
    },
    getCityPlaylists: function (city) {
      this.$http.get(`/api/playlists/?search=${city}`).then((response) => {
        this.cityPlaylists = response.data;
        document.getElementById('city-playlists-modal').classList.add('is-active')
        console.log(this.cityPlaylists)
      })
      .catch((err) => {
        console.log(err);
      })
    },
    getPlaylist: function (playlist) {
      this.$http.get(`/api/playlists/${playlist.pk}`).then((response) => {
        this.currentPlaylist = response.data;
        document.getElementById('playlist-detail-modal').classList.add('is-active')
        console.log(this.currentPlaylist)
      })
    },
  }, // close methods
}) // close vue instance

function getCities() {

  return cities
}