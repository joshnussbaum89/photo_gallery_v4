//lightbox plugin
lightbox.option({
    fadeDuration: 300,
    wrapAround: true,
    albumLabel: "%1 / %2",
    disableScrolling: true
});

//search items
document.querySelector('#search').addEventListener('keyup', function () {

    const input = document.querySelector('#search').value.toUpperCase();
    const photos = document.querySelectorAll('.lightbox-parent a').length;

    for (let i = 0; i < photos; i++) {

        const description = document.querySelectorAll('a')[i].getAttribute('data-title').toUpperCase();

        if (description.includes(input)) {
            $(document.querySelectorAll('a')[i]).show();
        }
        else {
            $(document.querySelectorAll('a')[i]).hide();
        }
    }

});
