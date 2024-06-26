import TemplatePointers from "./components/TemplatePointers"



function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <h1 className='text-3xl text-center font-bold '><img src="/logo192_l.png" className="w-12 inline-block mr-2 mask mask-circle" alt="dashwind-logo" />OnTask</h1>

                <div className="text-center mt-12"><img src="https://nife.io/wp-content/uploads/2022/08/cloud.gif" alt="Dashwind Admin Template" className="w-60 inline-block"></img></div>
              
              {/* Importing pointers component */}
              <TemplatePointers />
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro