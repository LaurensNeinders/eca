/*
Event stream handling.

See https://developer.mozilla.org/en-US/docs/Web/API/EventSource for a more
comprehensive explanation.
*/

events = {};

(function($, exports) {
    var e = new EventSource('/events');

    exports.connect = function(name, elements) {
        // wrap to allow selector, jQuery object and DOM nodes
        $elements = $(elements);

        // add event listener to event stream
        e.addEventListener(name, function(m) {
            try {
                var message = JSON.parse(m.data);
            } catch(err) {
                console.exception("Received malformed message: ",err);
                return;
            }

            $elements.trigger('server-event', [message]);
        });
    }
})(jQuery, events);

