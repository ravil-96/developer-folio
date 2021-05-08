import React from 'react';

const Contact = () => {
    return (
        <div>
              <ul id="social-icons">
                <li>
                    <a href="https://www.facebook.com/GitHub" data-ga-click="Footer, go to Facebook, text:facebook" class="color-gray-4">
                    <img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" height="18" class="d-block" loading="lazy" decoding="async" alt="Facebook icon"/>
                    <span class="sr-only">GitHub on Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/github" data-ga-click="Footer, go to YouTube, text:youtube" class="color-gray-4">
                    <img src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg" height="16" class="d-block" loading="lazy" decoding="async" alt="YouTube icon" />
                    <span class="sr-only">GitHub on YouTube</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/github" data-ga-click="Footer, go to Linkedin, text:linkedin" class="color-gray-4">
                    <img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" height="18" class="d-block" loading="lazy" decoding="async" alt="Linkedin icon" />
                    <span class="sr-only">GitHub on LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/github" data-ga-click="Footer, go to github's org, text:github" class="color-gray-4">
                    <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" height="20" class="d-block" loading="lazy" decoding="async" alt="GitHub mark" />
                    <span class="sr-only">GitHub’s organization on GitHub</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;
