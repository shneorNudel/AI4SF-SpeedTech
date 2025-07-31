function extractObject(processName){ 
  if (typeof processName !== 'string') {
    throw new TypeError('processName must be a string');
  }
  const parts = processName.split('.');
  return parts[0];
}