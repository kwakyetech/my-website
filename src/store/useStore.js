import { create } from 'zustand';

/**
 * @typedef {Object} ContactFormState
 * @property {string} name - Contact form name field
 * @property {string} email - Contact form email field
 * @property {string} message - Contact form message field
 */

/**
 * @typedef {Object} StoreState
 * @property {boolean} isDarkMode - Current theme mode (true for dark, false for light)
 * @property {string} activeSection - Currently active navigation section
 * @property {ContactFormState} contactForm - Contact form state object
 * @property {string} selectedProjectCategory - Currently selected project category filter
 */

/**
 * @typedef {Object} StoreActions
 * @property {() => void} toggleTheme - Toggle between dark and light theme
 * @property {(section: string) => void} setActiveSection - Set the active navigation section
 * @property {(field: keyof ContactFormState, value: string) => void} updateContactForm - Update a specific contact form field
 * @property {() => void} resetContactForm - Reset all contact form fields to empty strings
 * @property {(category: string) => void} setProjectCategory - Set the selected project category filter
 */

/**
 * Global Zustand store for managing application state
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<StoreState & StoreActions>>}
 */
const useStore = create((set, get) => ({
  // Theme State
  /** @type {boolean} */
  isDarkMode: false,
  
  /**
   * Toggle between dark and light theme modes
   * @function
   * @returns {void}
   */
  toggleTheme: () => set((state) => ({ 
    isDarkMode: !state.isDarkMode 
  })),

  // Navigation State
  /** @type {string} */
  activeSection: 'home',
  
  /**
   * Set the currently active navigation section
   * @function
   * @param {string} section - The section name to set as active
   * @returns {void}
   */
  setActiveSection: (section) => set({ 
    activeSection: section 
  }),

  // Contact Form State
  /** @type {ContactFormState} */
  contactForm: {
    name: '',
    email: '',
    message: ''
  },
  
  /**
   * Update a specific field in the contact form
   * @function
   * @param {keyof ContactFormState} field - The field name to update
   * @param {string} value - The new value for the field
   * @returns {void}
   */
  updateContactForm: (field, value) => set((state) => ({
    contactForm: {
      ...state.contactForm,
      [field]: value
    }
  })),
  
  /**
   * Reset all contact form fields to empty strings
   * @function
   * @returns {void}
   */
  resetContactForm: () => set({
    contactForm: {
      name: '',
      email: '',
      message: ''
    }
  }),

  // Project Filter State
  /** @type {string} */
  selectedProjectCategory: 'all',
  
  /**
   * Set the selected project category filter
   * @function
   * @param {string} category - The category to filter projects by
   * @returns {void}
   */
  setProjectCategory: (category) => set({ 
    selectedProjectCategory: category 
  }),
}));

export default useStore;