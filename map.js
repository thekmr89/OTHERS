<div class="map" id="map-add"></div>

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdgtKv7SriM13lFaja6Kg0DM4yZXkpoRA"></script>

$(document).ready(function(){
            var $latitude = 28.6410647;
            var $longitude = 77.2139619;
            var $location = '<address><b>Shigeta Travels Pvt. Ltd.</b><p>Near Chhe Tooti Chowk, 4775, Main Bazar Rd, Paharganj, New Delhi, Delhi 110055</p> <a target="_blank" href="https://maps.app.goo.gl/MJb9y36ogrTRudK58" class="get-direction">Get Direction</a> <img src="/assets/images/logoicon-color.png" alt=""> </address>';
            var customicon = '/assets/icon/location-big.png';

            var map = new google.maps.Map(document.getElementById('map-add'), {
                center: new google.maps.LatLng($latitude, $longitude),
                zoom: 13,
                streetViewControl: true,
                mapTypeControl: false,
                disableDefaultUI: true,
                panControl: true,
                zoomControl: true,
                scrollwheel: false,
                styles: [
                    {
                        "featureType": "all",
                        "stylers": [
                            { "saturation": -100 }
                        ]
                    }
                ]
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map: map,
                title: 'Shigeta Travels Pvt. Ltd.',
                icon: customicon
            });
            var contentString = `<div class="dot-icon"></div><div class="locationName">${$location}</div>`;
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            infowindow.open(map, marker);
            var isOpen = true;
            marker.addListener('click', function() {
                if (isOpen) {
                    infowindow.close();
                } else {
                    infowindow.open(map, marker);
                }
                isOpen = !isOpen; 
            });
        });



//google map

.gm-style-iw
    &.gm-style-iw-c
        border-radius: 0
        padding: 25px
        button[title="Close"]
            display: none !important
        .gm-style-iw-d
            .poi-info-window
                &.gm-style
                    .title
                        @include Poppins600
                        font-size: 16px
                        color: $black
                        line-height: 20px
                    .address
                        margin: 12px 0
                        div
                            @include Poppins500
                            color: $text
                            line-height: 18px
                    .view-link
                        a
                            display: inline-block
                            @include Poppins400
                            font-size: 14px
                            color: $secondary
                            text-decoration: underline
        address
            font-style: normal
            position: relative
            --iconsize: 40px
            padding-right: calc(var(--iconsize) + 15px)
            padding-bottom: 25px
            max-width: 295px
            @include Poppins400
            p,a
                font-size: 14px
                line-height: 20px
            p
                color: $text
                margin: 12px 0 20px
            a
                display: inline-block
                text-decoration: underline
                color: $secondary
                &:hover
                    text-decoration: none
                    color: $primary
            b
                font-size: 16px
                line-height: 22px
                font-weight: 600
            img
                position: absolute
                right: 12px
                top: 0
                width: var(--iconsize)
