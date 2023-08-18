import React, { useState } from 'react'
import FooterMenu from "../components/FooterMenu"
import TitleHeader from '../components/TitleHeader';
import { useLocation } from 'react-router-dom';

function CollectPoints() {
  const location = useLocation();
  const url = location.state.url;

  return (
    <>
      <TitleHeader link={url} title={'วิธีเก็บคะแนน'} />
      <div className="px-[20px] mt-[53px] pt-9">
        <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>เงื่อนไขในการให้คะแนน </h2>
        <ul className='mt-2 ml-5'>
          <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าบริการปกติ ทุก 500 บาท มีค่าเท่ากับ 1 คะแนน </li>
          <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าบริการซ่อมสีและตัวถัง (ฺB/P) กรณีประกันจ่าย 1,000 บาท มีค่าเท่ากับ 1 คะแนน </li>
        </ul>
      </div>
      <FooterMenu active={3} />
    </>
  )
}

export default CollectPoints