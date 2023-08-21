import React, { useState } from 'react'
import FooterMenu from "../components/FooterMenu"
import TitleHeader from '../components/TitleHeader';
import { useLocation } from 'react-router-dom';
import { useFrappeGetCall, useFrappeGetDoc, useFrappeGetDocList, useFrappeAuth } from 'frappe-react-sdk';

function CollectPoints() {
  const { currentUser } = useFrappeAuth()

  const { data } = useFrappeGetDoc('How To Collect Points', currentUser, {
    fields: ['title', 'description']
  })

  return (
    <>
      <TitleHeader link="/my-account" title={'วิธีเก็บคะแนน'} />
      <div className="px-[20px] mt-[53px] pt-9">
        {data && (
          <>
            <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>{data.title}</h2>
            <div className='mt-2 info-desc' dangerouslySetInnerHTML={{__html:data.description}}/>
          </>
        )}
      </div>
      <FooterMenu active={3} />

      {/* 
      
            <div className="px-[20px] mt-[53px] pt-9">
        <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>เงื่อนไขในการให้คะแนน </h2>
        <ul className='mt-2 ml-5'>
          <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าบริการปกติ ทุก 500 บาท มีค่าเท่ากับ 1 คะแนน </li>
          <li className='text-sm font-medium text-[#585858] list-disc leading-[20px]'>ค่าบริการซ่อมสีและตัวถัง (ฺB/P) กรณีประกันจ่าย 1,000 บาท มีค่าเท่ากับ 1 คะแนน </li>
        </ul>
      </div>
      */}
    </>
  )
}

export default CollectPoints