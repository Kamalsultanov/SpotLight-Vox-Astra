import React from 'react'

const Stories = () => {

  const stories = [
    { 
      name: "Oprah Winfrey", 
      occupation: "Media Mogul, Philanthropist, and Actress", 
      story: "Oprah Winfrey survived childhood abuse and poverty. She was molested as a child and faced numerous challenges growing up. Despite this, she became one of the most influential media personalities in the world, using her platform to advocate for survivors and support charitable causes." 
    },
    { 
      name: "Rihanna", 
      occupation: "Singer, Entrepreneur, and Philanthropist", 
      story: "Rihanna is a survivor of domestic abuse. She has spoken openly about her experience in an abusive relationship, using her story to raise awareness about domestic violence. Through her Clara Lionel Foundation, she supports survivors and funds programs to prevent abuse." 
    },
    { 
      name: "Gabrielle Union", 
      occupation: "Actress, Author, and Activist", 
      story: "Gabrielle Union is a survivor of sexual assault, which she experienced as a teenager. She has become a vocal advocate for survivors, sharing her story to break the stigma and push for systemic change. She also works with organizations that support abuse survivors." 
    },
    { 
      name: "Patrick Stewart", 
      occupation: "Actor and Activist", 
      story: "Patrick Stewart grew up in a household with domestic abuse, witnessing his father abuse his mother. He has used his platform to speak out against domestic violence, supporting organizations like Refuge and advocating for survivors' rights." 
    }
  ];

  return (
    <section id="stories" className='w-full   bg-gradient-to-r from-[#1f1e1e] to-[#3b3b3b]  '>
       <div className="text-white w-full flex  flex-col text-center justify-center  p-8 ">
        <h3 className='font-victor-medium text-3xl my-3 '><span className="underline">Stories</span> of resilience and hope. </h3>
        <p className=' w-full md:w-1/2 mx-auto text-sm  md:text-lg'>These stories remind us of resilience and the need for action. Support survivors, speak out against abuse, and help create a safer world.</p>
      </div>
      <div id='storiescontainer' className='w-full md:flex items-center justify-center gap-5' >
             {stories.map((item, index) => (
                <div 
                  key={index} 
                  className="stories-tab text-white"
                >
                 <h1 className='text-4xl m-4 font-victor-medium'>{item.name}.</h1>
                 <h3 className="font-victor-medium mx-4 text-[0.8em]">{ item.occupation}</h3>
                  
                  <div className="text-[#DCDCDC] font-victor-regular mx-3 my-4">
                    <p className=" px-4 py-3 text-lg">{item.story}</p>
                  </div>
                </div>
              ))}
      </div>
    </section>
  )
}

export default Stories