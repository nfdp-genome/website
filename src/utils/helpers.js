/**
 * Format a date string based on language
 * @param {string} dateString - ISO date string
 * @param {string} language - 'ar' or 'en'
 * @returns {string} Formatted date
 */
export function formatDate(dateString, language = 'ar') {
  const date = new Date(dateString)

  if (language === 'ar') {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('ar-SA', options)
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

/**
 * Animate counter from 0 to target
 * @param {function} setter - State setter function
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
export function animateCounter(setter, target, duration = 2000) {
  const startTime = performance.now()

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function for smooth animation
    const easeOutQuad = (t) => t * (2 - t)
    const currentValue = Math.floor(easeOutQuad(progress) * target)

    setter(currentValue)

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      setter(target)
    }
  }

  requestAnimationFrame(updateCounter)
}

/**
 * Debounce a function
 * @param {function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {function} Debounced function
 */
export function debounce(func, wait = 250) {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle a function
 * @param {function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {function} Throttled function
 */
export function throttle(func, limit = 250) {
  let inThrottle

  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Get class names conditionally
 * @param  {...any} classes - Class names or objects
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes
    .filter(Boolean)
    .map(c => {
      if (typeof c === 'string') return c
      if (typeof c === 'object') {
        return Object.entries(c)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ')
      }
      return ''
    })
    .join(' ')
    .trim()
}

/**
 * Generate a unique ID
 * @param {string} prefix - Optional prefix
 * @returns {string} Unique ID
 */
export function generateId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}
