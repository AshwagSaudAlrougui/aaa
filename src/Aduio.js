import React, { Component } from 'react'
import ReactHowler from 'react-howler'

 export default class Aduio extends Component {
  getHower () {
    this.player.howler
  }

  getDuration () {
    this.player.duration()
  }

  getSeek () {
    this.player.seek()
  }

  setSeek () {
    this.player.seek(0.5)
  }
  // This sound file may not work due to cross-origin setting
  render () {
    return(
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
        ref={(ref) => (this.player = ref)}
      />
    );
  }
}