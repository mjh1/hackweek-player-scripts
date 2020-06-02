var vjsButtonComponent = videojs.getComponent('Button');
videojs.registerComponent('SkipButton', videojs.extend(vjsButtonComponent, {
    constructor: function () {
        vjsButtonComponent.apply(this, arguments);
    },
    handleClick: function () {
        videojs.getPlayer('vjs_video_3').currentTime(25)
    },
    buildCSSClass: function () {
        return 'vjs-control vjs-download-button';
    },
    createControlTextEl: function (button) {
        return $(button).html($('<span class="glyphicon glyphicon-download-alt">Skip Intro</span>').attr('title', 'Skip'));
    }
}));

videojs.getPlayer('vjs_video_3').getChild('controlBar').addChild('SkipButton', {})
