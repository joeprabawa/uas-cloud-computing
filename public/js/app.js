document.addEventListener("DOMContentLoaded", (event) => {
    const getStartedBtn = document.querySelector('#get-started');
    const offeringSection = document.querySelector('#offering-section');

    getStartedBtn.addEventListener("click", (event) => {
        offeringSection.scrollIntoView({
            behavior:"smooth",
        })
    })
})