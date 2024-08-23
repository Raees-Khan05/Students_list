import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { id : 1 , studentName : 'Hassan' , fatherName : 'Ayoub' , rollNo : 45  },
    { id : 2 , studentName : 'Fawad' , fatherName : 'Zahid' , rollNo : 46  },
    { id : 3 , studentName : 'Aashir' , fatherName : 'Rahat' , rollNo : 48  },
    { id : 4 , studentName : 'Nadeem' , fatherName : 'Arshad' , rollNo : 57  },
    { id : 5 , studentName : 'Saad' , fatherName : 'Naeem' , rollNo : 52 },
  ])

  return (
    <div>
     <h1 className='p-9' >Students List Using useState</h1>
      <table className="min-w-full bg-white border-collapse">
        <tbody>

          <tr>
            <td className="py-2 px-4 border-b border-gray-200 font-bold">Name</td>
            <td className="py-2 px-4 border-b border-gray-200 font-bold">Father's Name</td>
            <td className="py-2 px-4 border-b border-gray-200 font-bold">Roll No</td>
          </tr>

          {students.map((student )=> (
            <tr key={student.id}>
                <td className="py-2 px-4 border-b border-gray-200">{student.studentName}</td>
                <td className="py-2 px-4 border-b border-gray-200">{student.fatherName}</td>
                <td className="py-2 px-4 border-b border-gray-200">{student.rollNo}</td>
            </tr>
          ))}
              </tbody>
          </table>
    </div>
  )
}

export default App;

