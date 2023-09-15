import { useEffect } from 'react';

function PageLoader() {
  useEffect(() => {
    // Get the loader element
    const loader = document.getElementById('preloader');

    // When the component mounts
    loader.style.display = 'none'; // Hide the preloader
    document.body.style.overflow = 'auto'; // Show the scrollbar
  }, []);

  return null; // This component doesn't render anything
}

export default PageLoader;
