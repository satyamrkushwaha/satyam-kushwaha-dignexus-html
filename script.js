const artzineConstant = [
    {
        imgSrc: '/assets/images/artzine/art-1.png',
        imgAlt: 'Premiere Talk',
        title: 'Premiere Talk',
        text: 'Talks with leading figures in the art world.'
    },
    {
        imgSrc: '/assets/images/artzine/art-2.png',
        imgAlt: 'Features',
        title: 'Features',
        text: 'Spotlight on key exhibitions and art events.'
    },
    {
        imgSrc: '/assets/images/artzine/art-3.png',
        imgAlt: 'Interviews',
        title: 'Interviews',
        text: 'Conversations with artists and curators.'
    },
    {
        imgSrc: '/assets/images/artzine/art-4.png',
        imgAlt: 'Interviews',
        title: 'Interviews',
        text: 'Conversations with artists and curators.'
    }
    ,
    {
        imgSrc: '/assets/images/artzine/art-5.png',
        imgAlt: 'Interviews',
        title: 'Interviews',
        text: 'Conversations with artists and curators.'
    }
];


const reviewProjects = [
    {
        imgSrc: '/assets/images/reviews/review-1.png',
        imgAlt: 'Review 1',
        title: 'Review 1',
        text: 'Review of the latest exhibitions and performances.'
    },
    {
        imgSrc: '/assets/images/reviews/review-2.png',
        imgAlt: 'Review 2',
        title: 'Review 2',
        text: 'Insights into the contemporary art scene.'
    },
    {
        imgSrc: '/assets/images/reviews/review-3.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    },
    {
        imgSrc: '/assets/images/reviews/review-4.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    },
    {
        imgSrc: '/assets/images/reviews/review-5.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    }
];

const features = [
    {
        imgSrc: '/assets/images/reviews/review-1.png',
        imgAlt: 'Review 1',
        title: 'Review 1',
        text: 'Review of the latest exhibitions and performances.'
    },
    {
        imgSrc: '/assets/images/reviews/review-2.png',
        imgAlt: 'Review 2',
        title: 'Review 2',
        text: 'Insights into the contemporary art scene.'
    },
    {
        imgSrc: '/assets/images/reviews/review-3.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    },
    {
        imgSrc: '/assets/images/reviews/review-4.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    },
    {
        imgSrc: '/assets/images/reviews/review-5.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    }
];


const interviews = [
    {
        imgSrc: '/assets/images/reviews/review-1.png',
        imgAlt: 'Review 1',
        title: 'Review 1',
        text: 'Review of the latest exhibitions and performances.'
    },
    {
        imgSrc: '/assets/images/reviews/review-2.png',
        imgAlt: 'Review 2',
        title: 'Review 2',
        text: 'Insights into the contemporary art scene.'
    },
    {
        imgSrc: '/assets/images/reviews/review-3.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    },
    {
        imgSrc: '/assets/images/reviews/review-4.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    },
    {
        imgSrc: '/assets/images/reviews/review-5.png',
        imgAlt: 'Review 3',
        title: 'Review 3',
        text: 'Critical analysis of current art trends.'
    }
];




const projects = [
    {
        imgSrc: '/assets/images/projects/proj-1.png',
        imgAlt: 'Project 1',
        title: 'A Meeting of Cultures',
        text: 'An inspiring dance story of Anna Pavlova and Uday Shankar.'
    },
    {
        imgSrc: '/assets/images/projects/proj-2.png',
        imgAlt: 'Project 2',
        title: 'London Lift-Off Film Festival',
        text: 'Showcasing emerging filmmakers and artists.'
    },
    {
        imgSrc: '/assets/images/projects/proj-3.png',
        imgAlt: 'Project 3',
        title: 'A Glimpse of India',
        text: 'Exploring the diverse cultural heritage of India.'
    },
    {
        imgSrc: '/assets/images/projects/proj-4.png',
        imgAlt: 'Project 3',
        title: 'A Glimpse of India',
        text: 'Exploring the diverse cultural heritage of India.'
    },
    {
        imgSrc: '/assets/images/projects/proj-5.png',
        imgAlt: 'Project 3',
        title: 'A Glimpse of India',
        text: 'Exploring the diverse cultural heritage of India.'
    }
];

const carouselData = [
    {
        imgSrc: 'assets/images/heroSection/hero-sec-1.png',
        description: 'Lorem Ipsumd is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy...',
        date: 'ON JANUARY 31ST, 2024'
    },
    {
        imgSrc: 'assets/images/heroSection/hero-sec-1.png',
        description: 'Lorem Ipsum dis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy...',
        date: 'ON JANUARY 31ST, 2024'
    },
    {
        imgSrc: 'assets/images/heroSection/hero-sec-1.png',
        description: 'Lorem Ipsum is dsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy...',
        date: 'ON JANUARY 31ST, 2024'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const artzineCardsContainer = document.getElementById('artzine-cards');

    artzineConstant.forEach(project => {
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


    const featuresCardsContainer = document.getElementById('features-cards');

    features.forEach(project => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${project.imgSrc}" class="card-img-top" alt="${project.imgAlt}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.text}</p>
                    </div>
                     <div class="button-main-container w-50">
                        <span class='btn-content'>READ MORE</span>
                    </div>
                </div>
            </div>
        `;
        featuresCardsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

    const interviewsCardsContainer = document.getElementById('interview-cards');

    interviews.forEach(project => {
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
        interviewsCardsContainer.insertAdjacentHTML('beforeend', cardHtml);
    });


    const carouselContent = document.getElementById('carouselContent');
    
    carouselData.forEach((item, index) => {
        const isActive = index === 0 ? 'active' : '';
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <div>
                    <img src="${item.imgSrc}" alt="Hero Section" class="hero-section-image1">
                    <p>${item.description}</p>
                    <hr class="hr-divider">
                    <p>${item.date}</p>
                </div>
            </div>
        `;
        carouselContent.innerHTML += carouselItem;
    });

});



