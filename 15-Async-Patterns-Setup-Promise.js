const {readFile} = require('fs');

const getText = (path) =>{
  return new Promise((resolve, reject) =>{
    readFile('./content/subfolder/first.txt', 'utf8', (err, data) => {
      if(err){
        return
      } else {
        console.log(data)
      }
    })
  })
}

getText('./content/subfolder/first.txt')
.then(result => console.log(result))
.catch((err) => console.log(err))
