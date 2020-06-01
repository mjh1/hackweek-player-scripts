console.log('hello')

videojs('vjs_video_3_html5_api')

/*var vjsButtonComponent = videojs.getComponent('Button');
videojs.registerComponent('SkipButton', videojs.extend(vjsButtonComponent, {
    constructor: function () {
        vjsButtonComponent.apply(this, arguments);
    },
    handleClick: function () {
        videojs.getPlayer('vjs_video_3').currentTime(18)
    },
    buildCSSClass: function () {
        return 'vjs-control vjs-download-button';
    },
    createControlTextEl: function (button) {
        return $(button).html($('<span class="glyphicon glyphicon-download-alt"></span>').attr('title', 'Skip'));
    }
}));

videojs(
    'vjs_video_3',
    {fluid: true},
    function () {
        this.getChild('controlBar').addChild('SkipButton', {});
    }
);*/
