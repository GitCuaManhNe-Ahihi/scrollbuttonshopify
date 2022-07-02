import { AiOutlineArrowUp } from "react-icons/ai"
import { HiArrowNarrowUp, HiArrowUp, HiOutlineArrowNarrowUp, HiOutlineArrowUp } from "react-icons/hi"
import { RiArrowUpFill, RiArrowUpSLine } from 'react-icons/ri'
import { TiArrowUpOutline } from 'react-icons/ti'
import { useSelector } from 'react-redux'
const icon = [<AiOutlineArrowUp />, <HiArrowNarrowUp />, <HiArrowUp />, <HiOutlineArrowNarrowUp />,
<HiOutlineArrowUp />, <RiArrowUpFill />, <RiArrowUpSLine />, <TiArrowUpOutline />]
export function SCRButton() {
  const {background,color,icon:index,positioni,width,height,borderR} = useSelector(state => state.Appslide[0])
  const ToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
      {

        <div onClick={()=>ToTop()} style={{
          position: 'fixed',
          ...positioni,
          height: `${height}px`
          , width: `${width}px`, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          borderRadius:`${borderR}px`,
          marginLeft: '10px', color: color, background: background, marginBottom: '10px',
          fontSize:'25px'
        }}
        >
          {icon[index||0]}
        </div>

      }
    </div>
  )
}
