document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <header class="navbar navbar-expand-lg navbar-light">
        <div class='header-main-container'>
            <a class="navbar-brand" href="#"><img src="/assets/images/top-brand-logo.png" alt="Abundant Art Logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
      <div class="header-sub-container">
        <div class='art-gallery-email-conatiner'>
          <div class='flex' >
            <img src='/assets/icons/art-gallery.png' alt="Logo" />
            <span>Visit Our Abundantart Art Gallery</span>
          </div>
          <div class='flex'>
            <img src='/assets/icons/contact/mail.svg' alt="Logo" />
            <span>info@abundantart.net</span>
          </div>
          <div>
            <img  src='/assets/icons/socialMedia/facebook.svg' alt="Logo" />
            <img  src='/assets/icons/socialMedia/instagram.svg' />
            <img src='/assets/icons/socialMedia/linkedin.svg' />
            <img src='/assets/icons/socialMedia/youtube.svg' />
          </div>
        </div>
        <div class='flex  navlinks-donate' >
           <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Artzine</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
                </ul>
                <img  src='/assets/icons/search.svg' alt="search" />
                <a class="nav-link " href="#"> <div class="button-main-container red-bg-btn m-auto">
            <span class='btn-content'>Donate</span>
        </div></a
            </div>
        </div>
      </div>
    </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
