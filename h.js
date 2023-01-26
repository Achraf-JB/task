/*******************************1er question*/

const persons = [

{ name : "MONCEF" , age: 13} ,
{ name : "BAHIJA" , age: 23} ,
{ name : "ALA" , age: 18} ,

];
function MineurMajeur(list) {
    return list.map(person => {
      let Status = (person.age >= 18) ? "majeur" : "mineur";
      return {...person, Status};
    });
  }
  
let newpersons= MineurMajeur(persons);
console.log(newpersons);


/*******************************4eme question*/

const etudiants = [
    { name : "sarah" , note : undefined },
    { name : "monya" , note : 7 },
    { name : "carlos" , note : 13 },
    { name : "fadhel" , note : 18 },
    ]
    function FailedStudent(list) {
      // Filter out students without notes
      let students = list.filter(student => student.note !== undefined);
      
      // Sort students by note in descending order
      students.sort((a, b) => b.note - a.note);
      
      // Calculate the average note
      let sum = students.map(student => student.note).reduce((total, note) => total + note);
      let average = sum / students.length;
      
      // Add a mention field to each student based on their note
      students = students.map(student => {
        if (student.note >= average) {
          student.mention = "bien";
        } else {
          student.mention = "passable";
        }
        return student;
      });
      
      return students;
    }
    let result =  FailedStudent(etudiants);
    console.log(result)