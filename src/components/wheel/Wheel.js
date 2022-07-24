import React from 'react'
import './Wheel.scss'
import { Link } from "react-router-dom";
import {MdBathtub} from 'react-icons/md'
import {TbLamp} from 'react-icons/tb'
import {GiSpookyHouse,GiRocketThruster,GiWireframeGlobe} from 'react-icons/gi'
import {CgMagnet} from 'react-icons/cg'
import {BsDoorOpenFill} from 'react-icons/bs'
import {BiFridge} from 'react-icons/bi'
const Wheel = () => {
  
  const BNone=()=>{
    document.getElementById('A').classList.add('d-none')
    document.getElementById('B').classList.remove('d-none')
    document.getElementById('B').classList.add('d-block')
    document.getElementById('C').classList.remove('d-block')
    document.getElementById('C').classList.add('d-none')
  }
  const CNone=()=>{
    document.getElementById('B').classList.add('d-none')
    document.getElementById('C').classList.remove('d-none')
    document.getElementById('C').classList.add('d-block')
    document.getElementById('D').classList.remove('d-block')
    document.getElementById('D').classList.add('d-none')
  }
  const DNone=()=>{
    document.getElementById('C').classList.remove('d-block')
    document.getElementById('C').classList.add('d-none')
    document.getElementById('D').classList.remove('d-none')
    document.getElementById('D').classList.add('d-block')
    document.getElementById('E').classList.remove('d-block')
    document.getElementById('E').classList.add('d-none')
  }
  const ENone=()=>{
    document.getElementById('D').classList.add('d-none')
    document.getElementById('E').classList.remove('d-none')
    document.getElementById('E').classList.add('d-block')
    document.getElementById('F').classList.remove('d-block')
    document.getElementById('F').classList.add('d-none')
  }
  const FNone=()=>{
    document.getElementById('E').classList.remove('d-block')
    document.getElementById('E').classList.add('d-none')
    document.getElementById('F').classList.remove('d-none')
    document.getElementById('F').classList.add('d-block')
    document.getElementById('G').classList.remove('d-block')
    document.getElementById('G').classList.add('d-none')
  }
  const GNone=()=>{
    document.getElementById('F').classList.remove('d-block')
    document.getElementById('F').classList.add('d-none')
    document.getElementById('G').classList.remove('d-none')
    document.getElementById('G').classList.add('d-block')
    document.getElementById('H').classList.remove('d-block')
    document.getElementById('H').classList.add('d-none')
  }
  const HNone=()=>{
    document.getElementById('G').classList.remove('d-block')
    document.getElementById('G').classList.add('d-none')
    document.getElementById('H').classList.remove('d-none')
    document.getElementById('H').classList.add('d-block')
    document.getElementById('A').classList.remove('d-block')
    document.getElementById('A').classList.add('d-none')
  }
  const ANone=()=>{
    document.getElementById('H').classList.remove('d-block')
    document.getElementById('H').classList.add('d-none')
    document.getElementById('A').classList.remove('d-none')
    document.getElementById('A').classList.add('d-block')
    document.getElementById('B').classList.remove('d-block')
    document.getElementById('B').classList.add('d-none')
  }
  return (
    <>
      <div className='Wheel'>
      <div className="outer-wheels">
      <div class='circle-container'>
      <div className="inner-circule"></div>
     
        <Link to='/product/bath' class='one' onMouseEnter={ANone} ><MdBathtub className='common_icon red_icon'/></Link>
        <Link to='/product/lamp' class='two' onMouseEnter={BNone}><TbLamp  className='common_icon gray_icon'/></Link>
        <Link to='/product/house' class='three' onMouseEnter={CNone}><GiSpookyHouse className='common_icon pink_icon'/></Link>
        <Link to='/product/magnet' class='four' onMouseEnter={DNone}><CgMagnet className='common_icon dark_icon'/></Link>
        <Link to='/product/door' class='five' onMouseEnter={ENone}><BsDoorOpenFill className='common_icon wood_icon'/></Link>
        <Link to='/product/rocket' class='six' onMouseEnter={FNone}><GiRocketThruster className='common_icon blue_icon'/></Link>
        <Link to='/product/fridge' class='seven' onMouseEnter={GNone}><BiFridge className='common_icon fridge_icon'/></Link>
        <Link to='/product/frame' class='eight' onMouseEnter={HNone}><GiWireframeGlobe className='common_icon pink_icon'/></Link>
        <div className="inner-to-circule"></div>
        <div className="inner-to-inner-circule"></div>
        <div className="text">
        <div id='A'>
        <TbLamp className='ms-2 common_icon red_icon'/>
        <p>Bath</p>
        </div>
        <div id='B' className='d-none'>
        <TbLamp className='ms-2 common_icon gray_icon'/>
        <p>Lamp</p>
        </div>
        <div id='C' className='d-none'>
        <GiSpookyHouse className='ms-2 common_icon pink_icon'/>
        <p> house</p>
        </div>
        <div id='D' className='d-none'>
        <CgMagnet className='ms-2 common_icon dark_icon'/>
        <p>Magnet</p>
        </div>
        <div id='E' className='d-none'>
        <BsDoorOpenFill className='ms-2 common_icon wood_icon'/>
        <p>open door</p>
        </div>
        <div id='F' className='d-none'>
        <GiRocketThruster className='ms-2 common_icon blue_icon'/>
        <p>Rocket</p>
        </div>
        <div id='G' className='d-none'>
        <BiFridge className='ms-2 common_icon fridge_icon'/>
        <p>Fridge</p>
        </div>
        <div id='H' className='d-none'>
        <GiWireframeGlobe className='ms-2 common_icon'/>
        <p>Frame</p>
        </div>
       
        </div>
    </div>
    </div>
    <h1 className='text-center pt-5' style={{color:'#050622'}}>You can click on any icon </h1>
      </div>
      
    </>
  )
}

export default Wheel
