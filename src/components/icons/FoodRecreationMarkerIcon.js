// Returns the "recreation" food map marker icon in URI encoded svg format

export default (width = 40, height = 40) => {
  return (
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 280 369"><path d="M274,139.79C274,65.9,214,6,140,6S6,65.9,6,139.79a133.85,133.85,0,0,0,95.91,128.29L140,363l38.09-94.92A133.87,133.87,0,0,0,274,139.79Z"
  fill="#fff" stroke="#005495" stroke-linejoin="round" stroke-width="12"/><path d="M242.88,138.9c-15.54-6.58-9-39.92-9.77-56.81C232.22,63.65,217.84,49,201.5,47.66c-20-1.59-48.39.62-60.93-10.9C126,48.47,98,45.86,77.93,47.66,62.77,49,49.42,62.6,47.47,78.07c-2.56,20.3,6.42,53.49-10.35,62,17.44,10.4,7.68,43,10.35,62A35.38,35.38,0,0,0,57.81,222.1c18.66,18,62.82,3,81.62,21.24,13.56-12.86,43-9.51,62.07-11.48,16-1.65,27.79-13.53,31-28.69,3.16-14.8-4.09-37.64,2.3-53.94C236.57,144.78,240,143.14,242.88,138.9Z"
  fill="#005495" fill-rule="evenodd"/><ellipse cx="140" cy="140.05" rx="77.96" ry="77.84" fill="none" stroke="#d6ba29" stroke-linejoin="round" stroke-width="8" stroke-dasharray="6 11"/><path d="M160.38,162.5a33.15,33.15,0,0,0-3.36-8.92,176.32,176.32,0,0,0-14-22.64l-.61-1a3.67,3.67,0,0,0-3-1.8,4,4,0,0,0-3.05,1.8V130l-1.07,1.52c-1.92,2.77-3.9,5.68-5.82,8.59A111.76,111.76,0,0,0,120,157.31a18.69,18.69,0,0,0-1.83,6.65c-.31,6.09,2.14,11.21,7.19,15.23a22.48,22.48,0,0,0,14,4.84h0a21.56,21.56,0,0,0,18.2-9.34A16.17,16.17,0,0,0,160.38,162.5Zm-5.27,10.87a18.58,18.58,0,0,1-15.76,8.1,19.43,19.43,0,0,1-12.15-4.16,15.4,15.4,0,0,1-6.27-13.22,15.66,15.66,0,0,1,1.68-5.81,112.09,112.09,0,0,1,9.25-16.82c1.84-2.84,3.83-5.75,5.81-8.51l1-1.46c0-.07.08-.07.08-.13a2.82,2.82,0,0,1,.6-.63s.24.07.62.63l.61.89a178.33,178.33,0,0,1,13.76,22.29,32.63,32.63,0,0,1,3.14,8.31A13.34,13.34,0,0,1,155.11,173.37Zm-14.37,1.52a1.32,1.32,0,0,1-1.39,1.25c-6.95,0-12.53-5.12-12.53-11.35a1.38,1.38,0,0,1,2.75,0c.08,4.84,4.44,8.79,9.78,8.79A1.37,1.37,0,0,1,140.74,174.89Z"
  fill="#d6ba29"/><path d="M154.92,90.76l-11.38.87a3.75,3.75,0,0,0-3.16-1.73h-2a3.75,3.75,0,0,0-3.16,1.73l-11.38-.87a2.92,2.92,0,0,0,0,5.82l11.38-.86a3.76,3.76,0,0,0,3.16,1.72h2a3.76,3.76,0,0,0,3.16-1.72l11.38.86a2.92,2.92,0,0,0,0-5.82Z"
  fill="#d6ba29"/><path d="M168.68,116c0-6-4.9-11.61-11-11.61H145.15v-2.12c0-2-2.58-3.6-5.76-3.6s-5.75,1.61-5.75,3.6v2.12H121.35c-6,0-10.95,5.57-10.95,11.61a9.48,9.48,0,0,0-9.24,9.5v15.85h9a9.23,9.23,0,0,0,9-9.49v-.45a8.19,8.19,0,0,1,8.2-8.19h6a7.5,7.5,0,0,1,12.25,0h6a8.19,8.19,0,0,1,8.2,8.19l.05.45a9.23,9.23,0,0,0,8.94,9.49h8.95V125.49A9.23,9.23,0,0,0,168.68,116Z"
  fill="#d6ba29"/></svg>`)
  );
};