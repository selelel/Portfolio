import {cont} from '../../Context/Context'


const info = {
  name: 'Jan Russel Gorembalem',
  address: 'Bulihan, Silang, Cavite',
  number: '0981 459 5078',
  email: 'janrusselgorembalem4@gmail.com',
  objective: `Seeking a challenging position within your esteemed company to apply and further develop my skills and abilities as a web developer. With a strong foundation in web development and a passion for creating innovative digital solutions, I am confident in my ability to contribute value and positively impact your organization's success in the field of web development.`,
  education:[
    {
      year: '2021 - 2023',
      desciption: 'STI College Carmona Senior High School IT in Mobile App and Web Development (MAWD) Award: With Honors'
    },
    {
      year: '2017 - 2020',
      desciption: 'Bulihan National HighSchool Junior High School ICT Award: With Honors'
    }
  ],
  skill:[
    'Has knowledge of performing administrative tasks (communication-related tasks, scheduling tasks, organizational tasks, and miscellaneous administrative tasks)',

    'Has the skill to perform graphic design and video design.',

    'Has experience creating websites and programs using a specific computer programming language (including HTML, CSS, Java, and JavaScript).',

    'Has the needed skills of problem-solving, reliability, fast learning, and persistence.',

    'Has strong interpersonal communication skills, with excellent verbal and written communication abilities.'
  ],
  extra:[
    'TAGISAN NG TALINO AT SINING 2023 Local-Level Competitions CodeFest Hackathon (Champion)',
    'Mapúa MCL ACM CodeX Competition (Entrant).',
    'ShuttersBugs (Photography and Videography).',
    'Chess',
    'Table Tennis'
  ]

}


const Resume = () =>{
  const context = cont();
  return(
    <>
    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
    <p className='font-thin font-body text-lg underline italic mb-3'>**not an official resume. </p>
      <p className='font-semibold font-body text-lg'>{info.name}</p>
      <p>{info.address}</p>
      <p>{info.number}</p>
      <p>{info.email}</p>
    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg'>Objective</p>
      <p className='text-justify'>{info.objective}</p>
    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg'>Education</p>

      {info.education.map((el, index)=>{
        return (
          <div className='flex h-32'>
        <p className='my-auto h-fit font-semibold mr-6 min-w-fit'>{info.education[index].year}</p>
        <div className='w-48 border-l border-black pl-6 my-auto h-fit'>
        {info.education[index].desciption}
        </div>
      </div>
        )
      })}

    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg '>Skills</p>
      <ul className='list-disc ml-10'>
        {
          info.skill.map((el, index)=>{
            return(
              <li className='text-justify m-1'>
                {info.skill[index]}
              </li>
            )
          })
        }
      </ul>
    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg '>Extra-Curricular Activities</p>
      <ul className='list-disc ml-5'>
      {
          info.extra.map((el, index)=>{
            return(
              <li className='text-justify m-1'>
                {info.extra[index]}
              </li>
            )
          })
        }
      </ul>
    </div>



    </>
  )
}
export default Resume