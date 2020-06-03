var player
videojs.getPlayer('vjs_video_3').ready(function() {
  'use strict';
  player = this

  player.on("play", function(){
    // var skipButton = $('<span onclick class="overlay-button-mjh">Skip Intro</span>')

    player.overlay({
      overlays: [{
        align: 'bottom-left',
        showBackground: false,
        attachToControlBar: true,
        content: '<span id="skipButton" onclick class="overlay-button-mjh">Skip Intro</span>',
        start: 1, // TODO add field for start of intro
        end: parseInt(player.mediainfo.custom_fields.skip_marker)
      }]
    });

    $('#skipButton').click(function() {
      player.currentTime(player.mediainfo.custom_fields.skip_marker)
    });
  })

})
