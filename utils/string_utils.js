const getSingularOrPlural = (value, singular, plural) => {
  if (value == 1)
    return singular
  
  if (plural)
    return plural
    
  return `${singular}s`
}

export default {
  getSingularOrPlural
}