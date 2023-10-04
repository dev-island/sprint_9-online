const namedExport = () => {
  console.log('I am a named export')
};

export const inlineNamedExport = () => {
  console.log('I am an inline named export')
}

const defaultExport = () => {
  console.log('I am a default export')
}

// convention states exports should be at the bottom of the file
export default defaultExport;
export { namedExport };