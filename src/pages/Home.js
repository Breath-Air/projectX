import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Desktoplight = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      name,
      email,
      message,
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(dataToSubmit)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }

  useEffect(()=>{
    // Swal.fire("my sweet alert")
  },[])
  const Alert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your message has been sent',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const [days, setDays] = useState(0)
  const [hours, sethours] = useState(0)
  const [mins, setminutes] = useState(0)
  const [secs, setsecs] = useState(0)

  const deadline = "november / 22 / 2023"

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    sethours(Math.floor(time / (1000 * 60 * 60) % 24))
    setminutes(Math.floor((time / 1000 / 60) % 60))
    setsecs(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const intervel = setInterval(() => getTime(deadline), 1000)
    return () => clearInterval(intervel)
  }, [])




  return (
    <>
      <div className='h-full overflow-x-hidden lg:h-auto sm:h-auto md:h-auto'>
        <div id='Home' className="relative bg-white w-full h-screen overflow-hidden text-left text-[1.25rem] text-black font-roboto sm:h-[700px]">
          <b className="absolute top-[0.69rem] left-[1.19rem]">w3cafe.studio</b>
          <section className=" relative text-[6rem] top-[2rem] flex p-[6rem] justify-between lg:text-[4.5rem] md:p-[4rem] md:top-[3rem] md:text-[2.5rem] md:grid md:justify-center md:h-auto sm:h-auto sm:text-[2.8rem] sm:top-[5rem] sm:p-[1.19rem] sm:left-0 sm:grid sm:justify-between sm:gap-[2rem]">
            <div>
              <div className="flex flex-col items-start justify-center">
                <b className="relative [-webkit-text-stroke:1px_#000] text-gray-100">
                  <span className=''>ONE</span>
                  <span className="text-gray-200"> YEAR</span>
                </b>
                <b className="relative [-webkit-text-stroke:1px_#000]">
                  <span>HOSTING</span>
                  <span className="text-gray-200"> AND</span>
                </b>
                <b className="relative [-webkit-text-stroke:1px_#000]">
                  <span>DOMAIN</span>
                  <span className="text-gray-200"> FOR</span>
                </b>
                <b className="relative text-gray-300 [-webkit-text-stroke:1px_#000]">
                  FREE
                </b>
              </div>
            </div>
            <div className="flex flex-col items-center relative lg:text-[1rem] sm:justify-center sm:gap-[2rem] sm:top-[20%]">
              <div className="flex">
                <div>
                  <h1 className=' font-roboto font-normal text-[96px] lg:text-[80px] md:text-[4rem] sm:text-[3rem] sm:font-thin'>{hours < 10 ? "0" + hours : hours}</h1>
                </div>
                <div className=' font-roboto text-[96px] relative top-[4.5rem] lg:text-[60px] md:text-[40px] sm:text-[30px] sm:top-[3.2rem]'>
                  :
                </div>
                <div >
                  <h1 className=' font-roboto font-normal text-[96px] lg:text-[80px] md:text-[4rem] sm:text-[3rem] sm:font-thin'>{mins < 10 ? "0" + mins : mins}</h1>
                </div>
                <div className=' font-roboto text-[96px] relative top-[4.5rem] lg:text-[60px] md:text-[40px] sm:text-[30px] sm:top-[3.2rem]'>
                  :
                </div>
                <div>
                  <h1 className=' font-roboto font-normal text-[96px] lg:text-[80px] md:text-[4rem] sm:text-[3rem] sm:font-thin'>{secs < 10 ? "0" + secs : secs}</h1>
                </div>
              </div>

              <Link to="./Register">
              <button className="cursor-pointer [border:none] p-0 bg-black relative rounded-[40px] w-[12.5rem] h-[3.13rem] overflow-hidden shrink-0 bottom-[1rem] flex justify-center sm:w-[10rem] sm:left-[2%]">
                <div className="absolute top-[0.6rem] text-[1.5rem] font-roboto text-white text-left sm:text-[1rem] sm:top-[1rem] sm:font-thin">
                  Claim now
                </div>
              </button>
              </Link>
            </div>
          </section >
        </div>

        {/* About section */}

        <div id='About' className="relative bg-white w-full h-screen overflow-hidden sm:h-[600px]">
          <section className="absolute grid items-center justify-center gap-[3.13rem] text-[3rem] text-black font-roboto p-[8.5rem] lg:h-auto lg:pt-[0rem] sm:p-[1.19rem] lg:p-[3rem]">
            <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block lg:text-[3rem]">
              ABOUT
            </h2>
            <div className="relative text-[1.88rem] tracking-[0.1em] leading-[2.88rem] inline-block shrink-0 sm:text-[22px] sm:leading-[2rem] md:text-[1.5rem]">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </section>
        </div>

        {/* Our service Section */}

        <div id='Service' className="relative bg-white w-full h-screen overflow-hidden sm:h-[600px]">
          <section className="absolute grid items-center justify-center gap-[3.13rem] text-[3rem] text-black font-roboto p-[8.5rem] lg:h-auto lg:pt-[0rem] sm:p-[1.19rem] lg:p-[3rem]">
            <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block lg:text-[3rem]">
              Our Service
            </h2>
            <div className="relative text-[1.88rem] tracking-[0.1em] leading-[2.88rem] inline-block shrink-0 sm:text-[22px] sm:leading-[2rem] md:text-[1.5rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
          </section>
        </div>

        {/* Contact section */}

        <div id='Contact' className="relative bg-white w-full h-screen overflow-hidden text-center text-[3rem] text-black font-roboto lg:h-auto sm:h-[700px]">
          <h1 className="m-0 absolute top-[1rem] left-[8.13rem] text-inherit font-bold font-inherit text-left sm:left-[1.19rem] md:left-[3rem]">
            contact
          </h1>
          <div className='flex relative justify-center p-[9rem] lg:p-[3rem] md:grid md:justify-center sm:top-[9%]'>
            <form className=' font-roboto relative sm:bottom-[0rem]' onSubmit={handleFormSubmit}>
              <div className='flex flex-col justify-start text-left mt-[2rem]' onSubmit={Alert}>
                <div class="form-group mb-[20px]">
                  <input autoComplete='on' type="text" 
                  value={name}  
                  onChange={(event) => setName(event.target.value)} 
                  placeholder="Name" 
                  name="name" required 
                  className=' w-[330px] p-[10px] text-[1rem] outline-none border-b focus:border-b-2 border-black transition-all focus:border-b-blue-500 ' />
                </div>
                <div class="form-group">
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}placeholder="Email" name="email" required className=' w-[330px] p-[10px] text-[1rem] outline-none border-b border-black transition-all focus:border-b-2 focus:border-b-blue-500' />
                </div>
                <div class="form-group mt-[2rem]">
                  <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message" name="message" rows="5" required className=' w-[93%] resize-none p-[10px] text-[1.2rem] outline-none border border-black transition-all focus:border-blue-500 focus:border-2 focus:outline-none'></textarea>
                </div>
                <div className='flex justify-center'>
                  <button type='submit' onClick={Alert} className="cursor-pointer p-0 bg-white relative box-border w-[9.13rem] h-[2.5rem] overflow-hidden mt-8 shrink-0 border-[1px] border-solid border-black">
                    <div className="absolute top-[0rem] left-[2.19rem] text-[1.25rem] leading-[2.5rem] font-semibold font-poppins text-black text-center inline-block w-[4.75rem] h-[1.88rem]">
                      submit
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer section */}

         <div className="relative bg-white w-full h-[16rem] overflow-hidden text-left text-[1.25rem] text-black font-roboto sm:relative md:h-auto sm:hidden">

          <div className=" h-[1px] w-screen bg-black"></div>

          <div className='flex justify-between md:grid md:justify-center md:w-full'>
            <div className=' p-[2rem] text-right md:p-[0rem] md:text-center'>
              <h1>
                W3cafe.studrio
              </h1>
              <p>&copy; 2023</p>
              <p>
                All Rights Are Reserved
              </p>
            </div>

            <div className="flex w-[40%] top-[1rem] relative justify-between p-[2rem] gap-[3rem] md:w-full md:p-[1rem]">
              <div>
                <div className=" font-bold text-[1.5rem]">
                  Explore
                </div>

                <div className="grid">
                  <a href='#Home' className="list-none text-black m-0">{`home `}</a>
                  <a href='#Home' className="list-none text-black m-0">about</a>
                  <a href='#Home' className="list-none text-black m-0">projects</a>
                  <a href='#Home' className="list-none text-black m-0">our services</a>
                  <a href='#Home' className="list-none text-black m-0">contact</a>
                </div>
              </div>
              <div>
                <div className=" font-bold text-[1.5rem]">
                  Social
                </div>
                <div className="grid">
                  <a href='https://linkedin.com' className="list-none text-black m-0">Linked in</a>
                  <a href='https://facebook.com' className="list-none text-black m-0">Facebook</a>
                  <a href='https://instagram.com' className="list-none text-black m-0">Instagram</a>
                  <a href='https://twitter.com' className="list-none text-black m-0">Twitter</a>
                </div>
              </div>
              <div>
                <div className=" font-bold text-[1.5rem]">
                  Legal
                </div>
                <div className="grid">
                  <a href='#Home' className="list-none text-black m-0">{`Terms & service`}</a>
                  <a href='#Home' className="list-none text-black m-0">privacy & policy</a>

                </div>
              </div>
            </div>

          </div>
        </div> 
      </div>
    </>
  );
};

export default Desktoplight;