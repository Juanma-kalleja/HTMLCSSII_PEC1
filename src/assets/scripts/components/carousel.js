export function carousel() {
    //Grab elements
    const btnPrevious = document.querySelector('button.carousel__button--previous');
    const btnNext = document.querySelector('button.carousel__button--next');
    const images= [...document.querySelectorAll('img.carousel__image')];

    //Set initial values
    let position = 0; 
    const DURATION = 500;
    let animating = false;

    //Function to get positions
    const getPositions = (direction) => {
    const currentPosition = position;
    let newPosition;

    if(direction === 'next'){
        newPosition = position === images.length -1 ? 0 : position + 1;
    } else if (direction === 'previous'){
        newPosition = position === 0 ? images.length -1 : position - 1;
    }
    return {currentPosition, newPosition};
    };

    //Function to get image
    const getImages = (currentPosition, newPosition) => {
    const currentImage = images[currentPosition];
    const newImage = images[newPosition];

    return { currentImage, newImage };
    }
    
    const setAnimatingToTrue = () => {animating = true};

    //Using keyframes for animations
    const runAnimations= (currentImage, newImage, direction) => {
    newImage.classList.remove('hidden');

    if(direction === 'next'){
        currentImage.style.animation = `animateToLeft ${DURATION}ms forwards`;
        newImage.style.animation = `animateFromRight ${DURATION}ms forwards`;
    }else{
        currentImage.style.animation = `animateToRight ${DURATION}ms forwards`;
        newImage.style.animation = `animateFromLeft ${DURATION}ms forwards`;
    }
    }


    const updatePosition = (newPosition) => (position = newPosition);

    const resetAnimatingToFalse = () => {
    setTimeout(()=>{
        animating = false;
    }, DURATION + 1)
    };

    const transitionImages = (direction) => {
    //Cancel if already animating
    if (animating) return;
    //Set up date (position and images)
    const { currentPosition, newPosition } = getPositions(direction);
    const { currentImage, newImage } = getImages(currentPosition, newPosition)
    //All functionality
    setAnimatingToTrue();
    runAnimations(currentImage, newImage, direction);
    updatePosition(newPosition);
    resetAnimatingToFalse();
    };

    //Grab direction from the buttons data-direction property
    const handleDirectionButton = (e) => {
    const button = e.target.closest('button');
    const direction = button.dataset.direction;
    transitionImages(direction);
    };

    const handleKeyDown = (e) => {
    const key = e.key;
    if(key === 'ArrowRight') btnNext.click()
    if(key === 'ArrowLeft') btnPrevious.click()
    };

    window.addEventListener('DOMContentLoaded', ()=>{
    //Add events for direction button
    btnPrevious.addEventListener('click', handleDirectionButton)
    btnNext.addEventListener('click', handleDirectionButton)

    window.addEventListener('keydown', handleKeyDown)
    })

}