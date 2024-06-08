$(document).ready(function () {
        const items = $('.item');
        function filterItems() {
            const selectedTab = $('input[name="propertyTab"]:checked').val();
            const selectedLocation = $('[name="propertyLocation"]').val().toLowerCase();
            const enteredTitle = $('[name="propertyTitle"]').val().toLowerCase();

            items.each(function () {
                const itemTab = $(this).data('tab');
                const itemLocation = $(this).data('location').toLowerCase();
                const itemTitle = $(this).data('title').toLowerCase();

                const tabMatch = itemTab === selectedTab || selectedTab === 'all';
                const titleMatch = itemTitle.includes(enteredTitle) || enteredTitle === '';

                let locationMatch = true;
                if (selectedLocation !== '0') {
                    locationMatch = itemLocation.includes(selectedLocation);
                }

                if (tabMatch && locationMatch && titleMatch) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }

        $('[name="propertyTab"]').change(filterItems);
        $('[name="propertyLocation"]').change(filterItems);
        $('[name="propertyTitle"]').keyup(filterItems);
    });
