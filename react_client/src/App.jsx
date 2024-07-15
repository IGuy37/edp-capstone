import { useState , useEffect} from 'react';
import './index.css';
import Employee from './components/Employee';
import Search from './components/Search';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {

  const [employee, setEmployee] = useState({})
    
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  //       if (!response.ok) {
  //         throw new Error('Data could not be fetched!');
  //       }
  //       const json_response = await response.json();
  //       setPrediction(json_response);
  //     } catch (error) {
  //       console.error('Error fetching employees:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Router>
      <Search setEmployee={setEmployee}/>
      <Routes>
        <Route path="/" element={
          <Employee data={employee}/>
        }/>
        <Route path="/employee/:id" />
      </Routes>
    </Router>
    return(
    <div className="bg-[#FFFFFF] flex p-[85px_0_25px_0] w-[1440px] box-sizing-border">
      <div className="relative flex flex-col items-center w-[1440px] h-[fit-content] box-sizing-border">
        <div className="bg-[linear-gradient(270.12deg,#FFFFFF_0.1%,#FA0053_47.15%,#FFFFFF_99.9%)] relative m-[0_0_16px_0] flex p-[70px_604.6px_95px_0] w-[1440px] box-sizing-border">
          <div className="relative flex flex-col box-sizing-border">
            <div className="m-[0_0_55px_1px] inline-block break-words font-['Inter'] font-[var(--title-hero-font-weight,700)] text-[72px] tracking-[var(--title-hero-letter-spacing,-2.2px)] leading-[var(--title-hero-line-height,1.2)] text-[#000000]">
              Full Name
            </div>
            <div className="relative m-[0_0_24px_0] flex self-start box-sizing-border">
              <div className="relative flex flex-row box-sizing-border">
                <div className="m-[0_12px_4px_0] flex w-[24px] h-[24px] box-sizing-border">
                  <img className="w-[14px] h-[20px]" />
                </div>
                <div className="m-[2px_0_0_0] inline-block break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
                  Location
                </div>
              </div>
              <div className="absolute left-[1px] top-[0px] flex w-[24px] h-[24px] box-sizing-border">
                <img className="w-[14px] h-[20px]" />
              </div>
            </div>
            <div className="relative m-[0_1px_0_1px] flex self-start box-sizing-border">
              <div className="relative flex flex-row box-sizing-border">
                <div className="m-[0_16px_4px_0] flex w-[24px] h-[24px] box-sizing-border">
                  <img className="w-[20px] h-[20px]" />
                </div>
                <div className="m-[2px_0_0_0] inline-block break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
                  Date
                </div>
              </div>
              <div className="absolute left-[1px] top-[0px] flex w-[24px] h-[24px] box-sizing-border">
                <img className="w-[20px] h-[20px]" />
              </div>
            </div>
          </div>
          <span className="absolute left-[255px] top-[148px] break-words font-['Inter'] font-[var(--subtitle-font-weight,400)] text-[32px] leading-[var(--subtitle-line-height,1.2)] text-[#000000]">
            Job Role
          </span>
          <span className="absolute left-[256px] top-[70px] break-words font-['Inter'] font-[var(--title-hero-font-weight,700)] text-[72px] tracking-[var(--title-hero-letter-spacing,-2.2px)] leading-[var(--title-hero-line-height,1.2)] text-[#000000]">
            Full Name
          </span>
          <span className="absolute left-[256px] top-[148px] break-words font-['Inter'] font-[var(--subtitle-font-weight,400)] text-[32px] leading-[var(--subtitle-line-height,1.2)] text-[#000000]">
            Job Role
          </span>
          <span className="absolute left-[281px] bottom-[143px] break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
            Location
          </span>
          <span className="absolute left-[292px] bottom-[95px] break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
            Date
          </span>
        </div>
        <div className="relative m-[0_0_0_47px] flex box-sizing-border">
          <div className="relative flex flex-col box-sizing-border">
            <div className="m-[0_0_10px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
              CONTACT
            </div>
            <div className="bg-[#807B7B] m-[0_0_36px_0] self-start w-[548px] h-[0px]">
            </div>
            <div className="m-[0_0_8px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
              Mobile:
            </div>
            <div className="m-[0_0_25px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
              Phone Number
            </div>
            <div className="m-[0_0_10px_0] inline-block self-start break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#000000]">
              TEAM:
            </div>
            <div className="relative flex box-sizing-border">
              <div className="relative flex flex-row box-sizing-border">
                <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] m-[0_34px_0_0] flex flex-col p-[15px_15px_26px_15px] box-sizing-border">
                  <div className="bg-[var(--image-placeholder-background-image,url('assets/images/Image.png'))] bg-[var(--image-placeholder-background-position-x,50%)_var(--image-placeholder-background-position-y,50%)] bg-[length:var(--image-placeholder-background-size,contain)] bg-var(--image-placeholder-background-repeat, no-repeat) bg-var( bg-var( m-[0_0_16px_0] w-[208px] h-[247px]">
                  </div>
                  <div className="flex self-start box-sizing-border">
                    <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
                      Employee Name
                    </span>
                  </div>
                </div>
                <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] m-[0_56px_0_0] flex flex-col p-[15px_15px_26px_15px] box-sizing-border">
                  <div className="bg-[var(--image-placeholder-background-image,url('assets/images/Image.png'))] bg-[var(--image-placeholder-background-position-x,50%)_var(--image-placeholder-background-position-y,50%)] bg-[length:var(--image-placeholder-background-size,contain)] bg-var(--image-placeholder-background-repeat, no-repeat) bg-var( bg-var( m-[0_0_16px_0] w-[208px] h-[247px]">
                  </div>
                  <div className="flex self-start box-sizing-border">
                    <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
                      Employee Name
                    </span>
                  </div>
                </div>
                <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] m-[164px_0_24px_0] flex flex-col p-[23px_0_23px_23px] w-[407px] box-sizing-border">
                  <div className="m-[0_0_24px_0] flex self-start box-sizing-border">
                    <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
                      Reports To
                    </span>
                  </div>
                  <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
                    <div className="rounded-[9999px] m-[0_12px_6px_0] flex w-[40px] h-[40px] box-sizing-border">
                      <div className="bg-[url('assets/images/Shape.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[40px] h-[40px]">
                      </div>
                    </div>
                    <div className="flex flex-col box-sizing-border">
                      <div className="m-[0_0_2px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#757575]">
                        Title
                      </div>
                      <span className="break-words font-['Inter'] font-[var(--body-base-font-weight,400)] text-[16px] leading-[var(--body-base-line-height,1.4)] text-[#B3B3B3]">
                        Description
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] absolute left-[1px] bottom-[0px] flex flex-col p-[15px_15px_26px_15px] box-sizing-border">
                <div className="bg-[var(--image-placeholder-background-image,url('assets/images/Image.png'))] bg-[var(--image-placeholder-background-position-x,50%)_var(--image-placeholder-background-position-y,50%)] bg-[length:var(--image-placeholder-background-size,contain)] bg-var(--image-placeholder-background-repeat, no-repeat) bg-var( bg-var( m-[0_0_16px_0] w-[208px] h-[247px]">
                </div>
                <div className="flex self-start box-sizing-border">
                  <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
                    Employee Name
                  </span>
                </div>
              </div>
              <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] absolute left-[275px] bottom-[0px] flex flex-col p-[15px_15px_26px_15px] box-sizing-border">
                <div className="bg-[var(--image-placeholder-background-image,url('assets/images/Image.png'))] bg-[var(--image-placeholder-background-position-x,50%)_var(--image-placeholder-background-position-y,50%)] bg-[length:var(--image-placeholder-background-size,contain)] bg-var(--image-placeholder-background-repeat, no-repeat) bg-var( bg-var( m-[0_0_16px_0] w-[208px] h-[247px]">
                </div>
                <div className="flex self-start box-sizing-border">
                  <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
                    Employee Name
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#807B7B] absolute left-[1px] top-[32px] w-[548px] h-[0px]">
          </div>
          <span className="absolute left-[1px] top-[69px] break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
            Mobile:
          </span>
          <span className="absolute left-[1px] top-[99px] break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#000000]">
            Phone Number
          </span>
          <span className="absolute left-[1px] top-[146px] break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#000000]">
            TEAM:
          </span>
        </div>
      </div>
      <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] absolute top-[155px] right-[208px] flex flex-col p-[15px_15px_0_15px] h-[631px] box-sizing-border">
        <div className="bg-[var(--image-placeholder-background-image,url('assets/images/Image.png'))] bg-[var(--image-placeholder-background-position-x,50%)_var(--image-placeholder-background-position-y,50%)] bg-[length:var(--image-placeholder-background-size,contain)] bg-var(--image-placeholder-background-repeat, no-repeat) bg-var( bg-var( m-[0_0_16px_0] w-[375px] h-[247px]">
        </div>
        <div className="m-[0_0_3px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
          <div className="m-[0_0_8px_0] flex box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
              SALARY
            </span>
          </div>
          <div className="flex self-start box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#1E1E1E]">
              $0
            </span>
          </div>
        </div>
        <span className="self-start break-words font-['Inter'] font-[var(--body-small-font-weight,400)] text-[14px] leading-[var(--body-small-line-height,1.4)] text-[#000000]">
          Description
        </span>
      </div>
      <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] absolute top-[155px] right-[207px] flex flex-col p-[15px_15px_0_15px] h-[631px] box-sizing-border">
        <div className="bg-[var(--image-placeholder-background-image,url('assets/images/Image.png'))] bg-[var(--image-placeholder-background-position-x,50%)_var(--image-placeholder-background-position-y,50%)] bg-[length:var(--image-placeholder-background-size,contain)] bg-var(--image-placeholder-background-repeat, no-repeat) bg-var( bg-var( m-[0_0_16px_0] w-[375px] h-[247px]">
        </div>
        <div className="m-[0_0_3px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
          <div className="m-[0_0_8px_0] flex box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
              SALARY
            </span>
          </div>
          <div className="flex self-start box-sizing-border">
            <span className="break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#1E1E1E]">
              $0
            </span>
          </div>
        </div>
        <span className="self-start break-words font-['Inter'] font-[var(--body-small-font-weight,400)] text-[14px] leading-[var(--body-small-line-height,1.4)] text-[#000000]">
          Description
        </span>
      </div>
      <div className="rounded-[8px] border-[1px_solid_#D9D9D9] bg-[#FFFFFF] absolute right-[207px] bottom-[49px] flex flex-col p-[23px_0_23px_23px] w-[407px] box-sizing-border">
        <div className="m-[0_0_24px_0] flex self-start box-sizing-border">
          <span className="break-words font-['Inter'] font-[var(--heading-font-weight,600)] text-[24px] tracking-[var(--heading-letter-spacing,-0.5px)] leading-[var(--heading-line-height,1.2)] text-[#1E1E1E]">
            Reports To
          </span>
        </div>
        <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
          <div className="rounded-[9999px] m-[0_12px_6px_0] flex w-[40px] h-[40px] box-sizing-border">
            <div className="bg-[url('assets/images/Shape.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[40px] h-[40px]">
            </div>
          </div>
          <div className="flex flex-col box-sizing-border">
            <div className="m-[0_0_2px_0] inline-block self-start break-words font-['Inter'] font-[var(--body-strong-font-weight,600)] text-[16px] leading-[var(--body-strong-line-height,1.4)] text-[#757575]">
              Title
            </div>
            <span className="break-words font-['Inter'] font-[var(--body-base-font-weight,400)] text-[16px] leading-[var(--body-base-line-height,1.4)] text-[#B3B3B3]">
              Description
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(0deg,#E1CCD3,#FFFFFF)] absolute left-[0px] top-[0px] right-[0px] flex flex-row justify-between p-[14px_0_12px_0] box-sizing-border">
        <div className="bg-[url('assets/images/Image1.png')] bg-[50%_50%] bg-cover bg-no-repeat w-[89px] h-[61px]">
        </div>
        <div className="m-[18.5px_0_18.5px_0] flex flex-row justify-between w-[360px] h-[fit-content] box-sizing-border">
          <div className="flex flex-row box-sizing-border">
            <span className="m-[0_22.8px_0_0] break-words font-['Roboto'] font-[var(--m-3-bodylarge-font-weight,400)] text-[16px] tracking-[var(--m-3-bodylarge-letter-spacing,0.5px)] leading-[var(--m-3-bodylarge-line-height,1.5)] text-[#000000]">
              Org Chart
            </span>
            <span className="break-words font-['Roboto'] font-[var(--m-3-bodylarge-font-weight,400)] text-[16px] tracking-[var(--m-3-bodylarge-letter-spacing,0.5px)] leading-[var(--m-3-bodylarge-line-height,1.5)] text-[#000000]">
              Directory
            </span>
          </div>
          <span className="break-words font-['Roboto'] font-[var(--m-3-bodylarge-font-weight,400)] text-[16px] tracking-[var(--m-3-bodylarge-letter-spacing,0.5px)] leading-[var(--m-3-bodylarge-line-height,1.5)] text-[#000000]">
            Status
          </span>
          <span className="m-[0_0px_0_0] break-words font-['Roboto'] font-[var(--m-3-bodylarge-font-weight,400)] text-[16px] tracking-[var(--m-3-bodylarge-letter-spacing,0.5px)] leading-[var(--m-3-bodylarge-line-height,1.5)] text-[#000000]">
            Help
          </span>
        </div>
        <div className="m-[7px_0_8px_0] flex flex-row w-[432.4px] h-[fit-content] box-sizing-border">
          <div className="rounded-[28px] bg-[#ECE6F0] m-[0_36.6px_0_0] flex flex-row justify-between p-[11px_19px_11px_19px] w-[360px] box-sizing-border">
            <div className="flex flex-row box-sizing-border">
              <div className="m-[6px_19px_6px_0] flex w-[48px] h-[48px] box-sizing-border">
                <div className="rounded-[100px] flex w-[40px] h-[40px] box-sizing-border">
                  <img className="w-[18px] h-[12px]" />
                </div>
              </div>
              <div className="flex box-sizing-border">
                <span className="break-words font-['Roboto'] font-[var(--m-3-bodylarge-font-weight,400)] text-[16px] tracking-[var(--m-3-bodylarge-letter-spacing,0.5px)] leading-[var(--m-3-bodylarge-line-height,1.5)] text-[#49454F]">
                  Search People
                </span>
              </div>
            </div>
            <div className="m-[3px_0_3px_0] flex w-[48px] h-[48px] box-sizing-border">
              <div className="rounded-[100px] flex w-[40px] h-[40px] box-sizing-border">
                <img className="w-[18px] h-[18px]" />
              </div>
            </div>
          </div>
          <div className="m-[4.6px_0_5.6px_0] flex w-[43px] h-[43px] box-sizing-border">
            <img className="w-[35.8px] h-[35.8px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
  )
}