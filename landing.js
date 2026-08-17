document.addEventListener("DOMContentLoaded", () => {
    const scene = document.getElementById('scene');
    const mockup = document.getElementById('mockup');

    // Add mousemove event listener to the 3D container
    scene.addEventListener('mousemove', (e) => {
        // Get the dimensions and position of the container
        const rect = scene.getBoundingClientRect();
        
        // Calculate the mouse's X and Y coordinates relative to the center of the container
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);

        // Define how aggressively it tilts (lower number = more tilt)
        const tiltFactor = 15;

        // Calculate rotation degrees based on mouse position
        const rotateY = (x / (rect.width / 2)) * tiltFactor;
        const rotateX = -(y / (rect.height / 2)) * tiltFactor;

        // Apply the CSS 3D transform
        mockup.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Reset the transform when the mouse leaves the container
    scene.addEventListener('mouseleave', () => {
        // Return to the default isometric view smoothly
        mockup.style.transition = 'transform 0.5s ease-out';
        mockup.style.transform = 'rotateX(15deg) rotateY(-15deg)';
    });

    // Remove the smooth transition during active mouse movement to prevent lag
    scene.addEventListener('mouseenter', () => {
        mockup.style.transition = 'transform 0.1s ease-out';
    });
});