document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target); // Unobserve the element once the animation is applied
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.digital1A').forEach(section => {
        observer.observe(section);
    });

    const slideObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in-left');
                observer.unobserve(entry.target); // Unobserve the element once the animation is applied
            }
        });
    };

    const slideObserver = new IntersectionObserver(slideObserverCallback, observerOptions);

    document.querySelectorAll('.slide-in-left').forEach(section => {
        slideObserver.observe(section);
    });
});
