var player
videojs.getPlayer('vjs_video_3').ready(function() {
  'use strict';
  player = this



  player.on("play", function(){
    var x
    for (x in player.mediainfo.playerTags) {
      var tag = player.mediainfo.playerTags[x]
      var split = tag.value.split(":")
      player.overlay({
        overlays: [{
          align: 'bottom-left',
          showBackground: false,
          attachToControlBar: true,
          content: '<span id="' + tag.name + 'Button" onclick class="overlay-button-mjh">Skip ' + tag.name + '</span>',
          start: parseInt(split[0]),
          end: parseInt(split[1])
        }]
      });

      $('#' + tag.name + 'Button').click(function() {
        player.currentTime(split[1])
      });
    }
  })


})
