import React from 'react'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  visible: {
    opacity: 1,
    x: 0,
  }
}

export const GridItemBackedBy = (props) => {
  const {
    attribution,
    img,
    title,
    url,
    small,
  } = props

  let maxHeight = props.maxHeight || 44

  return <>
    <motion.a
      href={url}
      title={`View ${title}`}
      target='_blank'
      title={`Open ${title}'s website`}
      rel='noopener noreferrer'
      className='w-full sm:w-1/3 flex-grow rounded-lg my-1 p-2 trans flex flex-col no-underline px-4 lg:px-8'
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className='bg-secondary hover:bg-highlight-5 flex flex-col justify-center hover:shadow-purple-xl trans p-2 xs:px-10 h-20 rounded-lg'
      >
        <img
          src={img}
          className={`${small ? 'w-full xs:w-auto xs:h-12' : 'h-32'} fill-white text-center`}
          title={attribution || ''}
          style={{
            maxHeight
          }}
        />
      </div>
    </motion.a>
  </>
}
