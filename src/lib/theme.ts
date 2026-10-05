/**
 * Runs in <head> before the page paints, so a visitor who prefers dark mode
 * never sees a white flash. Uses the saved choice, otherwise the OS setting.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;
