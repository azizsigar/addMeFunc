function formatDate(date) {
    let [d,m,y]= date.split("/")
    
  return `${y}/${d}/${m}`
  }
  console.log(formatDate("11/12/2019"))