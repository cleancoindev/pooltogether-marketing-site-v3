import React from 'react'
import classnames from 'classnames'

export const BoxLinkWithImage = ({
  children,
  href,
  isExternal,
  className,
  imgSrc,
  title
}) => {
  let target, rel
  if (isExternal) {
    target = '_blank'
    rel = 'noopener noreferrer'
  }

  return <a
    href={href}
    target={target}
    rel={rel}
    title={title}
    className={classnames(
      'flex items-center sm:w-2/3 lg:w-3/5 bg-card hover:bg-card-selected shadow-lg trans my-2 py-4 px-8',
      className || ''
    )}
  >
    <img
      alt={`${title} logo`}
      src={imgSrc}
      className='w-12 h-12 m-4 lg:m-2'
    />
    <p
      className='my-0 w-8/12 mx-2'
    >
      {children}
    </p>
  </a>
}