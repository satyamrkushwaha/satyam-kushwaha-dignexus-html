document.addEventListener("DOMContentLoaded", function() {
    const contactDetails = {
        email: { content: "info@example.com" },
        web: { content: "www.example.com" },
        phone: { content: "+1234567890" },
        webGallery: { content: "www.example.com/gallery" }
    };

    const footerHTML = `
    <footer class="bg-dark text-white mt-5 footer-main-container">
        <div class="container py-4">
            <div class="row">
                <div class="col-md-6">
                    <div><img src='/assets/images/brand-logo.png' alt="Brand Logo" /></div>
                    <div> <img src='/assets/icons/contact/mail.svg' alt="Email Icon" />
                        <span>${contactDetails.email.content}</span></div>
                    <div> <img src='/assets/icons/contact/web.svg' alt="Web Icon" />
                        <span>${contactDetails.web.content}</span></div>
                    <div> <img src='/assets/icons/contact/phone.svg' alt="Phone Icon" />
                        <span>${contactDetails.phone.content}</span></div>
                </div>
                <div class="col-md-6 text-right">
                    <h2>Follow Us :</h2>
                    <!-- Replace <SocialBand /> with actual social media links or icons -->
                    <div class="social-band">
                        <a href="https://facebook.com" target="_blank">Facebook</a>
                        <a href="https://twitter.com" target="_blank">Twitter</a>
                        <a href="https://instagram.com" target="_blank">Instagram</a>
                    </div>
                    <div class='flex'>
                        <div> <img src='/assets/icons/art-gallery.png' alt="Art Icon" /></div>
                        <div>
                            <div>${contactDetails.webGallery.content}</div>
                            <p>Visit for paintings, sculptures, & photography</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="hr-divider" />
        <p class="footer-copyright"><span>&copy;</span> All Rights Reserved</p>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
