//lightbox plugin
lightbox.option({
    fadeDuration: 300,
    wrapAround: true,
    albumLabel: "%1 / %2",
    disableScrolling: true
});

//search
document.querySelector('#search').addEventListener('keyup', function () {

    const input = document.querySelector('#search').value.toUpperCase();
    const photos = document.querySelectorAll('.lightbox-parent a').length;

    for (let i = 0; i < photos; i++) {
        //image description
        const description = document.querySelectorAll('a')[i].getAttribute('data-title').toUpperCase();

        //match user search input to image description
        if (description.includes(input)) {
            //show pictures with matching data title
            $(document.querySelectorAll('a')[i]).show();
        } else {
            //hide pictures that don't match
            $(document.querySelectorAll('a')[i]).hide();
        }
    }
});