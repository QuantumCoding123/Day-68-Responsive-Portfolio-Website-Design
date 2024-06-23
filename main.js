
document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function (link) {

        link.addEventListener('click', function (event) {

            event.preventDefault();


            const targetId = link.getAttribute('href');


            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });


            const navbarToggle = document.querySelector('.navbar-toggle');
            if (navbarToggle.classList.contains('active')) {
                navbarToggle.classList.remove('active');
                document.querySelector('.navbar-collapse').classList.remove('show');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {

    const whatsappLink = document.getElementById('whatsappLink');


    whatsappLink.addEventListener('click', function (event) {

        event.preventDefault();


        window.open(whatsappLink.href, '_blank');
    });
});
