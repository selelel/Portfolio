import {cont} from '../../Context/Context'


const info = {
  name: 'Jan Russel Gorembalem',
  address: 'Bulihan, Silang, Cavite',
  number: '0981 459 5078',
  email: 'janrusselgorembalem4@gmail.com',
  objective: {
    name:'Objective',
    description:`Seeking a challenging position within your esteemed company to apply and further develop my skills and abilities as a web developer. With a strong foundation in web development and a passion for creating innovative digital solutions, I am confident in my ability to contribute value and positively impact your organization's success in the field of web development.`
  },
  education:'Education'
}


const Resume = () =>{
  const context = cont();
  return(
    <>
    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg '>{info.name}</p>
      <p>{info.address}</p>
      <p>{info.number}</p>
      <p>{info.email}</p>
    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg'>{info.objective.name}</p>
      <p className='text-justify'>{info.objective.description}</p>
    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg'>{info.education}</p>

      <div className='flex h-32'>
        <p className='my-auto h-fit font-semibold mr-6 min-w-fit '>2021 - 2023</p>
        <div className='w-48 border-l border-black pl-6 my-auto h-fit'>
          <p>STI College Carmona</p>
          <p>Senior High School IT in Mobile App and Web Development (<span className='font-semibold'>MAWD</span>)</p> 
          <p>Award:  <span className='font-semibold'>With Honors</span></p>
</div>
      </div>

      <div className='flex h-32'>
        <p className='my-auto h-fit font-semibold mr-6 min-w-fit'>2017 - 2020</p>
        <div className='w-48 border-l border-black pl-6 my-auto h-fit'>
          <p>Bulihan National HighSchool</p>
          <p>Junior High School ICT</p> 
          <p>Award:  <span className='font-semibold'>With Honors</span></p>
</div>
      </div>
    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg '>Skills</p>
      <ul className='list-disc ml-10'>
        <li className='text-justify m-1'>Has knowledge of performing administrative tasks (communication-related tasks,
scheduling tasks, organizational tasks, and miscellaneous administrative tasks)</li>
        <li className='text-justify m-1'>Has the skill to perform graphic design and video design.</li>
        <li className='text-justify m-1'>Has experience creating websites and programs using a specific computer
programming language (including HTML, CSS, Java, and JavaScript).</li>
        <li className='text-justify m-1'>Has the needed skills of problem-solving, reliability, fast learning, and persistence.</li>
        <li className='text-justify m-1'>Has strong interpersonal communication skills, with excellent verbal and written
communication abilities.</li>
      </ul>
    </div>

    <div className='mx-3 p-3 text-[0.7rem] tracking-wide'>
      <p className='font-semibold font-body text-lg '>Extra-Curricular Activities</p>
      <ul className='list-disc ml-5'>
        <li className='text-justify m-1'>TAGISAN NG TALINO AT SINING 2023 Local-Level Competitions CodeFest Hackathon (Champion)</li>
        <li className='text-justify m-1'>Mapúa MCL ACM CodeX Competition (Entrant).</li>
        <li className='text-justify m-1'>ShuttersBugs (Photography and Videography).</li>
        <li className='text-justify m-1'>Chess</li>
        <li className='text-justify m-1'>Table Tennis</li>
      </ul>
    </div>



    </>
  )
}
export default Resume