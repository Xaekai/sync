
// Kill the original CyTube chat
$('#chatwrap').empty()

const CHATBOX='horrorshow'

// Don't fucking change the ID unless you change it in the function below too.
$('#chatwrap').html(`<iframe id=${CHATBOX} src="https://www6.cbox.ws/box/?boxid=827508&amp;boxtag=bc8zpm" frameborder="0" allow="autoplay" allowfullscreen="1" height="400" width="100%"></iframe>`)

// Change size of chatwrap contents, modified for shitbox
function handleVideoResize() {
    if ($("#ytapiplayer").length === 0) return;

    var intv, ticks = 0;
    var resize = function () {
        if (++ticks > 10) clearInterval(intv);
        if ($("#ytapiplayer").parent().outerHeight() <= 0) return;
        clearInterval(intv);

        var responsiveFrame = $("#ytapiplayer").parent();
        var chatline_h = 0; // $("#chatline").outerHeight()
        var height = responsiveFrame.outerHeight() - 0 - 2;
        $("#messagebuffer").height(height);
        $("#userlist").height(height);
        $(`#${CHATBOX}`).prop('height', height+22); // fudging 22px for the cbox bottom gap

        $("#ytapiplayer").attr("height", VHEIGHT = responsiveFrame.outerHeight());
        $("#ytapiplayer").attr("width", VWIDTH = responsiveFrame.outerWidth());
    };

    if ($("#ytapiplayer").height() > 0) resize();
    else intv = setInterval(resize, 500);

}

handleVideoResize()
