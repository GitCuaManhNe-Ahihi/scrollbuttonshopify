import { AiOutlineArrowUp } from "react-icons/ai"
import { HiArrowNarrowUp, HiArrowUp, HiOutlineArrowNarrowUp, HiOutlineArrowUp } from "react-icons/hi"
import { RiArrowUpFill, RiArrowUpSLine } from 'react-icons/ri'
import { TiArrowUpOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from "react-redux"
import { changeicon } from "../store/sliceApp"
import { ColorPick } from "./ColorPick"

const icon = [<AiOutlineArrowUp />, <HiArrowNarrowUp />, <HiArrowUp />, <HiOutlineArrowNarrowUp />,
<HiOutlineArrowUp/>,<RiArrowUpFill/>,<RiArrowUpSLine/>,<TiArrowUpOutline/>]
export default function IconCustom() {
    const {background,color} = useSelector(state => state.Appslide[0])
    const dispatch = useDispatch()
    return (
        <>
            <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                {
                    icon.map((item, key) =>
                        <div
                         onClick={()=>{dispatch(changeicon(key))}}
                         key={key} style={{
                            height: '30px'
                            , width: '30px', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            marginLeft: '10px',color:color,background:background,marginBottom:'10px'
                        }}
                        >
                            {item}
                        </div>
                    )
                }
            </div>
            <div>
                <p>Change color</p>
                <ColorPick type={1}/>
            </div>
        </>
    )
}