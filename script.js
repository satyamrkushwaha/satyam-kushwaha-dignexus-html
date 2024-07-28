const reviewProjects = [
    {
        imgSrc: 'review1.jpg',
        imgAlt: 'Review 1',
        title: 'Review 1',
        text: 'Review of the latest exhibitions and performances.'
    },
    {
        imgSrc: 'review2.jpg',
        imgAlt: 'Review 2',
        title: 'Review 2',
        text: 'Insights into the contemporary art scene.'
    },
    {
        imgSrc: 'review3.jpg',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    }
];

const artzineProjects = [
    {
        imgSrc: 'premiere_talk.jpg',
        imgAlt: 'Premiere Talk',
        title: 'Premiere Talk',
        text: 'Talks with leading figures in the art world.'
    },
    {
        imgSrc: 'features.jpg',
        imgAlt: 'Features',
        title: 'Features',
        text: 'Spotlight on key exhibitions and art events.'
    },
    {
        imgSrc: 'interviews.jpg',
        imgAlt: 'Interviews',
        title: 'Interviews',
        text: 'Conversations with artists and curators.'
    }
];


const projects = [
    {
        imgSrc: 'project1.jpg',
        imgAlt: 'Project 1',
        title: 'A Meeting of Cultures',
        text: 'An inspiring dance story of Anna Pavlova and Uday Shankar.'
    },
    {
        imgSrc: 'project2.jpg',
        imgAlt: 'Project 2',
        title: 'London Lift-Off Film Festival',
        text: 'Showcasing emerging filmmakers and artists.'
    },
    {
        imgSrc: 'project3.jpg',
        imgAlt: 'Project 3',
        title: 'A Glimpse of India',
        text: 'Exploring the diverse cultural heritage of India.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const artzineCardsContainer = document.getElementById('artzine-cards');

    artzineProjects.forEach(project => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${project.imgSrc}" class="card-img-top" alt="${project.imgAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.text}</p>
                    </div>
                </div>
            </div>
        `;
        artzineCardsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });


    const reviewsCardsContainer = document.getElementById('reviews-cards');

    reviewProjects.forEach(project => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${project.imgSrc}" class="card-img-top" alt="${project.imgAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.text}</p>
                    </div>
                </div>
            </div>
        `;
        reviewsCardsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });


    const projectCardsContainer = document.getElementById('project-cards');

    projects.forEach(project => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${project.imgSrc}" class="card-img-top" alt="${project.imgAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.text}</p>
                    </div>
                </div>
            </div>
        `;
        projectCardsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

});



