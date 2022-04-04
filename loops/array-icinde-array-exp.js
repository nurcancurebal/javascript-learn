const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];


  const newArray = []

  for (let index = 0; index < webTechs.length; index++) {

    newArray.push(webTechs[index], webTechs[index].length)

    
  }

  console.log(newArray)

  //TODO [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]] bu şekilde çıktı almam lazım