//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    // Animals and their corresponding URLs
    const animals = [
        { name: 'camel', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/camel.jpg' },
        { name: 'cheetah', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/cheetah.jpg' },
        { name: 'elephant', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/elephant.jpg' },
        { name: 'gorilla', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/gorilla.jpg' },
        { name: 'koala', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/koala.jpg' },
        { name: 'lion', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/lion.jpg' },
        { name: 'polar_bear', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/polar_bear.jpg' },
        { name: 'tiger', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/tiger.jpg' },
        { name: 'wolf', url: 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/wolf.jpg' },
    ];

    // Container for animal photos
    const animalPhotosContainer = document.getElementById('animal-photos');

    // Iterate through the animals and create image elements
    animals.forEach(animal => {
        const imgElement = document.createElement('img');
        imgElement.src = animal.url;
        imgElement.alt = `Photo of a ${animal.name}`;
        imgElement.classList.add('animal-photo');

        // Append the image element to the container
        animalPhotosContainer.appendChild(imgElement);
    });
});
