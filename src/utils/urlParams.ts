
/**
 * Utility functions for working with URL parameters instead of localStorage
 * This ensures all state is stored in the URL for better compatibility
 */

/**
 * Gets a parameter value from the URL
 * @param name The name of the parameter to get
 * @returns The parameter value or null if not found
 */
export const getUrlParam = (name: string): string | null => {
  const hash = window.location.hash;
  const queryIndex = hash.indexOf('?');
  
  if (queryIndex === -1) {
    return null;
  }
  
  const queryString = hash.substring(queryIndex + 1);
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
};

/**
 * Sets a parameter in the URL
 * @param name The parameter name
 * @param value The parameter value
 */
export const setUrlParam = (name: string, value: string): void => {
  const hash = window.location.hash;
  const routeEndIndex = hash.indexOf('?');
  
  // Get the base route without query params
  const baseRoute = routeEndIndex === -1 ? hash : hash.substring(0, routeEndIndex);
  
  // Get existing query params or create new ones
  const queryString = routeEndIndex === -1 ? '' : hash.substring(routeEndIndex + 1);
  const urlParams = new URLSearchParams(queryString);
  
  // Set the new param
  urlParams.set(name, value);
  
  // Update the URL without reloading the page
  const newUrl = baseRoute + '?' + urlParams.toString();
  window.location.hash = newUrl;
};

/**
 * Removes a parameter from the URL
 * @param name The parameter name to remove
 */
export const removeUrlParam = (name: string): void => {
  const hash = window.location.hash;
  const routeEndIndex = hash.indexOf('?');
  
  if (routeEndIndex === -1) {
    return; // No params to remove
  }
  
  // Get the base route without query params
  const baseRoute = hash.substring(0, routeEndIndex);
  
  // Get existing query params
  const queryString = hash.substring(routeEndIndex + 1);
  const urlParams = new URLSearchParams(queryString);
  
  // Remove the param
  urlParams.delete(name);
  
  // Build the new URL
  const newParamString = urlParams.toString();
  const newUrl = newParamString ? baseRoute + '?' + newParamString : baseRoute;
  
  window.location.hash = newUrl;
};
