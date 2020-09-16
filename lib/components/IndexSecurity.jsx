import React from 'react'

import HowArt123Coins from 'assets/images/security-art-locks@2x.png'

export const IndexSecurity = () => {
  return <>
    <div
      className='bg-darkened'
    >
      <div className='pool-container mx-auto py-8 sm:pt-24'>
        <div className='flex items-center justify-between'>
          <h1
            className='w-1/2 sm:w-1/3 leading-10 sm:leading-tight'
          >
            <span
              className='text-flashy'
              style={{ display: 'block' }}
            >How</span> <div className=' -mt-3 block'>it works</div>
          </h1>

          <div className='w-16 sm:w-32'>
            <img
              src={CoinsSvg}
              className='max-w-full'
            />
          </div>
        </div>
      </div>

      <div
        className='bg-how-art-waves pb-40 px-4 sm:px-0'
        style={{
          minHeight: 200
        }}
      >
        <HowItWorksBox
          id='1'
          title='Get tickets'
          description='Deposit into any prize pool and instantly get tickets. Receive 1 ticket for every $1 deposited.'
        />

        <HowItWorksBox
          id='2'
          title='Win prizes'
          description={`As long as your money is deposited you're eligible to win prizes. Prizes are made up of the interest earned on all deposited money in the pool`}
        />

        <HowItWorksBox
          id='3'
          title='Never lose'
          description='Remove your deposit at anytime. As long as you stay in the pools you continue to be eligible to win.'
        />

        <img
          src={HowArt123Coins}
          className='mx-auto how-art-123-coins trans hidden sm:block'
        />
      </div>
    </div>
  </>
}
